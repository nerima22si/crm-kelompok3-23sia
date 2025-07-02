import React, { useState } from 'react';
import KasirForm from './KasirForm';

const KasirPage = () => {
    const [orders, setOrders] = useState([]);

    const handleNewOrder = (order) => {
        setOrders((prev) => [...prev, order]);
    };

    return (
        <div className="p-6 bg-[#fff6ec] min-h-screen">
            <KasirForm onSubmitOrder={handleNewOrder} />

            {/* Menampilkan hasil order (opsional) */}
            <div className="mt-10">
                <h2 className="text-lg font-bold text-[#4b2e2b] mb-4">Pesanan Masuk</h2>
                <pre className="bg-white p-4 rounded shadow text-sm">
                    {JSON.stringify(orders, null, 2)}
                </pre>
            </div>
        </div>
    );
};

export default KasirPage;
