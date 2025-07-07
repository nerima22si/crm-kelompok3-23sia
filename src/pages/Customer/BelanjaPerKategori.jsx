import { useParams, useNavigate } from "react-router-dom";
import products from "../../data/Products";
import { useState } from "react";

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

    const kategoriTitle =
        kategori.charAt(0).toUpperCase() + kategori.slice(1).replace(".", " ");
    const produkTampil = products.filter(
        (item) => item.category.toLowerCase() === kategori.toLowerCase()
    );

    const handleAddToCart = (product) => {
        setCart((prev) => [...prev, product]);
        alert(`✅ ${product.name} ditambahkan ke keranjang.`);
        // Atau simpan ke localStorage: 
        // localStorage.setItem("cart", JSON.stringify([...cart, product]));
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
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
                                className="w-full h-40 object-cover"
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
