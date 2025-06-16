import {
  LayoutDashboard,
  Users,          // untuk pelanggan / loyalty
  ShoppingCart,   // untuk penjualan
  Box,            // untuk produk
  BarChart2,      // untuk laporan
  Settings,       // untuk pengaturan akun
  LogIn,
  UserPlus,
  BadgeCheck,     // untuk membership
  MessageCircle,
  Megaphone,  // untuk feedback
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
  { name: "Produk", icon: <Box size={20} />, path: "/produk" },
  { name: "Laporan", icon: <BarChart2 size={20} />, path: "/laporan" },
  { name: "Penjualan", icon: <ShoppingCart size={20} />, path: "/penjualan" },
  { name: "Loyalty", icon: <Users size={20} />, path: "/loyalty" },
  { name: "Feedback", icon: <MessageCircle size={20} />, path: "/feedback" },
  { name: "Membership", icon: <BadgeCheck size={20} />, path: "/membership" },
  { name: "Customer Feedback", icon: <Megaphone size={20} />, path: "/customerFeedback" },
];

const accountItems = [
  { name: "Pengaturan Akun", icon: <Settings size={20} />, path: "/akun" },
  { name: "Sign In", icon: <LogIn size={20} />, path: "/signin" },
  { name: "Sign Up", icon: <UserPlus size={20} />, path: "/signup" },
];

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      <div className="text-xl font-bold mb-8 text-purple-700">UMKM CRM</div>
      
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? "bg-purple-200 text-purple-800 font-semibold"
                : "text-gray-700"
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? "bg-purple-200 text-purple-800 font-semibold"
                : "text-gray-700"
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
