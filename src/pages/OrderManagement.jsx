import React, { useState } from 'react';
import { dummyOrders } from '../data/dummyOrders';

const OrderManagement = () => {
  const [orders, setOrders] = useState(dummyOrders);

  const countByStatus = (status) =>
    orders.filter((order) => order.status === status).length;

  const countByChannel = (channel) =>
    orders.filter((order) => order.channel === channel).length;

  const totalByStatus = {
    Menunggu: countByStatus('Menunggu'),
    Diproses: countByStatus('Diproses'),
    Selesai: countByStatus('Selesai'),
    Dibatalkan: countByStatus('Dibatalkan'),
  };

  const totalByChannel = {
    'Dine-in': countByChannel('Dine-in'),
    Takeaway: countByChannel('Takeaway'),
  };

  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff6ec] to-[#fdf6f1] p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#4b2e2b]">Order Management</h2>

      {/* Cards Ringkasan */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {Object.entries(totalByStatus).map(([status, total]) => (
          <div
            key={status}
            className={`rounded-xl p-4 text-white shadow-md ${{
                Menunggu: 'bg-yellow-500',
                Diproses: 'bg-blue-500',
                Selesai: 'bg-green-600',
                Dibatalkan: 'bg-red-500',
              }[status]
              }`}
          >
            <h4 className="text-sm uppercase font-semibold">{status}</h4>
            <p className="text-2xl font-bold">{total}</p>
          </div>
        ))}
      </div>

      {/* Cards Channel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {Object.entries(totalByChannel).map(([channel, total]) => (
          <div
            key={channel}
            className="rounded-xl bg-[#d3a170] p-4 text-white shadow-md"
          >
            <h4 className="text-sm uppercase font-semibold">{channel}</h4>
            <p className="text-2xl font-bold">{total}</p>
          </div>
        ))}
      </div>

      {/* Tabel Order */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full text-sm">
          <thead className="bg-[#f4e8dc] text-[#4b2e2b] text-left">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Pelanggan</th>
              <th className="p-3">Kontak</th>
              <th className="p-3">Produk</th>
              <th className="p-3">Total</th>
              <th className="p-3">Pembayaran</th>
              <th className="p-3">Kanal</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-[#4b2e2b]">
            {orders.map((order) => {
              const total = order.items.reduce(
                (sum, item) => sum + item.qty * item.price,
                0
              );

              return (
                <tr key={order.id} className="border-t hover:bg-[#fffaf5]">
                  <td className="p-3 font-semibold">{order.id}</td>
                  <td className="p-3">
                    {order.customer}
                    <div className="text-xs text-[#a35f2a]">{order.membership} Member</div>
                  </td>
                  <td className="p-3">{order.contact}</td>
                  <td className="p-3">
                    <ul className="list-disc list-inside space-y-1">
                      {order.items.map((item, i) => (
                        <li key={i}>
                          {item.name} × {item.qty}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-3 font-semibold">Rp {total.toLocaleString()}</td>
                  <td className="p-3">{order.payment}</td>
                  <td className="p-3">{order.channel}</td>
                  <td className="p-3">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className="text-xs px-2 py-1 rounded bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#a35f2a]"
                    >
                      <option value="Menunggu">Menunggu</option>
                      <option value="Diproses">Diproses</option>
                      <option value="Selesai">Selesai</option>
                      <option value="Dibatalkan">Dibatalkan</option>
                    </select>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      className="text-[#a35f2a] underline text-xs"
                      onClick={() => alert('Cetak struk coming soon')}
                    >
                      Cetak Struk
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
