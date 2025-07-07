import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../CartContext";
import { supabase } from "../supabase"; // pastikan path sesuai

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
    const { cart, addToCart } = useCart();
    const [produkTampil, setProdukTampil] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [loading, setLoading] = useState(true);

    const kategoriTitle =
        kategori.charAt(0).toUpperCase() + kategori.slice(1).replace(".", " ");

    useEffect(() => {
        const fetchProduk = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .ilike("category", kategori); // cocokkan kategori (case-insensitive)

            if (error) {
                console.error("Gagal ambil data:", error.message);
                setProdukTampil([]);
            } else {
                setProdukTampil(data);
            }
            setLoading(false);
        };

        fetchProduk();
    }, [kategori]);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleCheckout = () => {
        navigate("/customer/checkout");
    };

    return (
        <div className="max-w-7xl mx-auto p-6 relative">
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
            {loading ? (
                <p className="text-gray-400 text-center">🔄 Memuat produk...</p>
            ) : produkTampil.length === 0 ? (
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
                                className="w-full h-40 object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
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

            {/* Floating Cart Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    onClick={() => setShowCart(!showCart)}
                    className="bg-[#c27c28] hover:bg-[#a55c1b] text-white px-4 py-2 rounded-full shadow-lg"
                >
                    🛒 {cart.length} Item
                </button>

                {showCart && (
                    <div className="bg-white shadow-xl rounded-lg mt-2 p-4 w-72">
                        <h4 className="font-bold mb-2">Keranjang:</h4>
                        <ul className="text-sm space-y-1 max-h-40 overflow-y-auto">
                            {cart.map((item, i) => (
                                <li key={i}>
                                    {item.name} - Rp {item.price.toLocaleString("id-ID")}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={handleCheckout}
                            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded text-sm"
                        >
                            Lakukan Pembayaran
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BelanjaPerKategori;
