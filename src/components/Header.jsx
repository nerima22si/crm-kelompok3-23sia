import { Search, User } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Megaphone,
  ClipboardList,
  Box,
  MessageSquare,
  Star,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", path: "/dashboard/admin", icon: <LayoutDashboard /> },
  { name: "Account Management", path: "/account-management", icon: <Users /> },
  { name: "Sales Insight", path: "/sales-insight", icon: <Megaphone /> },
  { name: "Order Management", path: "/order-management", icon: <ClipboardList /> },
  { name: "Promo", path: "/promo-management", icon: <ClipboardList /> },
  { name: "Campaign", path: "/campaign", icon: <Megaphone /> },
  { name: "Marketing", path: "/marketing", icon: <Box /> },
  { name: "Feedback & FAQ", path: "/feedback-faq", icon: <MessageSquare /> },
  { name: "Loyalty", path: "/loyalty", icon: <Star /> },
  { name: "Products", path: "/products", icon: <Box /> },
];

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const currentMenu =
    menuItems.find((item) => currentPath.startsWith(item.path)) || {
      name: "Dashboard",
    };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="text-sm text-gray-500">
        Pages /{" "}
        <span className="text-gray-900 font-semibold">{currentMenu.name}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Type here..."
            className="px-4 py-2 pl-10 text-sm border rounded-full focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>
        <div className="flex items-center gap-2 text-sm cursor-pointer text-gray-700 hover:text-purple-700">
          <User className="w-4 h-4" />
          Sign In
        </div>
      </div>
    </header>
  );
};

export default Header;
