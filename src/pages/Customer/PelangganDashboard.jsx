import React from 'react';

const user = {
    name: 'Nida Mufidah',
    membership: 'Platinum',
    transactions: 22,
    lastOrderStatus: 'Selesai',
    activePromo: 'Gratis Donat Spesial di Hari Jumat!',
    lastComplaint: 'Belum ditanggapi',
    badgeColor: 'bg-purple-100 text-purple-800'
};

const PelangganDashboard = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">👋 Hai, {user.name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Membership Card */}
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-5 rounded-xl shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-600">Level Membership</p>
                        <h2 className={`text-lg font-bold ${user.badgeColor}`}>{user.membership}</h2>
                    </div>
                    <span className="text-5xl">🎖️</span>
                </div>

                {/* Total Transaksi */}
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-5 rounded-xl shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-600">Total Transaksi</p>
                        <h2 className="text-lg font-bold text-yellow-700">{user.transactions}x</h2>
                    </div>
                    <span className="text-5xl">💰</span>
                </div>

                {/* Promo Aktif */}
                <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-5 rounded-xl shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-600">Promo Aktif</p>
                        <h2 className="text-md text-pink-700 font-semibold">{user.activePromo}</h2>
                    </div>
                    <span className="text-5xl">🎉</span>
                </div>

                {/* Komplain Terakhir */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-600">Komplain Terakhir</p>
                        <h2 className="text-md text-blue-700 font-semibold">{user.lastComplaint}</h2>
                    </div>
                    <span className="text-5xl">📩</span>
                </div>

                {/* Status Order Terakhir */}
                <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-xl shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-gray-600">Status Order Terakhir</p>
                        <h2 className="text-lg font-bold text-green-700">{user.lastOrderStatus}</h2>
                    </div>
                    <span className="text-5xl">🚚</span>
                </div>
            </div>
        </div>
    );
};

export default PelangganDashboard;
