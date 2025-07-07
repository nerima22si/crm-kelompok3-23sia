import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
import { BadgePercent, ShoppingBag, AlertCircle, Star, Activity } from "lucide-react";

export default function PelangganDashboard() {
    const [profile, setProfile] = useState(null);
    const [totalTransaksi, setTotalTransaksi] = useState(0);
    const [lastOrder, setLastOrder] = useState(null);
    const [lastKomplain, setLastKomplain] = useState(null);
    const [promoAktif, setPromoAktif] = useState([]);
    const [rekomendasi, setRekomendasi] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return navigate("/");

            const { data: profileData } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", user.id)
                .single();

            if (profileData) {
                setProfile(profileData);
                fetchOrders(profileData.email);
                fetchKomplain(profileData.email);
            }

            fetchPromo();
            fetchRekomendasi();
        };

        fetchData();
    }, []);

    const fetchOrders = async (email) => {
        const { data, error } = await supabase
            .from("orders")
            .select("*")
            .eq("customer_email", email)
            .order("created_at", { ascending: false });

        if (!error && data.length > 0) {
            setTotalTransaksi(data.length);
            setLastOrder(data[0]);
        }
    };

    const fetchKomplain = async (email) => {
        const { data } = await supabase
            .from("komplain")
            .select("*")
            .eq("customer_email", email)
            .order("created_at", { ascending: false })
            .limit(1)
            .single();

        if (data) setLastKomplain(data);
    };

    const fetchPromo = async () => {
        const { data } = await supabase
            .from("promo")
            .select("*")
            .eq("aktif", true);

        setPromoAktif(data || []);
    };

    const fetchRekomendasi = async () => {
        const { data } = await supabase
            .from("promo")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(3);

        setRekomendasi(data || []);
    };

    const logout = async () => {
        await supabase.auth.signOut();
        navigate("/");
    };

    if (!profile) return <p className="text-center mt-10">🔄 Memuat profil...</p>;

    const badgeColor = {
        "NON-MEMBER": "bg-gray-300 text-gray-800",
        "SILVER": "bg-gray-200 text-gray-600",
        "GOLD": "bg-yellow-300 text-yellow-900",
        "PLATINUM": "bg-indigo-300 text-indigo-800"
    };

    return (
        <div className="min-h-screen bg-[#fff7ed] py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-[#6b3e26]">Dashboard Pelanggan</h1>
                        <p className="text-sm text-gray-600">{profile.full_name} • {profile.email}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColor[profile.membership || "NON-MEMBER"]}`}>
                        {profile.membership || "NON-MEMBER"}
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <DashboardCard icon={<ShoppingBag size={20} />} title="Total Transaksi" value={totalTransaksi} bg="bg-yellow-100" />
                    <DashboardCard icon={<Activity size={20} />} title="Status Order Terakhir" value={lastOrder?.status || "Belum ada"} bg="bg-indigo-100" />
                    <DashboardCard icon={<AlertCircle size={20} />} title="Komplain Terakhir" value={lastKomplain?.pesan || "Tidak ada komplain."} bg="bg-red-100" />
                    <DashboardCard icon={<BadgePercent size={20} />} title="Promo Aktif" value={promoAktif.length ? `${promoAktif.length} promo` : "Tidak ada"} bg="bg-emerald-100" />
                </div>

                <div className="mt-4">
                    <h2 className="text-lg font-semibold mb-2 flex items-center gap-2 text-[#4b2e2b]">
                        <Star size={20} /> Rekomendasi Promo
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {rekomendasi.map((promo) => (
                            <div key={promo.id} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                                <h3 className="font-medium text-[#4b2e2b]">{promo.judul}</h3>
                                <p className="text-sm text-gray-600">{promo.deskripsi}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={logout}
                    className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

const DashboardCard = ({ icon, title, value, bg }) => (
    <div className={`p-4 rounded-xl shadow-sm ${bg}`}>
        <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-full shadow">{icon}</div>
            <div>
                <p className="text-sm text-gray-600">{title}</p>
                <p className="text-lg font-semibold">{value}</p>
            </div>
        </div>
    </div>
);
