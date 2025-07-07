import SidebarCustomer from "./SidebarCustomer";
import HeaderCustomer from "./HeaderCustomer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../CartContext";
export default function MainLayoutCustomer() {
    return (
        <CartProvider>
            <div className="min-h-screen bg-[#fff8f0] flex">
                {/* Sidebar tetap */}
                <SidebarCustomer />

                {/* Konten utama */}
                <div className="ml-64 flex-1 flex flex-col">
                    <HeaderCustomer />
                    <main className="flex-1 overflow-y-auto p-4 sm:p-6 max-w-7xl mx-auto">
                        <Outlet />
                    </main>
                </div>
            </div>
        </CartProvider>
    );
}
