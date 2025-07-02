import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import customers from "../data/customers2";

// Warna background untuk masing-masing level membership
const membershipColor = {
    Gold: "bg-yellow-400",
    Silver: "bg-gray-400",
    Bronze: "bg-orange-400",
    Platinum: "bg-blue-400",
};

// Menentukan level membership berdasarkan kriteria
const determineMembership = (cust) => {
    if (cust.activeInPromo && cust.annualSpending >= 10000000) return "Platinum";
    if (cust.monthlyOrders >= 10 && cust.buysPremium) return "Gold";
    if (cust.monthlyOrders >= 5) return "Silver";
    return "Bronze";
};

const DetailLoyalty = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const customerId = parseInt(id);
    const customer = customers.find((c) => c.id === customerId);

    useEffect(() => {
        document.title = customer
            ? `Detail - ${customer.name}`
            : "Detail Member Tidak Ditemukan";
    }, [customer]);

    if (!customer) {
        return (
            <div className="p-6 text-center text-red-600 font-semibold">
                Data pelanggan tidak ditemukan.
            </div>
        );
    }

    const membership = determineMembership(customer);
    const bgColor = membershipColor[membership] || "bg-gray-400";

    const formatRupiah = (number) =>
        new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(number);

    return (
        <div className="max-w-2xl mx-auto bg-white shadow rounded-xl p-6 mt-10">
            <h2 className="text-2xl font-bold mb-6 text-[#4b2e2b]">Detail Member Loyalty</h2>

            <div className="space-y-4 text-sm">
                <div><strong>Nama:</strong> {customer.name}</div>
                <div><strong>Email:</strong> {customer.email}</div>
                <div><strong>Nomor HP:</strong> {customer.phone}</div>
                <div>
                    <strong>Membership:</strong>
                    <span className={`ml-2 text-white text-xs px-2 py-1 rounded ${bgColor}`}>
                        {membership}
                    </span>
                </div>
                <div><strong>Total Transaksi:</strong> {customer.totalTransactions || 0}</div>
                <div><strong>Pemesanan per Bulan:</strong> {customer.monthlyOrders}</div>
                <div><strong>Beli Premium:</strong> {customer.buysPremium ? "Ya" : "Tidak"}</div>
                <div><strong>Pengeluaran Tahunan:</strong> {formatRupiah(customer.annualSpending)}</div>
                <div><strong>Aktif Promo:</strong> {customer.activeInPromo ? "Ya" : "Tidak"}</div>
            </div>

            <button
                onClick={() => navigate(-1)}
                className="mt-6 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
                Kembali
            </button>
        </div>
    );
};

export default DetailLoyalty;
