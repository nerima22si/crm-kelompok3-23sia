import React from "react";

const members = [
  { id: "M001", status: "Aktif", waktu: "2025-06-15", produk: "Produk A" },
  { id: "M002", status: "Nonaktif", waktu: "2025-06-10", produk: "Produk B" },
];

const LoyaltyManagement = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Loyalty Management</h2>

      {/* Tabel Member */}
      <table className="w-full text-sm border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-2">ID</th>
            <th>Status</th>
            <th>Waktu</th>
            <th>Produk</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id} className="text-center border-t">
              <td className="p-2">{m.id}</td>
              <td>
                <span className={`px-2 py-1 rounded text-white text-xs ${m.status === "Aktif" ? "bg-green-600" : "bg-gray-400"
                  }`}>
                  {m.status}
                </span>
              </td>
              <td>{m.waktu}</td>
              <td>{m.produk}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Badge Membership */}
      <div className="grid md:grid-cols-2 gap-4">
        {members.map((m) => (
          <div key={m.id} className="bg-gray-100 p-4 rounded shadow">
            <p className="font-semibold">Member ID: {m.id}</p>
            <p>Status: <span className={`font-semibold ${m.status === "Aktif" ? "text-green-600" : "text-gray-500"}`}>{m.status}</span></p>
            <p>Produk: {m.produk}</p>
            <p>Waktu: {m.waktu}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoyaltyManagement;
