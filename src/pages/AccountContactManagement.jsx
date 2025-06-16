import React from 'react';

const dataPelanggan = [
  {
    id: 1,
    nama: 'Andi Wijaya',
    status: 'Gold',
    email: 'andi@example.com',
    nomor: '081234567890',
  },
  {
    id: 2,
    nama: 'Siti Rahma',
    status: 'Silver',
    email: 'siti@example.com',
    nomor: '082233445566',
  },
  {
    id: 3,
    nama: 'Budi Santoso',
    status: 'Bronze',
    email: 'budi@example.com',
    nomor: '083344556677',
  },
];

const AccountContactManagement = () => {
  const handleEdit = (id) => alert(`Edit pelanggan ID: ${id}`);
  const handleHubungi = (nomor) => alert(`Menghubungi: ${nomor}`);
  const handleDelete = (id) => {
    if (window.confirm(`Yakin ingin hapus pelanggan ID ${id}?`)) {
      alert(`Pelanggan ID ${id} dihapus (simulasi)`);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-purple-700 mb-6 border-b pb-2">Account & Contact Management</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dataPelanggan.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md hover:shadow-lg transition-shadow p-5 rounded-2xl border border-gray-100"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-1">{item.nama}</h2>
            <p className="text-sm text-gray-500 mb-2">
              <span className="font-medium text-gray-600">Membership:</span> {item.status}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-medium text-gray-600">Email:</span> {item.email}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-medium text-gray-600">Nomor:</span> {item.nomor}
            </p>

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => handleEdit(item.id)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 text-sm rounded-md shadow-sm transition"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => handleHubungi(item.nomor)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-sm rounded-md shadow-sm transition"
              >
                📞 Hubungi
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded-md shadow-sm transition"
              >
                🗑️ Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountContactManagement;
