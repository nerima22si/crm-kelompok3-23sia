// AccountManagement.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import rawCustomers from '../data/customers';

const membershipRules = (customer) => {
  const trans = customer.totalTransactions || 0;
  const spending = customer.annualSpending || 0;
  const monthly = customer.monthlyOrders || 0;

  if (spending >= 1500000 || trans >= 25) return 'PLATINUM';
  if (spending >= 500000 || trans >= 10) return 'GOLD';
  return 'SILVER';
};

const AccountManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [membershipFilter, setMembershipFilter] = useState('All');

  const customers = useMemo(
    () => rawCustomers.map((c) => ({ ...c, membership: membershipRules(c) })),
    []
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchTerm('');
    setMembershipFilter('All');
    setCurrentPage(1);
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Nama', 'Membership', 'Email', 'Nomor'];
    const rows = filteredCustomers.map((c) => [c.id, c.name, c.membership, c.email, c.phone]);
    const csvContent = [headers, ...rows].map((e) => e.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'daftar_member.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredCustomers = customers.filter((cust) => {
    const matchKeyword =
      cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cust.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cust.phone.toLowerCase().includes(searchTerm.toLowerCase());

    const matchMembership =
      membershipFilter === 'All' || cust.membership === membershipFilter;

    return matchKeyword && matchMembership;
  });

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setCurrentPage(newPage);
  };

  return (
    <div className="bg-[#fdf6f1] p-6 rounded-xl shadow-md">
      <div className="max-w-6xl mx-auto space-y-6">
        <h3 className="text-xl font-semibold mb-4 text-[#a35f2a]">Manajemen Akun Member</h3>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Cari nama, email, atau nomor..."
            className="p-2 border rounded-md w-full sm:w-1/3"
          />

          <select
            value={membershipFilter}
            onChange={(e) => setMembershipFilter(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="All">Semua Membership</option>
            <option value="SILVER">Silver</option>
            <option value="GOLD">Gold</option>
            <option value="PLATINUM">Platinum</option>
          </select>

          <div className="flex items-center gap-2">
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="p-2 border rounded-md"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <button onClick={handleReset} className="bg-gray-300 hover:bg-gray-400 text-sm px-3 py-1 rounded">
              Reset
            </button>
            <button onClick={handleExportCSV} className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded">
              Export CSV
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md mt-4">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-[#f4e8dc] text-[#4b2e2b] text-left">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Nama</th>
                <th className="p-4">Email</th>
                <th className="p-4">Nomor</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {paginatedCustomers.map((cust) => (
                <tr
                  key={cust.id}
                  className={`hover:bg-[#f8f2ee] ${cust.id % 2 === 0 ? 'bg-[#fffdfc]' : 'bg-[#fff9f5]'}`}
                >
                  <td className="p-4">{cust.id}</td>
                  <td className="p-4 font-medium text-[#4b2e2b]">{cust.name}</td>
                  <td className="p-4">{cust.email}</td>
                  <td className="p-4">{cust.phone}</td>
                  <td className="p-4 text-center space-x-2">
                    <Link
                      to={`/account-management/${cust.id}`}
                      className="bg-[#6b4f3b] hover:bg-[#4b2e2b] text-white text-sm px-4 py-1 rounded"
                    >
                      Detail
                    </Link>
                  </td>
                </tr>
              ))}
              {paginatedCustomers.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">Tidak ada data ditemukan.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-center items-center space-x-2 text-sm">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-400' : 'bg-gray-300 hover:bg-gray-400'}`}
          >
            &larr;
          </button>
          <span className="px-2">
            <strong>{currentPage}</strong> dari {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-400' : 'bg-gray-300 hover:bg-gray-400'}`}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
