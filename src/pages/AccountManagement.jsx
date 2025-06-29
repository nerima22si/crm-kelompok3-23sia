import React from 'react';

const customers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '081234567890',
    membership: 'Gold',
    frequency: 15,
    favoriteProduct: 'Caramel Jcoccino',
    channel: 'Dine-in',
    total: 1200000
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '082345678901',
    membership: 'Silver',
    frequency: 8,
    favoriteProduct: 'Avocado Frappe',
    channel: 'Delivery',
    total: 850000
  },
];

const AccountManagement = () => {
  return (
    <div className="bg-[#fdf6f1] p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-[#4b2e2b]">Account Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[#d3a170] text-sm">
          <thead className="bg-[#f3e5dc] text-left text-[#4b2e2b]">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Nama</th>
              <th className="p-2">Email</th>
              <th className="p-2">Nomor Telepon</th>
              <th className="p-2">Membership</th>
              <th className="p-2">Frekuensi</th>
              <th className="p-2">Produk Favorit</th>
              <th className="p-2">Kanal</th>
              <th className="p-2">Total</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-[#4b2e2b]">
            {customers.map((cust) => (
              <tr key={cust.id} className="border-b hover:bg-[#fff8f4]">
                <td className="p-2 font-medium">{cust.id}</td>
                <td className="p-2">{cust.name}</td>
                <td className="p-2">{cust.email}</td>
                <td className="p-2">
                  <input
                    type="text"
                    defaultValue={cust.phone}
                    className="border border-[#d3a170] rounded px-2 py-1 w-full bg-white"
                  />
                </td>
                <td className="p-2">{cust.membership}</td>
                <td className="p-2">{cust.frequency}</td>
                <td className="p-2">{cust.favoriteProduct}</td>
                <td className="p-2">{cust.channel}</td>
                <td className="p-2">Rp{cust.total.toLocaleString()}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <button className="text-[#4b2e2b] underline">Lihat</button>
                    <button className="text-white bg-[#d3a170] hover:bg-[#c08e56] px-2 py-1 rounded">Edit</button>
                    <button className="text-red-600 hover:underline">Hapus</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountManagement;