import React from "react";

const transactions = [
  {
    name: "Rina Setiawan",
    product: "Jcoccino + Donat Choco Loco",
    channel: "Dine-in",
    frequency: "3x minggu ini",
    date: "2025-06-01 14:32",
  },
  {
    name: "Andi Pratama",
    product: "Donat Tiramisu",
    channel: "GrabFood",
    frequency: "5x bulan ini",
    date: "2025-05-30 09:15",
  },
  {
    name: "Sari Dewi",
    product: "Yogurt & Donat Green Tea",
    channel: "Takeaway",
    frequency: "2x bulan ini",
    date: "2025-05-28 17:45",
  },
];

const RiwayatTransaksi = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 mb-8">
          Riwayat Transaksi Pelanggan
        </h1>

        <div className="overflow-auto bg-white rounded-2xl shadow-xl border border-purple-100">
          <table className="min-w-full text-[15px] border-collapse">
            <thead>
              <tr className="bg-purple-50 text-purple-800 uppercase text-sm tracking-wider border-b border-purple-200">
                <th className="py-4 px-6 text-left border-r border-purple-100">
                  Nama Pelanggan
                </th>
                <th className="py-4 px-6 text-left border-r border-purple-100">
                  Produk
                </th>
                <th className="py-4 px-6 text-left border-r border-purple-100">
                  Kanal Pembelian
                </th>
                <th className="py-4 px-6 text-left border-r border-purple-100">
                  Frekuensi
                </th>
                <th className="py-4 px-6 text-left">Tanggal / Waktu</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trx, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-purple-50 transition border-b border-purple-100"
                >
                  <td className="py-3 px-6 border-r border-purple-50">
                    {trx.name}
                  </td>
                  <td className="py-3 px-6 border-r border-purple-50">
                    {trx.product}
                  </td>
                  <td className="py-3 px-6 border-r border-purple-50">
                    <span className="inline-block px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-700 font-medium">
                      {trx.channel}
                    </span>
                  </td>
                  <td className="py-3 px-6 border-r border-purple-50">
                    {trx.frequency}
                  </td>
                  <td className="py-3 px-6">{trx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RiwayatTransaksi;
