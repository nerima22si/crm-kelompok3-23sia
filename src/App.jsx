import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayouts";
import Dashboard from "./pages/Dashboard";
import AccountManagement from "./pages/AccountManagement";
import SalesInsight from "./pages/SalesInsight";
import OrderManagement from "./pages/OrderManagement";
import PromoManagement from "./pages/PromoManagement";
import TriggerManagement from "./pages/TriggerManagement";
import FeedbackFAQManagement from "./pages/FeedbackFAQManagement";
import LoyaltyManagement from "./pages/LoyaltyManagement";

import CampaignManagement from "./pages/CampaignManagement";
import ProductManagement from "./pages/ProductManagement";
import BroadcastTriggerMarketing from "./pages/BroadcastTriggerMarketing";

import KasirForm from "./pages/CashierForm";
import KasirPage from "./pages/KasirPage";
import AccountDetail from "./pages/AccountDetail";
import DetailLoyalty from "./pages/DetailLoyalty";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Error from "./pages/Error";
import Unauthorized from "./pages/Unauthorized";
import MarketingAutomation from "./pages/MarketingAutomation";
import TambahKontakForm from "./pages/TambahKontakForm";
import AccountSettings from "./pages/AccountSettings";
import PelangganDashboard from "./pages/Customer/PelangganDashboard";
import MainLayoutCustomer from "./components/MainLayoutCustomer";
import BelanjaPage from "./pages/Customer/BelanjaKategoriPage";
import BelanjaPerKategori from "./pages/Customer/BelanjaPerKategori";
import CashierForm from "./pages/CashierForm";
import Checkout from "./pages/Customer/Checkout";
import RiwayatTransaksi from "./pages/Customer/RiwayatTransaksi";
import DetailTransaksi from "./pages/Customer/DetailTransaksi";
import PromoCustomer from "./pages/Customer/PromoCustomer";
import Complain from "./pages/Customer/Complain";
import AdminChat from "../AdminChat";
import CustomerChat from "./pages/Customer/CustomerChat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<Forgot />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard/admin" element={<Dashboard />} />
        <Route path="/account-management" element={<AccountManagement />} />
        <Route path="/account-management/:id" element={<AccountDetail />} />
        <Route path="/sales-insight" element={<SalesInsight />} />
        <Route path="/order-management" element={<OrderManagement />} />
        <Route path="/promo-management" element={<PromoManagement />} />
        <Route path="/campaign" element={<CampaignManagement />} />
        <Route path="/broadtrigger-marketing" element={<BroadcastTriggerMarketing />} />
        <Route path="/trigger-marketing" element={<TriggerManagement />} />
        <Route path="/feedback-faq" element={<FeedbackFAQManagement />} />
        <Route path="/loyalty" element={<LoyaltyManagement />} />
        <Route path="/loyalty/:id" element={<DetailLoyalty />} />
        <Route path="/marketing" element={<MarketingAutomation />} />
        <Route path="/marketingform" element={<TambahKontakForm />} />
        <Route path="/settings" element={<AccountSettings />} />
        <Route path="/products" element={<ProductManagement />} />
        <Route path="/adminchat" element={<AdminChat />} />
      </Route>
      <Route element={<MainLayoutCustomer />}>
        <Route path="/customer" element={<PelangganDashboard />} />
        <Route path="/customer/belanja" element={<BelanjaPage />} />
        <Route path="/belanja/id/:kategori" element={<BelanjaPerKategori />} />
        <Route path="/customer/belanja" element={<BelanjaPage />} />
        <Route path="/customer/checkout" element={<Checkout />} />
        <Route path="/customert/riwayat-transaksi" element={<RiwayatTransaksi />} />
        <Route path="/customer/riwayat-transaksi/:id" element={<DetailTransaksi />} />
        <Route path="/customer/promo" element={<PromoCustomer />} />
        <Route path="/customer/complain" element={<Complain />} />
        <Route path="/customer/chat" element={<CustomerChat />} />
      </Route>
      <Route path="/kasirpage" element={<KasirPage />} />
      <Route path="/kasir" element={<CashierForm />} />
      <Route path="*" element={<Error />} />{" "}
      <Route path="/401" element={<Unauthorized />} />
    </Routes>
  );
}

export default App;
