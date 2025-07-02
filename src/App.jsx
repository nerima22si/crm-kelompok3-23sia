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

import KasirForm from "./pages/KasirForm";
import KasirPage from "./pages/KasirPage";
import AccountDetail from "./pages/AccountDetail";
import DetailLoyalty from "./pages/DetailLoyalty";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Error from "./pages/Error";
import Unauthorized from "./pages/Unauthorized";

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

        {/* Product Management */}
        <Route path="/products" element={<ProductManagement />} />

      </Route>
      <Route path="/kasirpage" element={<KasirPage />} />
      <Route path="/kasir" element={<KasirForm />} />



      <Route path="*" element={<Error />} />{" "}
      <Route path="/401" element={<Unauthorized />} />
    </Routes>
  );
}

export default App;
