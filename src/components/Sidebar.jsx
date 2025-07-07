import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Star,
  MessageSquare,
  Megaphone,
  Zap,
  Box,
  Settings,
  LogIn,
  UserPlus,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import jcoLogo from "../assets/jco.logo.png";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: "Dashboard", path: "/dashboard/admin", icon: <LayoutDashboard /> },
    { name: "Account Management", path: "/account-management", icon: <Users /> },
    { name: "Sales Insight", path: "/sales-insight", icon: <Megaphone /> },
    { name: "Order Management", path: "/order-management", icon: <ClipboardList /> },
    { name: "Promo", path: "/promo-management", icon: <ClipboardList /> },
    { name: "Campaign", path: "/campaign", icon: <Megaphone /> },
    { name: "Marketing", path: "/marketing", icon: <Box /> },
    //{ name: "Trigger", path: "/trigger-marketing", icon: <Zap /> },
    { name: "Feedback & FAQ", path: "/feedback-faq", icon: <MessageSquare /> },

    { name: "Loyalty", path: "/loyalty", icon: <Star /> },
    { name: "Products", path: "/products", icon: <Box /> },
    


  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      {/* Toggle sidebar (mobile) */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-orange-600 text-white p-2 rounded-md"
      >
        <Menu />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-64 h-screen shadow-lg px-4 py-6 overflow-y-auto z-50 bg-white">
        {/* Logo Header */}
        <div className="flex items-center justify-center mb-10">
          <img src={jcoLogo} alt="Logo" className="w-8 h-8" />
          <span className="ml-3 text-lg font-bold tracking-wide text-[#f37021]">JCO CRM</span>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.disabled ? (
                <div
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 cursor-not-allowed"
                  title="Coming soon"
                >
                  <span className="w-5 h-5">{item.icon}</span>
                  {item.name}
                </div>
              ) : (
                <Link
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
              )}
            </div>
          ))}
        </nav>

        {/* Account Section */}
        <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
        <nav className="mt-2 space-y-1">
          <Link
            to="/settings"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-100 transition ${isActive("/akun")
              ? "bg-orange-200 text-orange-800 font-semibold"
              : "text-gray-700"
              }`}
            onClick={() => setIsOpen(false)}
          >
            <span className="w-5 h-5">
              <Settings />
            </span>
            Pengaturan Akun
          </Link>





          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left hover:bg-orange-100 transition text-gray-700"
          >
            <span className="w-5 h-5">
              <LogOut />
            </span>
            Logout
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;


