import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend,
} from 'recharts';

const barData = [
  { name: 'Sen', aktivitas: 30 },
  { name: 'Sel', aktivitas: 45 },
  { name: 'Rab', aktivitas: 50 },
  { name: 'Kam', aktivitas: 40 },
  { name: 'Jum', aktivitas: 60 },
  { name: 'Sab', aktivitas: 20 },
  { name: 'Min', aktivitas: 10 },
];

const pieData = [
  { name: 'Aktif', value: 60 },
  { name: 'Tidak Aktif', value: 40 },
];

const COLORS = ['#f4a261', '#e0cfc0'];

const targetData = [
  { bulan: 'Jan', target: 100, realisasi: 80 },
  { bulan: 'Feb', target: 120, realisasi: 90 },
  { bulan: 'Mar', target: 140, realisasi: 130 },
  { bulan: 'Apr', target: 150, realisasi: 140 },
];

const ActivityForecastManagement = () => {
  return (
    <div className="p-6 bg-[#fffaf5] min-h-screen text-[#5c3a1c]">
      <h1 className="text-3xl font-bold mb-6 border-b border-[#e0cfc0] pb-2">
        📊 Activity & Forecast Management
      </h1>

      {/* Dashboard Metrik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#fef4e8] p-4 rounded-xl shadow text-center">
          <div className="text-2xl font-semibold">Rp 150.000.000</div>
          <div className="text-sm text-[#7a5c44]">Total Penjualan</div>
        </div>
        <div className="bg-[#fef4e8] p-4 rounded-xl shadow text-center">
          <div className="text-2xl font-semibold">82%</div>
          <div className="text-sm text-[#7a5c44]">Pencapaian Cabang</div>
        </div>
        <div className="bg-[#fef4e8] p-4 rounded-xl shadow text-center">
          <div className="text-2xl font-semibold">250</div>
          <div className="text-sm text-[#7a5c44]">Jumlah Pelanggan Aktif</div>
        </div>
        <div className="bg-[#fef4e8] p-4 rounded-xl shadow text-center">
          <div className="text-2xl font-semibold">12%</div>
          <div className="text-sm text-[#7a5c44]">Growth Bulanan</div>
        </div>
      </div>

      {/* Grafik Bar & Pie */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-3">Aktivitas Pelanggan (Mingguan)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="aktivitas" fill="#f4a261" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-3">Distribusi Pelanggan (Bulanan)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Grafik Line Target vs Realisasi */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-lg font-bold mb-3">Target vs Realisasi Penjualan</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={targetData}>
            <XAxis dataKey="bulan" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="target" stroke="#e9c46a" strokeWidth={3} />
            <Line type="monotone" dataKey="realisasi" stroke="#2a9d8f" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityForecastManagement;
