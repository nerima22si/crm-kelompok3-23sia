import React, { useState, useMemo } from "react";
import rawCustomers from "../data/customers2";

// Warna background untuk masing-masing level membership
const membershipColor = {
  Gold: "bg-yellow-400",
  Silver: "bg-gray-400",
  Reguler: "bg-orange-400",
  Platinum: "bg-blue-400",
};

// Segmentasi loyalti berdasarkan data transaksi
const segmentCustomers = (customers) => {
  return customers.map((cust) => {
    let membership = "Reguler"; // Default

    if (cust.activeInPromo && cust.annualSpending >= 10000000) {
      membership = "Platinum";
    } else if (cust.monthlyOrders >= 10 && cust.buysPremium) {
      membership = "Gold";
    } else if (cust.monthlyOrders >= 5) {
      membership = "Silver";
    }

    return { ...cust, membership };
  });
};

const LoyaltyManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [membershipFilter, setMembershipFilter] = useState("All");

  const customers = useMemo(() => segmentCustomers(rawCustomers), []);

  // Hitung total member tiap membership
  const summaries = useMemo(() => {
    const summary = {};
    customers.forEach((cust) => {
      const level = cust.membership;
      summary[level] = (summary[level] || 0) + 1;
    });

    return Object.entries(summary).map(([level, count]) => ({
      label: `Total Member ${level}`,
      value: count,
      icon: "👤",
      color: membershipColor[level] || "bg-gray-300",
    }));
  }, [customers]);

  // Filter berdasarkan keyword dan jenis membership
  const filteredCustomers = useMemo(() => {
    return customers.filter((cust) => {
      const keyword = searchTerm.toLowerCase();
      const matchKeyword =
        cust.name.toLowerCase().includes(keyword) ||
        cust.email.toLowerCase().includes(keyword) ||
        cust.phone.toLowerCase().includes(keyword);

      const matchMembership =
        membershipFilter === "All" || cust.membership === membershipFilter;

      return matchKeyword && matchMembership;
    });
  }, [customers, searchTerm, membershipFilter]);

  return (
    <div className="bg-[#fdf6f1] p-6 rounded-xl shadow-md">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-2xl font-semibold text-[#4b2e2b]">Loyalty Management</h2>

        {/* Ringkasan Membership */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {summaries.map((s, idx) => (
            <div
              key={idx}
              className="rounded-lg shadow border p-4 flex flex-col items-center justify-center bg-white"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-center text-sm text-gray-600">{s.label}</div>
              <div className="text-2xl font-bold">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Filter & Tabel */}
        <div>
          <h3 className="text-xl font-semibold text-[#a35f2a] mb-4">Daftar Member Loyalty</h3>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <input
              type="text"
              placeholder="Cari nama, email, atau nomor HP..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#e0c5a5]"
            />
            <select
              value={membershipFilter}
              onChange={(e) => setMembershipFilter(e.target.value)}
              className="w-full sm:w-48 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#e0c5a5]"
            >
              <option value="All">Semua Membership</option>
              <option value="Platinum">Platinum</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Reguler">Reguler</option>
            </select>
          </div>

          {/* Tabel Data Pelanggan */}
          <div className="overflow-x-auto bg-white rounded-xl shadow border">
            <table className="min-w-full text-sm divide-y divide-gray-200">
              <thead className="bg-[#fef8f5] text-[#4b2e2b] text-left">
                <tr>
                  <th className="p-4">No</th>
                  <th className="p-4">Nama</th>
                  <th className="p-4">Membership</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Nomor</th>
                  <th className="p-4">Transaksi</th>
                  <th className="p-4">Aksi</th>
                </tr>

              </thead>
              <tbody>
                {filteredCustomers.length === 0 ? (
                  <tr>
                    <td className="p-4 text-center text-gray-500" colSpan={6}>
                      Tidak ada data ditemukan.
                    </td>
                  </tr>
                ) : (
                  filteredCustomers.map((cust, index) => (
                    <tr
                      key={cust.id}
                      className={`${index % 2 === 0 ? "bg-[#fffdfc]" : "bg-[#fff9f5]"
                        } hover:bg-[#f8f2ee]`}
                    >
                      <td className="p-4">{String(index + 1).padStart(2, "0")}.</td>
                      <td className="p-4 font-medium text-[#4b2e2b]">{cust.name}</td>
                      <td className="p-4">
                        <span
                          className={`text-white text-xs px-2 py-1 rounded ${membershipColor[cust.membership] || "bg-gray-400"
                            }`}
                        >
                          {cust.membership}
                        </span>
                      </td>
                      <td className="p-4">{cust.email}</td>
                      <td className="p-4">{cust.phone}</td>
                      <td className="p-4">{cust.totalTransactions || 0}</td>
                      <td className="p-4">
                        <button
                          onClick={() => window.location.href = `/loyalty/:id${cust.id}`}
                          className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        >
                          Detail
                        </button>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyManagement;
