import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  Legend,
  Tooltip
);

const SalesInsight = () => {
  const barData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Aktivitas Pelanggan',
      data: [120, 150, 100, 180],
      backgroundColor: '#d3a170',
      borderRadius: 6,
    }],
  };

  const pieData = {
    labels: ['Donat', 'Kopi', 'Yogurt'],
    datasets: [{
      data: [300, 200, 100],
      backgroundColor: ['#a35f2a', '#d3a170', '#f5e3ca'],
      borderWidth: 1,
    }],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Target',
        data: [100, 120, 130, 150],
        borderColor: '#d3a170',
        tension: 0.4,
      },
      {
        label: 'Realisasi',
        data: [90, 110, 115, 145],
        borderColor: '#a35f2a',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-[#fdf6f1] p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-[#4b2e2b] mb-6">Sales Insight</h2>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { title: 'Total Penjualan', value: 'Rp 5.400.000' },
          { title: 'Cabang Aktif', value: '8' },
          { title: 'Customer Aktif', value: '1.230' },
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-5 rounded-lg shadow text-center">
            <h4 className="text-[#4b2e2b] font-medium">{kpi.title}</h4>
            <p className="text-xl font-bold text-[#d3a170]">{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="text-[#4b2e2b] font-medium mb-3">Aktivitas Pelanggan</h4>
          <Bar data={barData} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h4 className="text-[#4b2e2b] font-medium mb-3">Produk Terlaris</h4>
          <Pie data={pieData} />
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-[#4b2e2b] font-medium mb-3">Target vs Realisasi</h4>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default SalesInsight;
