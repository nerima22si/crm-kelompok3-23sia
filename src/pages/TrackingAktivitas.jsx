import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import React from "react";

const aktivitasData = [
  { hari: "Senin", aktivitas: 20 },
  { hari: "Selasa", aktivitas: 35 },
  { hari: "Rabu", aktivitas: 25 },
  { hari: "Kamis", aktivitas: 30 },
  { hari: "Jumat", aktivitas: 40 },
  { hari: "Sabtu", aktivitas: 55 },
  { hari: "Minggu", aktivitas: 28 },
];

const kanalData = [
  { name: "Dine-in", value: 45 },
  { name: "Takeaway", value: 25 },
  { name: "Delivery", value: 30 },
];

const COLORS = ["#7C3AED", "#A78BFA", "#E0E7FF"];

const TrackingAktivitas = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 mb-8">
          Tracking Aktivitas Pelanggan
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="bg-white rounded-2xl p-6 shadow border border-purple-100">
            <h2 className="text-lg font-semibold mb-4 text-purple-600">
              Aktivitas Harian (Mingguan)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={aktivitasData}>
                <XAxis dataKey="hari" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="aktivitas" fill="#A78BFA" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-2xl p-6 shadow border border-purple-100">
            <h2 className="text-lg font-semibold mb-4 text-purple-600">
              Kanal Pembelian
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={kanalData}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label
                  dataKey="value"
                >
                  {kanalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingAktivitas;
