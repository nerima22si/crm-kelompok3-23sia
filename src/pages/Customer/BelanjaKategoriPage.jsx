import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const BelanjaKategoriPage = () => {
    const [kategoriData, setKategoriData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchKategori = async () => {
            const { data, error } = await supabase
                .from("products")
                .select("*");

            if (error) {
                console.error("Gagal mengambil data produk:", error.message);
                return;
            }

            // Kelompokkan produk berdasarkan kategori
            const kategoriMap = {};
            data.forEach((item) => {
                const key = item.category.toLowerCase();
                if (!kategoriMap[key]) {
                    kategoriMap[key] = {
                        key,
                        name: item.category,
                        image: item.image,
                        desc: item.description || "Temukan produk terbaik dari kategori ini.",
                    };
                }
            });

            const kategoriList = Object.values(kategoriMap);
            setKategoriData(kategoriList);
        };

        fetchKategori();
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-[#6b3e26] text-center mb-10">
                Pilih Kategori Produk
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {kategoriData.length === 0 ? (
                    <p className="text-center text-gray-500 col-span-full">🔄 Memuat kategori produk...</p>
                ) : (
                    kategoriData.map((kategori) => (
                        <div
                            key={kategori.key}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden border border-gray-100 transform hover:scale-105 duration-300"
                            onClick={() => navigate(`/belanja/id/${kategori.key}`)}
                        >
                            <img
                                src={kategori.image}
                                alt={kategori.name}
                                className="w-full h-44 object-cover"
                            />
                            <div className="p-4">
                                <span className="inline-block bg-[#f8eadd] text-[#c27c28] text-xs px-3 py-1 rounded-full mb-2 uppercase">
                                    {kategori.key}
                                </span>
                                <h3 className="text-xl font-semibold text-[#c27c28]">{kategori.name}</h3>
                                <p className="text-sm text-gray-500">{kategori.desc}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default BelanjaKategoriPage;
