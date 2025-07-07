import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
    Bell,
    ShoppingCart,
    UserRound,
    X,
    CheckCircle,
} from "lucide-react";

const menuMap = [
    { path: "/pelanggan", label: "Dashboard" },
    { path: "/customer/promo", label: "Promo" },
    { path: "/customer/belanja", label: "Belanja" },
    { path: "/customer/riwayat", label: "Riwayat Transaksi" },
    { path: "/customer/komplain", label: "Komplain" },
    { path: "/customer/profil", label: "Profil" },
];

const HeaderCustomer = () => {
    const [showNotif, setShowNotif] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const location = useLocation();

    // Dapatkan judul berdasarkan path aktif
    const currentTitle =
        menuMap.find((item) => location.pathname.startsWith(item.path))?.label ||
        "Halaman";

    return (
        <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-30">
            <div className="flex justify-between items-center px-6 py-4">
                {/* 🧭 Judul Halaman Aktif */}
                <div className="text-lg font-semibold text-[#c27c28]">
                    {currentTitle}
                </div>

                {/* 🔔 🔽 👤 Aksi */}
                <div className="flex items-center gap-5 relative">
                    <button
                        onClick={() => setShowNotif(!showNotif)}
                        className="relative text-gray-600 hover:text-[#c27c28] transition"
                    >
                        <Bell className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                            2
                        </span>
                    </button>

                    <button
                        onClick={() => setShowCart(!showCart)}
                        className="relative text-gray-600 hover:text-[#c27c28] transition"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full px-1">
                            1
                        </span>
                    </button>

                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#c27c28] cursor-pointer">
                        <UserRound className="w-5 h-5" />
                        <span className="hidden sm:inline">Nida M.</span>
                    </div>
                </div>
            </div>

            {/* Notifikasi Dropdown */}
            {showNotif && (
                <div className="absolute right-6 mt-2 w-80 bg-white border border-gray-100 rounded-xl shadow-sm z-40">
                    <div className="p-4 text-sm">
                        <div className="flex justify-between items-center font-semibold text-gray-700 mb-2">
                            Notifikasi
                            <X
                                className="w-4 h-4 cursor-pointer"
                                onClick={() => setShowNotif(false)}
                            />
                        </div>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                                <span>Pemesanan kamu berhasil! Cek status pengiriman.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Bell className="text-yellow-500 w-5 h-5 mt-1" />
                                <span>Promo ulang tahun tersedia 🎉</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Keranjang Dropdown */}
            {showCart && (
                <div className="absolute right-20 mt-2 w-80 bg-white border border-gray-100 rounded-xl shadow-sm z-40">
                    <div className="p-4 text-sm">
                        <div className="flex justify-between items-center font-semibold text-gray-700 mb-2">
                            Ringkasan Belanja
                            <X
                                className="w-4 h-4 cursor-pointer"
                                onClick={() => setShowCart(false)}
                            />
                        </div>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex justify-between">
                                <span>Donat Coklat (2)</span>
                                <span>Rp 24.000</span>
                            </li>
                            <li className="flex justify-between">
                                <span>J.Coffee Latte (1)</span>
                                <span>Rp 28.000</span>
                            </li>
                            <li className="pt-2 border-t border-gray-100 text-right text-[#c27c28] font-semibold">
                                Total: Rp 52.000
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default HeaderCustomer;
