import { useEffect, useState } from "react";
import { supabase } from "../supabase";

const PromoCustomer = () => {
    const [promos, setPromos] = useState([]);
    const [claimed, setClaimed] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem("user");
        if (stored) {
            const userData = JSON.parse(stored);
            setUser(userData.email);
            fetchClaims(userData.email);
        }
        fetchPromos();
    }, []);

    const fetchPromos = async () => {
        const { data, error } = await supabase
            .from("promos")
            .select("*")
            .order("valid_until", { ascending: true });

        if (!error) setPromos(data);
    };

    const fetchClaims = async (email) => {
        const { data, error } = await supabase
            .from("promo_claims")
            .select("promo_id")
            .eq("user_email", email);

        if (!error) {
            const ids = data.map((d) => d.promo_id);
            setClaimed(ids);
        }
    };

    const handleClaim = async (promoId) => {
        if (claimed.includes(promoId)) {
            alert("⚠️ Kamu sudah klaim promo ini.");
            return;
        }

        const { error } = await supabase.from("promo_claims").insert([
            {
                promo_id: promoId,
                user_email: user,
            },
        ]);

        if (!error) {
            alert("✅ Promo berhasil diklaim!");
            setClaimed((prev) => [...prev, promoId]);
        } else {
            alert("❌ Gagal klaim promo: " + error.message);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-[#c27c28] mb-6 text-center">
                Promo Spesial untuk Kamu 🎁
            </h2>

            {promos.length === 0 ? (
                <p className="text-center text-gray-500">Belum ada promo saat ini.</p>
            ) : (
                <div className="space-y-6">
                    {promos.map((promo) => (
                        <div
                            key={promo.id}
                            className="bg-[#fff9f4] border-2 border-[#f1e5da] rounded-2xl shadow-md px-6 py-5 flex justify-between items-center"
                        >
                            <div>
                                <h4 className="text-xl font-semibold text-[#4b2e2b]">
                                    {promo.title}
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">
                                    Berlaku sampai:{" "}
                                    <span className="font-medium text-[#a35f2a]">
                                        {promo.valid_until}
                                    </span>
                                </p>
                            </div>

                            <button
                                onClick={() => handleClaim(promo.id)}
                                disabled={claimed.includes(promo.id)}
                                className={`px-6 py-2 text-base font-medium rounded-xl transition-all focus:outline-none ${claimed.includes(promo.id)
                                        ? "bg-gray-300 text-white cursor-not-allowed"
                                        : "bg-[#a35f2a] text-white hover:bg-[#81421b]"
                                    }`}
                            >
                                {claimed.includes(promo.id) ? "Sudah Diklaim" : "Klaim Promo"}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PromoCustomer;
