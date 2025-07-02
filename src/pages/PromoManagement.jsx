import React, { useState } from 'react';

const initialPromos = [
    { id: 1, title: 'Diskon 10% untuk Member Gold', validUntil: '2025-06-30' },
    { id: 2, title: 'Beli 2 Gratis 1 Donat', validUntil: '2025-07-15' },
];

const PromoManagement = () => {
    const [promos, setPromos] = useState(initialPromos);
    const [title, setTitle] = useState('');
    const [validUntil, setValidUntil] = useState('');
    const [showForm, setShowForm] = useState(false); // ✅ Tambah state

    const handleAddPromo = (e) => {
        e.preventDefault();
        const newPromo = {
            id: promos.length + 1,
            title,
            validUntil,
        };
        setPromos([...promos, newPromo]);
        setTitle('');
        setValidUntil('');
        setShowForm(false); // ✅ Sembunyikan form setelah submit
    };

    const handleSendPromo = (promo) => {
        alert(`Promo "${promo.title}" telah dikirim ke pelanggan!`);
    };

    return (
        <div className="bg-[#fdf6f1] p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-[#4b2e2b]">Promo Management</h2>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-[#d3a170] text-white px-4 py-2 rounded hover:bg-[#a35f2a]"
                >
                    {showForm ? 'Tutup Form' : 'Buat Promo'}
                </button>
            </div>

            {/* FORM TAMBAH PROMO */}
            {showForm && (
                <form
                    onSubmit={handleAddPromo}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-white p-4 rounded shadow"
                >
                    <div>
                        <label className="text-sm text-[#4b2e2b]">Judul Promo</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-[#d3a170] rounded px-3 py-2"
                            required
                            placeholder="Contoh: Diskon 10% Member Gold"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-[#4b2e2b]">Berlaku Sampai</label>
                        <input
                            type="date"
                            value={validUntil}
                            onChange={(e) => setValidUntil(e.target.value)}
                            className="w-full border border-[#d3a170] rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="bg-[#d3a170] text-white px-4 py-2 rounded hover:bg-[#a35f2a] w-full"
                        >
                            Tambah Promo
                        </button>
                    </div>
                </form>
            )}

            {/* TABEL PROMO */}
            <h3 className="text-lg font-semibold text-[#4b2e2b] mb-2">Daftar Promo Aktif</h3>
            <table className="min-w-full text-sm bg-white shadow rounded overflow-hidden">
                <thead className="bg-[#f3e5dc] text-[#4b2e2b]">
                    <tr>
                        <th className="p-2 text-left">Judul Promo</th>
                        <th className="p-2 text-left">Berlaku Sampai</th>
                        <th className="p-2 text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody className="text-[#4b2e2b]">
                    {promos.map((promo) => (
                        <tr key={promo.id} className="border-t hover:bg-[#fff8f4]">
                            <td className="p-2">{promo.title}</td>
                            <td className="p-2">{promo.validUntil}</td>
                            <td className="p-2 text-center">
                                <button
                                    onClick={() => handleSendPromo(promo)}
                                    className="bg-[#4b2e2b] text-white px-3 py-1 rounded hover:bg-[#a35f2a]"
                                >
                                    Kirim Sekarang
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PromoManagement;
