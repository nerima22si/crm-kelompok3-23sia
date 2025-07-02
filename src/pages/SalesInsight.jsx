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
  Tooltip,
  Legend,
} from 'chart.js';
import { dummyOrders } from '../data/dummyOrders';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday'; // ✅ pakai plugin yang benar
import isoWeek from 'dayjs/plugin/isoWeek'; // ✅ opsional kalau mau group by minggu
dayjs.extend(weekday);
dayjs.extend(isoWeek);

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const SalesInsight = () => {
  // KPI Calculation
  const totalSales = dummyOrders.reduce((sum, order) => {
    const orderTotal = order.items.reduce((s, item) => s + item.qty * item.price, 0);
    return sum + orderTotal;
  }, 0);

  const activeBranches = new Set(dummyOrders.map((o) => o.channel)).size;
  const activeCustomers = new Set(dummyOrders.map((o) => o.customer)).size;
  const totalTransactions = dummyOrders.length;
  const avgOrder = totalSales / totalTransactions;
  const monthlyGrowth = '+12%'; // Placeholder

  const kpis = [
    { title: 'Total Penjualan', value: `Rp ${totalSales.toLocaleString()}` },
    { title: 'Cabang Aktif', value: `${activeBranches}` },
    { title: 'Customer Aktif', value: `${activeCustomers}` },
    { title: 'Total Transaksi', value: `${totalTransactions}` },
    { title: 'Rata-rata Order', value: `Rp ${Math.round(avgOrder).toLocaleString()}` },
    { title: 'Pertumbuhan Bulanan', value: monthlyGrowth },
  ];

  // Top Product (by total quantity)
  const productCount = {};
  dummyOrders.forEach(order => {
    order.items.forEach(item => {
      productCount[item.name] = (productCount[item.name] || 0) + item.qty;
    });
  });
  const sortedProducts = Object.entries(productCount).sort((a, b) => b[1] - a[1]);
  const topProduct = sortedProducts[0][0];

  // Weekly Activity Chart
  const activityData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Aktivitas Pelanggan',
      data: [120, 150, 100, 180],
      backgroundColor: '#d3a170',
    }],
  };

  // Product Contribution Chart
  const productContribution = {
    labels: Object.keys(productCount),
    datasets: [{
      data: Object.values(productCount),
      backgroundColor: ['#a35f2a', '#d3a170', '#f5e3ca', '#f4c78c'],
    }],
  };

  // Popular Product Chart
  const popularProductData = {
    labels: sortedProducts.map(p => p[0]),
    datasets: [{
      label: 'Jumlah Terjual',
      data: sortedProducts.map(p => p[1]),
      backgroundColor: '#a35f2a',
    }],
  };

  // Daily/Weekly/Yearly Sales Chart
  const stackedData = {
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
    datasets: [
      {
        label: 'Harian',
        data: [50, 60, 55, 70, 90, 80, 40],
        backgroundColor: '#d3a170',
      },
      {
        label: 'Mingguan',
        data: [300, 320, 310, 350, 370, 330, 280],
        backgroundColor: '#a35f2a',
      },
      {
        label: 'Tahunan',
        data: [1200, 1300, 1250, 1400, 1500, 1350, 1100],
        backgroundColor: '#f5e3ca',
      },
    ],
  };

  const stackedOptions = {
    responsive: true,
    plugins: { legend: { position: 'top' } },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  // Target vs Realisasi
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

  // Sales Per Day (by order.date)
  const salesByDay = {
    Senin: 0, Selasa: 0, Rabu: 0, Kamis: 0, Jumat: 0, Sabtu: 0, Minggu: 0,
  };
  dummyOrders.forEach(order => {
    const dayIndex = dayjs(order.date).isoWeekday();
    const total = order.items.reduce((sum, item) => sum + item.qty * item.price, 0);
    const hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'][dayIndex - 1];
    salesByDay[hari] += total;
  });
  const salesPerDayChart = {
    labels: Object.keys(salesByDay),
    datasets: [{
      label: 'Total Penjualan (Rp)',
      data: Object.values(salesByDay),
      backgroundColor: '#a35f2a',
    }],
  };

  // Membership Distribution
  const membershipCounts = {};
  dummyOrders.forEach(order => {
    membershipCounts[order.membership] = (membershipCounts[order.membership] || 0) + 1;
  });
  const membershipChart = {
    labels: Object.keys(membershipCounts),
    datasets: [{
      data: Object.values(membershipCounts),
      backgroundColor: ['#a35f2a', '#d3a170', '#f5e3ca'],
    }],
  };

  // Channel Distribution
  const channelCounts = {};
  dummyOrders.forEach(order => {
    channelCounts[order.channel] = (channelCounts[order.channel] || 0) + 1;
  });
  const channelChart = {
    labels: Object.keys(channelCounts),
    datasets: [{
      data: Object.values(channelCounts),
      backgroundColor: ['#d3a170', '#a35f2a', '#4b2e2b'],
    }],
  };

  return (
    <div className="bg-[#fdf6f1] p-6 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-[#4b2e2b] mb-6">📊 Sales Insight</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-white p-5 rounded-lg shadow text-center">
            <h4 className="text-[#4b2e2b] font-medium">{kpi.title}</h4>
            <p className="text-xl font-bold text-[#d3a170]">{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="text-[#4b2e2b] font-medium mb-3">Aktivitas Pelanggan Mingguan</h4>
          <Bar data={activityData} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h4 className="text-[#4b2e2b] font-medium mb-3">Kontribusi Produk ke Penjualan</h4>
          <Pie data={productContribution} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="text-[#4b2e2b] font-medium mb-3">Produk Terpopuler</h4>
          <Bar data={popularProductData} />
          <p className="text-sm text-right mt-2 text-[#4b2e2b]">🔥 Paling laku minggu ini: <strong>{topProduct}</strong></p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h4 className="text-[#4b2e2b] font-medium mb-3">Target vs Realisasi Penjualan</h4>
          <Line data={lineData} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="text-[#4b2e2b] font-medium mb-3">Penjualan per Hari</h4>
          <Bar data={salesPerDayChart} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h4 className="text-[#4b2e2b] font-medium mb-3">Distribusi Membership</h4>
          <Pie data={membershipChart} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h4 className="text-[#4b2e2b] font-medium mb-3">Distribusi Kanal Pemesanan</h4>
          <Pie data={channelChart} />
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-[#4b2e2b] font-medium mb-3">Penjualan Harian / Mingguan / Tahunan</h4>
        <Bar data={stackedData} options={stackedOptions} />
      </div>
    </div>
  );
};

export default SalesInsight;
