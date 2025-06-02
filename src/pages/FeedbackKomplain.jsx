import React, { useState } from "react";


const initialComplaints = [
  { id: 1, name: "Budi Santoso", email: "budi@example.com", message: "Produk rusak", status: "Open", date: "2025-05-01" },
  { id: 2, name: "Siti Aminah", email: "siti@example.com", message: "Layanan lambat", status: "Selesai", date: "2025-04-28" },
  { id: 3, name: "Andi Wijaya", email: "andi@example.com", message: "Pengiriman terlambat", status: "Ditolak", date: "2025-05-02" },
];


const statusColors = {
  Open: "bg-yellow-200 text-yellow-800",
  Selesai: "bg-green-200 text-green-800",
  Ditolak: "bg-red-200 text-red-800",
};


export default function FeedbackKomplain() {
  const [complaints, setComplaints] = useState(initialComplaints);


  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus komplain ini?")) {
      setComplaints(complaints.filter((c) => c.id !== id));
    }
  };


  return (
    <div className="p-6 max-w-5xl mx-auto mb-10">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">
        Feedback & Komplain Online
      </h2>


      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pesan Komplain</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {complaints.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{c.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{c.email}</td>
                <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate" title={c.message}>{c.message}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${statusColors[c.status]}`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{c.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    className="text-red-600 hover:text-red-900 font-semibold"
                    onClick={() => handleDelete(c.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {complaints.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  Tidak ada data komplain
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
