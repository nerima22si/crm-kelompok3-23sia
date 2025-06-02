import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayouts";
import Dashboard from "./pages/Dashboard";
import SalesManagement from "./pages/SalesManagement";
import RiwayatTransaksi from "./pages/RiwayatTransaksiPelanggan";
import TrackingAktivitas from "./pages/TrackingAktivitas";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/penjualan" element={<SalesManagement />}/>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pelanggan" element={<SalesManagement />} />
        <Route path="/riwayatpelanggan" element={<RiwayatTransaksi />} />
        <Route path="/tracking" element={<TrackingAktivitas />} />
      </Route>
    </Routes>
  );
}

export default App;
