import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Data summary cards
  const stats = [
    { label: "Total Pelanggan Aktif", value: "12,500", percent: "+8%", color: "amber" },
    { label: "Total Transaksi", value: "25,320", percent: "+12%", color: "amber" },
    { label: "Produk Terlaris", value: "Avocado Diction", percent: "Top 1", color: "yellow" },
    { label: "KPI Penjualan", value: "89%", percent: "Target 95%", color: "orange" },
    { label: "Promo Aktif", value: "5 Promo", percent: "🔥", color: "red" },
    { label: "Kampanye Berjalan", value: "3", percent: "+1", color: "amber" },
    { label: "Komplain Masuk", value: "18", percent: "12 Closed, 6 Open", color: "red" },
  ];

  // Line Chart: Loyalitas pelanggan
  const loyaltyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [
      {
        label: "Loyal Customers",
        data: [1200, 1350, 1500, 1700, 1650, 1800],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const loyaltyOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: '📈 Grafik Loyalitas Pelanggan (6 Bulan Terakhir)' },
    },
  };

  // Bar Chart: Kampanye
  const campaignData = {
    labels: ["Kampanye 1", "Kampanye 2", "Kampanye 3"],
    datasets: [
      {
        label: "CTR (%)",
        data: [12, 18, 25],
        backgroundColor: "#fb923c",
      },
      {
        label: "Open Rate (%)",
        data: [45, 60, 70],
        backgroundColor: "#facc15",
      },
    ],
  };

  const campaignOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: '🎯 Performa Kampanye Marketing' },
    },
  };

  return (
    <div className="p-6 space-y-10 bg-[#fdfaf5] min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-[#4b2e2b] mb-2">📊 Sales & Campaign Dashboard</h1>
        <p className="text-sm text-gray-600">Insight ringkas tentang performa pelanggan, penjualan, dan kampanye marketing.</p>
      </div>

      {/* Ringkasan Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {stats.map(({ label, value, percent, color }) => (
          <div
            key={label}
            className={`bg-white rounded-xl shadow p-5 border-l-4 border-${color}-400`}
          >
            <p className="text-sm text-gray-500">{label}</p>
            <h2 className={`text-2xl font-bold text-${color}-700`}>
              {value}
              <span className={`block text-xs font-medium text-${color}-500`}>{percent}</span>
            </h2>
          </div>
        ))}
      </div>

      {/* Loyalitas Pelanggan */}
      <div className="bg-white rounded-xl shadow p-6">
        <Line options={loyaltyOptions} data={loyaltyData} />
        <p className="text-xs text-gray-500 mt-2">Meningkat 50% sejak Januari. Pelanggan setia berkontribusi besar terhadap retensi.</p>
      </div>

      {/* Kampanye */}
      <div className="bg-white rounded-xl shadow p-6">
        <Bar options={campaignOptions} data={campaignData} />
        <p className="text-xs text-gray-500 mt-2">CTR & Open Rate naik signifikan, khususnya pada Kampanye 3.</p>
      </div>

      {/* Navigasi Modul Dashboard */}
      <div>
        <h3 className="text-xl font-semibold text-[#4b2e2b] mb-4">Navigasi Modul Lain</h3>
        <div className="flex flex-wrap gap-4">
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-700 transition">
            📦 SFA Dashboard
          </button>
          <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg shadow hover:bg-yellow-700 transition">
            📬 MA Dashboard
          </button>
          <button className="bg-amber-700 text-white px-6 py-2 rounded-lg shadow hover:bg-amber-800 transition">
            🛒 SA Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
