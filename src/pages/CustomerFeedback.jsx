import React, { useState } from "react";

const initialComplaints = [
  {
    id: 1,
    name: "Budi Santoso",
    email: "budi@email.com",
    message: "Produk tidak sesuai dengan deskripsi",
    status: "Sedang Diproses",
  },
  {
    id: 2,
    name: "Siti Aminah",
    email: "siti@email.com",
    message: "Pengiriman terlambat",
    status: "Selesai",
  },
];

const statusColors = {
  "Sedang Diproses": "bg-yellow-200 text-yellow-800",
  "Selesai": "bg-green-200 text-green-800",
  "Ditolak": "bg-red-200 text-red-800",
};

export default function CustomerFeedback() {
  const [complaints, setComplaints] = useState(initialComplaints);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Semua field wajib diisi!");
      return;
    }
    const newComplaint = {
      id: complaints.length > 0 ? Math.max(...complaints.map((c) => c.id)) + 1 : 1,
      ...formData,
      status: "Sedang Diproses",
    };
    setComplaints([newComplaint, ...complaints]);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">Online Feedback & Complaints</h2>

      <form onSubmit={handleSubmit} className="mb-8 bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Form Komplain</h3>
        <div className="mb-3">
          <label className="block mb-1 font-medium">Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Masukkan nama Anda"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Masukkan email Anda"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Pesan Komplain</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Tuliskan pesan Anda"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Kirim Komplain
        </button>
      </form>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Daftar Komplain</h3>
        {complaints.length === 0 ? (
          <p className="text-gray-500 text-center">Belum ada komplain.</p>
        ) : (
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 text-sm font-medium text-gray-600">Nama</th>
                <th className="text-left px-4 py-2 text-sm font-medium text-gray-600">Email</th>
                <th className="text-left px-4 py-2 text-sm font-medium text-gray-600">Pesan</th>
                <th className="text-left px-4 py-2 text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((c) => (
                <tr key={c.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-800">{c.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{c.email}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{c.message}</td>
                  <td className="px-4 py-2 text-sm">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${statusColors[c.status]}`}
                    >
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
