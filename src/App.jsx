import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayouts";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
