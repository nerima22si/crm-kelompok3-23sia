import React from 'react';
import { useParams } from 'react-router-dom';
import customers from '../data/customers';

const AccountDetail = () => {
    const { id } = useParams();
    const customer = customers.find((cust) => cust.id === parseInt(id));

    if (!customer) {
        return <div className="p-6 text-red-600">Akun tidak ditemukan.</div>;
    }

    return (
        <div className="bg-[#fdf6f1] p-6 rounded-xl shadow-md max-w-xl mx-auto mt-6">
            <h2 className="text-2xl font-bold text-[#4b2e2b] mb-4">Detail Akun Member</h2>
            <div className="bg-white p-5 rounded-xl shadow space-y-3 text-[#4b2e2b] leading-relaxed">
                <p><strong>Nama:</strong> {customer.name}</p>
                <p><strong>Email:</strong> {customer.email}</p>
                <p><strong>Nomor HP:</strong> {customer.phone}</p>
                <p><strong>Membership:</strong> {customer.membership}</p>
                <p><strong>Total Transaksi:</strong> {customer.totalTransactions}</p>
                <p><strong>Total Belanja:</strong> Rp {customer.totalSpent.toLocaleString('id-ID')}</p>
                <p><strong>Transaksi Terakhir:</strong> {customer.lastTransaction}</p>
            </div>
        </div>
    );
};

export default AccountDetail;
