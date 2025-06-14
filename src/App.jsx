import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayouts";
import Dashboard from "./pages/Dashboard";
import SalesManagement from "./pages/SalesManagement";
import EmailNotificationPage from "./pages/EmailNotificationPage";
import SegmentasiKampanye from "./pages/SegmentasiKampanyePage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/emailnotificaton" element={<EmailNotificationPage />} />
         <Route path="/segmentasikampanye" element={<SegmentasiKampanye />} />
      </Route>
    </Routes>
  );
}

export default App;
