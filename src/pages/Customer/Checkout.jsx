// src/pages/Checkout.jsx
import { useCart } from "../../CartContext";
import { useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        customer: "",
        contact: "",
        membership: "NON-MEMBER",
        payment: "Tunai",
        channel: "Takeaway",
        status: "Menunggu",
    });
    const [cash, setCash] = useState(0);
    const [loading, setLoading] = useState(false);

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const change = cash - total;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cart.length === 0) return alert("Keranjang kosong.");
        if (cash < total) return alert("Uang tidak cukup.");
        if (!form.customer.trim()) return alert("Nama pelanggan harus diisi.");

        const orderData = {
            ...form,
            items: cart,
            total,
        };

        setLoading(true);
        const { error } = await supabase.from("orders").insert([orderData]);
        setLoading(false);

        if (error) {
            alert("Gagal menyimpan: " + error.message);
        } else {
            alert("✅ Order berhasil disimpan.");
            clearCart();
            navigate("/riwayat-transaksi");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#4b2e2b]">Checkout</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Nama Pelanggan"
                    value={form.customer}
                    onChange={(e) => setForm({ ...form, customer: e.target.value })}
                    className="w-full border p-2 rounded"
                    required
                />

                <input
                    type="text"
                    placeholder="Kontak (jika ada)"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="w-full border p-2 rounded"
                />

<select
                    value={form.payment}
                    onChange={(e) => setForm({ ...form, payment: e.target.value })}
                    className="w-full border p-2 rounded"
                >
                    <option value="Tunai">Tunai</option>
                    <option value="QRIS">QRIS</option>
                    <option value="Kartu">Kartu</option>
                    <option value="Transfer">Transfer</option>
                </select>

                {/* ✅ Info rekening akan muncul jika pilih Transfer */}
                {form.payment === "Transfer" && (
                    <div className="bg-yellow-50 border border-yellow-300 text-yellow-700 p-3 rounded text-sm">
                        Silakan transfer ke rekening berikut:<br />
                        <strong>BCA - 1234567890 a.n. PT Contoh Kasir Jaya</strong>
                    </div>
                )}

                <select
                    value={form.channel}
                    onChange={(e) => setForm({ ...form, channel: e.target.value })}
                    className="w-full border p-2 rounded"
                >
                    <option value="Takeaway">Takeaway</option>
                    <option value="Dine-in">Dine-in</option>
                </select>

                {/* Ringkasan Order */}
                <div className="bg-gray-100 p-3 rounded">
                    <h4 className="font-medium mb-2">Ringkasan Pesanan:</h4>
                    <ul className="text-sm list-disc list-inside">
                        {cart.map((item, i) => (
                            <li key={i}>{item.name} - Rp{item.price.toLocaleString()}</li>
                        ))}
                    </ul>
                    <p className="mt-2 font-bold">Total: Rp {total.toLocaleString("id-ID")}</p>
                </div>

                <input
                    type="number"
                    placeholder="Uang Tunai"
                    value={cash}
                    onChange={(e) => setCash(parseInt(e.target.value) || 0)}
                    className="w-full border p-2 rounded"
                    required
                />

                <p className="font-semibold">
                    Kembalian: Rp {change >= 0 ? change.toLocaleString("id-ID") : 0}
                </p>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#a35f2a] hover:bg-[#81421b] text-white py-2 rounded"
                >
                    {loading ? "Menyimpan..." : "Simpan Order"}
                </button>
            </form>
        </div>
    );
};

export default Checkout;
