import {
    LayoutDashboard,
    Gift,
    History,
    MessageCircle,
    User,
    Menu,
    LogOut,
    ShoppingBag,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import jcoLogo from "../assets/jco.logo.png";

const menuItems = [
    { name: "Dashboard", path: "/customer", icon: <LayoutDashboard /> },
    { name: "Promo", path: "/customer/promo", icon: <Gift /> },
    { name: "Belanja", path: "/customer/belanja", icon: <ShoppingBag /> },
    { name: "Riwayat Transaksi", path: "/customer/riwayat-transaksi", icon: <History /> },
    { name: "Komplain", path: "/customer/complain", icon: <MessageCircle /> },
    // { name: "Profil", path: "/customer/profil", icon: <User /> },
    // { name: "Customer Chat", path: "/customer/chat", icon: <User /> },

];

const SidebarCustomer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <>
            {/* Toggle button - mobile only */}
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 bg-[#f37021] text-white p-2 rounded-md shadow"
            >
                <Menu />
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 w-64 h-full bg-white shadow-sm border-r border-gray-100 z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0`}
            >
                {/* Logo */}
                <div className="flex items-center justify-center py-6 border-b border-gray-100">
                    <img src={jcoLogo} alt="J.CO Logo" className="h-9 w-9" />
                    <span className="ml-3 text-lg font-bold text-[#f37021]">My J.CO</span>
                </div>

                {/* Menu */}
                <nav className="p-4 space-y-2">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition ${isActive
                                    ? "bg-orange-50 text-orange-700"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`
                            }
                        >
                            <span className="w-5 h-5">{item.icon}</span>
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Logout */}
                <div className="mt-4 px-4 border-t border-gray-100 pt-3">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 w-full"
                    >
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
};

export default SidebarCustomer;
  