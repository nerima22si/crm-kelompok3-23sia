import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayouts";
import Dashboard from "./pages/Dashboard";
import SalesManagement from "./pages/SalesManagement";
import FeedbackKomplain from "./pages/FeedbackKomplain";
import LoyaltyMembership from "./pages/LoyaltyMembership";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/penjualan" element={<SalesManagement />}/>
        <Route path="/feedback" element={<FeedbackKomplain />}/>
        <Route path="/loyalty" element={<LoyaltyMembership />}/>
      </Route>
    </Routes>
  );
}

export default App;
