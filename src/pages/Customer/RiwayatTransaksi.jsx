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
        <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-[#faf7f3] min-h-screen">
            <h2 className="text-3xl font-bold text-[#4b2e2b] mb-8 text-center">
                Riwayat Transaksi
            </h2>

            {loading ? (
                <p className="text-center text-[#6b3e26]">Memuat data...</p>
            ) : orders.length === 0 ? (
                <p className="text-center text-[#a3754a]">Belum ada transaksi.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            onClick={() => navigate(`/customer/riwayat-transaksi/${order.id}`)}
                            className="bg-[#fff7f0] rounded-2xl shadow-md px-6 py-4 hover:shadow-lg transition duration-200 cursor-pointer"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold text-[#a35f2a]">
                                    Order #{order.id}
                                </h3>
                                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#fcefe5] text-[#7b4a2b]">
                                    {order.status}
                                </span>
                            </div>
                            <p className="text-sm text-[#5a4034]">
                                {order.customer} &nbsp;|&nbsp; {order.channel} &nbsp;|&nbsp;{" "}
                                {order.payment}
                            </p>
                            <p className="text-sm text-[#4b2e2b] mt-2">
                                Total:{" "}
                                <span className="font-bold text-[#a35f2a]">
                                    Rp {order.total?.toLocaleString("id-ID")}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RiwayatTransaksi;
