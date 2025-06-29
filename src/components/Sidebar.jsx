import {
  LayoutDashboard,
  Users,
  BarChart2,
  ClipboardList,
  Star,
  MessageSquare,
  Megaphone,
  Zap,
  Layers,
  PackageSearch,
  PieChart,
  Box,
  Settings,
  LogIn,
  UserPlus,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import jcoLogo from "../assets/jco.logo.png";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Untuk toggle sidebar di mobile

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard /> },

    { name: "Account Management", path: "/account-management", icon: <Users /> },
    { name: "Sales Insight", path: "/sales-insight", icon: <Megaphone />, disabled: true },
    { name: "Order Management", path: "/order-management", icon: <ClipboardList />, disabled: true },
    { name: "Promo Management", path: "/promo-management", icon: <ClipboardList />, disabled: true },
    { name: "Campaign Management", path: "/campaign", icon: <Megaphone />, disabled: true },
    { name: "Broadcast Trigger Marketing", path: "/broadtrigger-marketing", icon: <Zap />, disabled: true },

    { name: "Trigger Marketing", path: "/trigger-marketing", icon: <Zap />, disabled: true },
    { name: "Feedback & FAQ Management", path: "/feedback-faq", icon: <MessageSquare/>, disabled: true },
    { name: "Loyalty & Profile Management", path: "/loyalty-profile", icon: <Star />, disabled: true },
    { name: "Products Management", path: "/products", icon: <Box />, disabled: true },
  ];
  

  return (
    <>
      {/* Tombol buka sidebar di mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-orange-600 text-white p-2 rounded-md"
      >
        <Menu />
      </button>

      {/* Overlay hitam saat sidebar terbuka di mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bg-white w-64 h-screen shadow-lg px-4 py-6 overflow-y-auto fixed z-50 top-0 left-0 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:block`}
      >
        {/* Header */}
        <div className="flex items-center justify-between md:justify-start gap-3 text-xl font-bold mb-8 text-orange-600">
          <div className="flex items-center gap-3">
            <img src={jcoLogo} alt="Logo" className="w-6 h-6" />
            <span>JCO CRM</span>
          </div>
          {/* Tombol tutup sidebar di mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-gray-600"
          >
            <X />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-100 transition ${isActive(item.path)
                  ? "bg-orange-200 text-orange-800 font-semibold"
                  : "text-gray-700"
                }`}
              onClick={() => setIsOpen(false)} // Tutup sidebar setelah klik (di mobile)
            >
              <span className="w-5 h-5">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Account Section */}
        <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
        <nav className="mt-2 space-y-1">
          {[
            { name: "Pengaturan Akun", icon: <Settings />, path: "/akun" },
            { name: "Sign In", icon: <LogIn />, path: "/signin" },
            { name: "Sign Up", icon: <UserPlus />, path: "/signup" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-100 transition ${isActive(item.path)
                  ? "bg-orange-200 text-orange-800 font-semibold"
                  : "text-gray-700"
                }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="w-5 h-5">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
