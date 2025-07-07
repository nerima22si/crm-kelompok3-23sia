import React from "react";
import { useNavigate } from "react-router-dom";  

const kategoriList = [
    {
        key: "donat",
        name: "Donuts",
        desc: "Our soft fluffy donuts with an endless variety of toppings",
        image: "https://jcodonuts.com/assets/img/menu/food-1.webp",
    },
    {
        key: "j.club",
        name: "J.Club",
        desc: "Mouthwatering donut sandwich selections",
        image: "https://jcodonuts.com/assets/img/menu/food-2.webp",
    },
    {
        key: "j.cool",
        name: "J.Cool",
        desc: "Fat-free frozen yogurt with personalized fresh toppings",
        image: "https://jcodonuts.com/assets/img/menu/food-3.webp",
    },
    {
        key: "coffee",
        name: "J.Coffee",
        desc: "All our coffee selections in hot, iced, and frappe",
        image: "https://jcodonuts.com/assets/img/menu/beverage-1.webp",
    },
    {
        key: "chocolate",
        name: "Chocolate",
        desc: "Delicious signature chocolate drinks",
        image: "https://jcodonuts.com/assets/img/menu/hot-iced-chocolate.webp",
    },
    {
        key: "tea",
        name: "Tea",
        desc: "Classic and flavored teas",
        image: "https://jcodonuts.com/assets/img/menu/iced-lemon-tea.webp",
    },
    {
        key: "frappe",
        name: "Frappe",
        desc: "Refreshing ice blended drinks",
        image: "https://jcodonuts.com/assets/img/menu/choco-forest-frappe.webp",
    },
];


const BelanjaKategoriPage = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-[#c27c28] text-center mb-10">
                Pilih Kategori Produk
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {kategoriList.map((kategori) => (
                    <div
                        key={kategori.key}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden border border-gray-100"
                        onClick={() => navigate(`/belanja/id/${kategori.key.toLowerCase()}`)}
                    >
                        <img
                            src={kategori.image}
                            alt={kategori.name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-[#c27c28]">
                                {kategori.name}
                            </h3>
                            <p className="text-sm text-gray-500">{kategori.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BelanjaKategoriPage;
