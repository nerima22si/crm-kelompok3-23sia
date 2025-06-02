import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Box,
  BarChart2,
  Settings,
  LogIn,
  UserPlus,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const [openGroup, setOpenGroup] = useState({
    master: true,
    pelanggan: false,
  });

  const toggleGroup = (group) => {
    setOpenGroup((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 hidden md:block overflow-y-auto">
      <div className="text-xl font-bold mb-8 text-purple-700">UMKM CRM</div>

      <nav className="space-y-2">
        <Link
          to="/"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
            isActive("/") ? "bg-purple-200 text-purple-800 font-semibold" : "text-gray-700"
          }`}
        >
          <span className="w-5 h-5"><LayoutDashboard /></span>
          Dashboard
        </Link>

        {/* Master Data Group */}
        <div>
          <button
            onClick={() => toggleGroup("master")}
            className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-purple-100 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <Box />
              <span>Data Penjualan</span>
            </div>
            {openGroup.master ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {openGroup.master && (
            <div className="ml-6 mt-1 space-y-1">
              <Link
                to="/produk"
                className={`block px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
                  isActive("/produk") ? "bg-purple-200 text-purple-800 font-semibold" : "text-gray-700"
                }`}
              >
                Produk
              </Link>
              <Link
                to="/penjualan"
                className={`block px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
                  isActive("/penjualan") ? "bg-purple-200 text-purple-800 font-semibold" : "text-gray-700"
                }`}
              >
                Penjualan
              </Link>
              <Link
                to="/laporan"
                className={`block px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
                  isActive("/laporan") ? "bg-purple-200 text-purple-800 font-semibold" : "text-gray-700"
                }`}
              >
                Laporan Target Penjualan
              </Link>
            </div>
          )}
        </div>

        {/* Pelanggan Group */}
        <div>
          <button
            onClick={() => toggleGroup("pelanggan")}
            className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-purple-100 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <Users />
              <span>Pelanggan</span>
            </div>
            {openGroup.pelanggan ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {openGroup.pelanggan && (
            <div className="ml-6 mt-1 space-y-1">
              <Link
                to="/pelanggan"
                className={`block px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
                  isActive("/pelanggan") ? "bg-purple-200 text-purple-800 font-semibold" : "text-gray-700"
                }`}
              >
                Data Pelanggan
              </Link>
              <Link
                to="/riwayatpelanggan"
                className={`block px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
                  isActive("/riwayatpelanggan") ? "bg-purple-200 text-purple-800 font-semibold" : "text-gray-700"
                }`}
              >
                Riwayat Transaksi
              </Link>
              <Link
                to="/tracking"
                className={`block px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
                  isActive("/tracking") ? "bg-purple-200 text-purple-800 font-semibold" : "text-gray-700"
                }`}
              >
                Tracking Aktivitas
              </Link>
            </div>
          )}
        </div>
      
      </nav>

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
