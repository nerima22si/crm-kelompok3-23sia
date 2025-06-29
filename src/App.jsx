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


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/account-management" element={<AccountManagement/>} />
        <Route path="/sales-insight" element={<SalesInsight />} />
        <Route path="/order-management" element={<OrderManagement />} />
        <Route path="/promo-management" element={<PromoManagement />} />
        <Route path="/campaign" element={<CampaignManagement />} />
        <Route path="/broadtrigger-marketing" element={<BroadcastTriggerMarketing />} />
        <Route path="/trigger-marketing" element={<TriggerManagement />} />
        <Route path="/feedback-faq" element={<FeedbackFAQManagement />} />
        <Route path="/loyalty-profile" element={<LoyaltyManagement />} />
        <Route path="/products" element={<ProductManagement />} />

        
      </Route>
    </Routes>
  );
}

export default App;
