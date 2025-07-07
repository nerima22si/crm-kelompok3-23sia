import { useCart } from "../../CartContext";
import { useState, useEffect } from "react";
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

    const [promo, setPromo] = useState("");
    const [discountAmount, setDiscountAmount] = useState(0);
    const [cash, setCash] = useState(0);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activePromos, setActivePromos] = useState([]);

    const safeCart = cart.map((item) => ({
        ...item,
        qty: Number(item.qty || 1),
        price: Number(item.price || 0),
    }));

    const subtotal = safeCart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const total = Math.max(0, subtotal - discountAmount);
    const change = Math.max(0, cash - total);

    useEffect(() => {
        const fetchPromos = async () => {
            const today = new Date().toISOString().split("T")[0];
            const { data, error } = await supabase
                .from("promos")
                .select("*")
                .gte("valid_until", today);

            if (!error) setActivePromos(data);
        };
        fetchPromos();
    }, []);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUserData(user);
            setForm((prev) => ({
                ...prev,
                customer: user.name || "",
                contact: user.phone || "",
            }));
        }
        setCash(subtotal);
    }, [subtotal]);

    useEffect(() => {
        const foundPromo = activePromos.find(
            (p) => p.title.toLowerCase() === promo.toLowerCase()
        );
        if (foundPromo) {
            if (foundPromo.percentage) {
                setDiscountAmount(subtotal * (foundPromo.percentage / 100));
            } else if (foundPromo.nominal) {
                setDiscountAmount(foundPromo.nominal);
            } else {
                setDiscountAmount(0);
            }
        } else {
            setDiscountAmount(0);
        }
    }, [promo, subtotal, activePromos]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (safeCart.length === 0) return alert("Keranjang kosong.");
        if (!form.customer.trim()) return alert("Nama pelanggan harus diisi.");
        setLoading(true);

        const { data: order, error } = await supabase
            .from("orders")
            .insert([
                {
                    ...form,
                    total,
                    discount: discountAmount,
                    promo_code: promo || null,
                    customer_email: userData?.email || "",
                    items: safeCart,
                },
            ])
            .select()
            .single();

        setLoading(false);
        if (error) return alert("Gagal menyimpan: " + error.message);

        alert("✅ Order berhasil disimpan.");
        clearCart();
        navigate("/customer/riwayat-transaksi");
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

                {/* Dropdown Promo */}
                <select
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    className="w-full border p-2 rounded"
                >
                    <option value="">-- Pilih Promo (Opsional) --</option>
                    {activePromos.map((promoItem) => (
                        <option key={promoItem.id} value={promoItem.title}>
                            {promoItem.title} –{" "}
                            {promoItem.percentage
                                ? `${promoItem.percentage}%`
                                : `Rp${promoItem.nominal?.toLocaleString("id-ID")}`}
                        </option>
                    ))}
                </select>

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

                <select
                    value={form.channel}
                    onChange={(e) => setForm({ ...form, channel: e.target.value })}
                    className="w-full border p-2 rounded"
                >
                    <option value="Takeaway">Takeaway</option>
                    <option value="Dine-in">Dine-in</option>
                </select>

                {/* Ringkasan */}
                <div className="bg-gray-100 p-3 rounded text-sm">
                    <h4 className="font-medium mb-2">Ringkasan Pesanan:</h4>
                    <ul className="list-disc list-inside">
                        {safeCart.map((item, i) => (
                            <li key={i}>
                                {item.name} x {item.qty} – Rp{(item.price * item.qty).toLocaleString("id-ID")}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-2">Subtotal: Rp {subtotal.toLocaleString("id-ID")}</p>
                    {discountAmount > 0 && (
                        <p className="text-green-600">
                            Diskon: -Rp {discountAmount.toLocaleString("id-ID")} ({promo})
                        </p>
                    )}
                    <p className="font-bold text-lg mt-1">
                        Total: Rp {total.toLocaleString("id-ID")}
                    </p>
                </div>

                <input
                    type="number"
                    placeholder="Uang Tunai"
                    value={cash}
                    onChange={(e) => setCash(Number(e.target.value))}
                    className="w-full border p-2 rounded"
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
