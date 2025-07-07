// src/pages/DetailTransaksi.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabase";
const DetailTransaksi = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrder = async () => {
            const { data, error } = await supabase.from("orders").select("*").eq("id", id).single();
            if (!error) setOrder(data);
            setLoading(false);
        };

        fetchOrder();
    }, [id]);

    if (loading) return <p className="p-6">Memuat detail transaksi...</p>;
    if (!order) return <p className="p-6">Transaksi tidak ditemukan.</p>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-[#a35f2a] mb-4">Detail Transaksi #{order.id}</h2>

            <div className="mb-4 space-y-1">
                <p><strong>Nama:</strong> {order.customer}</p>
                <p><strong>Kontak:</strong> {order.contact}</p>
                <p><strong>Status:</strong> {order.status}</p>
                <p><strong>Metode Pembayaran:</strong> {order.payment}</p>
                <p><strong>Kanal:</strong> {order.channel}</p>
                <p><strong>Membership:</strong> {order.membership}</p>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold mb-2">Item:</h4>
                <ul className="list-disc list-inside text-sm text-gray-700">
                    {order.items?.map((item, idx) => (
                        <li key={idx}>
                            {item.name} × {item.qty} @ Rp{item.price.toLocaleString()}
                        </li>
                    ))}
                </ul>
            </div>

            <p className="font-semibold text-lg text-[#4b2e2b]">
                Total: Rp {order.total?.toLocaleString("id-ID")}
            </p>

            <Link to="/riwayat-transaksi" className="inline-block mt-4 text-sm text-blue-600 hover:underline">
                &larr; Kembali ke Riwayat
            </Link>
        </div>
    );
};

export default DetailTransaksi;
