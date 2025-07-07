import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

const RiwayatTransaksi = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem("user");
        if (stored) {
            const userData = JSON.parse(stored);
            fetchOrders(userData.email);
        } else {
            setLoading(false);
        }
    }, []);

    const fetchOrders = async (email) => {
        const { data, error } = await supabase
            .from("orders")
            .select("*")
            .eq("customer_email", email)
            .order("id", { ascending: false });

        if (!error) setOrders(data);
        setLoading(false);
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-[#4b2e2b] mb-6">Riwayat Transaksi</h2>

            {loading ? (
                <p className="text-gray-600">Memuat data...</p>
            ) : orders.length === 0 ? (
                <p className="text-gray-500">Belum ada transaksi.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            onClick={() => navigate(`/customer/riwayat-transaksi/${order.id}`)}
                            className="cursor-pointer bg-white rounded-xl border shadow p-4 hover:shadow-lg transition"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold text-[#a35f2a]">Order #{order.id}</h3>
                                <span className="text-sm px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                                    {order.status}
                                </span>
                            </div>
                            <p className="text-sm text-gray-700">
                                {order.customer} • {order.channel} • {order.payment}
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                Total: <strong>Rp {order.total?.toLocaleString("id-ID")}</strong>
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RiwayatTransaksi;
