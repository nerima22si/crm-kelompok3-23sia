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
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import jcoLogo from '../assets/jco.logo.png';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard /> },
    { name: "Account & Contact Management", path: "/account&contactmanagement", icon: <Users /> },
    { name: "Activity & Forecast Management", path: "/activity-forecast", icon: <BarChart2 /> },
    { name: "Order & Promo Management", path: "/order-promo", icon: <ClipboardList /> },
    { name: "Loyalty & Profile Management", path: "/loyalty-profile", icon: <Star /> },
    { name: "Feedback & FAQ Management", path: "/feedback-faq", icon: <MessageSquare /> },
    { name: "Campaign Management", path: "/campaign", icon: <Megaphone /> },
    { name: "Trigger Marketing", path: "/trigger-marketing", icon: <Zap /> },
    { name: "Segmentasi Kampanye", path: "/segmentasi-kampanye", icon: <Layers /> },
    { name: "Rekomendasi Produk Otomatis", path: "/rekomendasi-produk", icon: <PackageSearch /> },
    { name: "Marketing Analytics", path: "/marketing-analytics", icon: <PieChart /> },
    { name: "Products", path: "/products", icon: <Box /> },
  ];

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 hidden md:block overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-3 text-xl font-bold mb-8 text-orange-600">
        <img src={jcoLogo} alt="Logo" className="w-6 h-6" />
        <span>JCO CRM</span>
      </div>

      {/* Menu Items */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-100 transition ${
              isActive(item.path)
                ? "bg-orange-200 text-orange-800 font-semibold"
                : "text-gray-700"
            }`}
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
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-100 transition ${
              isActive(item.path)
                ? "bg-orange-200 text-orange-800 font-semibold"
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
