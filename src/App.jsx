import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayouts";
import Dashboard from "./pages/Dashboard";
import SalesManagement from "./pages/SalesManagement";
import RiwayatTransaksi from "./pages/RiwayatTransaksiPelanggan";
import AccountContactManagement from "./pages/AccountContactManagement";
import ActivityForecastManagement from "./pages/ActivityForecastManagement";
import OrderPromoManagement from "./pages/OrderPromoManagement";
import CampaignManagement from "./pages/CampaignManagement";
import EmailCampaignManagement from "./pages/EmailCampaignManagement";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/penjualan" element={<SalesManagement />}/>
        <Route path="/" element={<Dashboard />} />
        <Route path="/account&contactmanagement" element={<AccountContactManagement/>} />
        <Route path="/activity-forecast" element={<ActivityForecastManagement />} />
        <Route path="/pelanggan" element={<SalesManagement />} />
        <Route path="/riwayatpelanggan" element={<RiwayatTransaksi />} />
        <Route path="/order-promo" element={<OrderPromoManagement />} />
        <Route path="/campaign" element={<CampaignManagement />} />
        <Route path="/emailcampaign" element={<EmailCampaignManagement />} />
      </Route>
    </Routes>
  );
}

export default App;
