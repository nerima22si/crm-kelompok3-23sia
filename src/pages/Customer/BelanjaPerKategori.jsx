import { useParams, useNavigate } from "react-router-dom";
import products from "../../data/Products";
import { useEffect, useState } from "react";

const kategoriList = [
    "Donat",
    "J.Club",
    "J.Cool",
    "Coffee",
    "Chocolate",
    "Tea",
    "Frappe",
];

const BelanjaPerKategori = () => {
    const { kategori } = useParams();
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    // Ambil cart dari localStorage saat pertama kali load
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Simpan cart ke localStorage setiap kali berubah
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const kategoriTitle =
        kategori.charAt(0).toUpperCase() + kategori.slice(1).replace(".", " ");
    const produkTampil = products.filter(
        (item) => item.category.toLowerCase() === kategori.toLowerCase()
    );

    const handleAddToCart = (product) => {
        setCart((prev) => [...prev, product]);
        alert(`✅ ${product.name} ditambahkan ke keranjang.`);
    };

    const handleRemoveFromCart = (productId) => {
        const indexToRemove = cart.findIndex((item) => item.id === productId);
        if (indexToRemove !== -1) {
            const updatedCart = [...cart];
            updatedCart.splice(indexToRemove, 1);
            setCart(updatedCart);
        }
    };

    const getItemCount = (productId) => {
        return cart.filter((item) => item.id === productId).length;
    };

    const totalHarga = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Cart Ringkasan */}
            <div className="mb-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-3 text-[#c27c28]">🛒 Keranjang Belanja</h2>
                {cart.length === 0 ? (
                    <p className="text-gray-500">Belum ada item di keranjang.</p>
                ) : (
                    <div className="space-y-2">
                        {Array.from(new Set(cart.map(item => item.id))).map((id) => {
                            const item = cart.find(p => p.id === id);
                            const count = getItemCount(id);
                            return (
                                <div key={id} className="flex justify-between items-center bg-white p-3 rounded shadow-sm border">
                                    <div>
                                        <p className="font-medium text-gray-700">{item.name}</p>
                                        <p className="text-sm text-gray-500">x{count} • Rp {(item.price * count).toLocaleString("id-ID")}</p>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveFromCart(id)}
                                        className="text-red-500 text-sm hover:underline"
                                    >
                                        Hapus satu
                                    </button>
                                </div>
                            );
                        })}
                        <p className="text-right font-semibold mt-3 text-[#c27c28]">
                            Total: Rp {totalHarga.toLocaleString("id-ID")}
                        </p>
                        <div className="text-right mt-4">
                            <button
                                onClick={() => navigate("/customer/checkout")}
                                className="bg-[#c27c28] hover:bg-[#a55c1b] text-white px-4 py-2 rounded-full text-sm transition"
                            >
                                Lanjut ke Checkout →
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Kategori Navigation */}
            <div className="mb-6 flex flex-wrap gap-3 justify-center">
                {kategoriList.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => navigate(`/belanja/id/${cat.toLowerCase()}`)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition ${cat.toLowerCase() === kategori.toLowerCase()
                            ? "bg-[#f8eadd] text-[#c27c28] border-[#c27c28]"
                            : "bg-white text-gray-600 border-gray-300 hover:border-[#c27c28] hover:text-[#c27c28]"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Judul */}
            <h1 className="text-3xl font-bold text-[#c27c28] mb-8 text-center">
                {kategoriTitle}
            </h1>

            {/* Produk */}
            {produkTampil.length === 0 ? (
                <p className="text-gray-500 text-center">
                    Belum ada produk di kategori ini.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {produkTampil.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 text-center flex flex-col justify-between"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-40 object-cover mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">
                                {item.name}
                            </h3>
                            <p className="text-sm text-gray-500">{item.category}</p>
                            <p className="text-[#c27c28] font-bold mt-2">
                                Rp {item.price.toLocaleString("id-ID")}
                            </p>

                            <button
                                onClick={() => handleAddToCart(item)}
                                className="mt-4 bg-[#c27c28] hover:bg-[#a55c1b] text-white px-4 py-2 rounded-full text-sm transition"
                            >
                                + Tambah ke Keranjang
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BelanjaPerKategori;
