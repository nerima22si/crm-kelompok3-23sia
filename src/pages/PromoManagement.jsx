import React, { useEffect, useState } from 'react';
import { supabase } from './supabase';

const PromoManagement = () => {
    const [promos, setPromos] = useState([]);
    const [title, setTitle] = useState('');
    const [validUntil, setValidUntil] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [claims, setClaims] = useState([]);
    const [selectedPromo, setSelectedPromo] = useState(null);

    const fetchPromos = async () => {
        const { data, error } = await supabase
            .from('promos')
            .select('*')
            .order('valid_until', { ascending: true });

        if (!error) setPromos(data);
    };

    const fetchClaims = async (promoId) => {
        const { data, error } = await supabase
            .from('promo_claims')
            .select('*')
            .eq('promo_id', promoId)
            .order('claimed_at', { ascending: false });

        if (!error) {
            setClaims(data);
            setSelectedPromo(promoId);
        }
    };

    useEffect(() => {
        fetchPromos();
    }, []);

    const handleAddPromo = async (e) => {
        e.preventDefault();

        const { error } = await supabase.from('promos').insert([
            { title, valid_until: validUntil }
        ]);

        if (!error) {
            alert('✅ Promo berhasil ditambahkan!');
            setTitle('');
            setValidUntil('');
            setShowForm(false);
            fetchPromos();
        } else {
            alert('❌ Gagal: ' + error.message);
        }
    };

    const handleSendPromo = (promo) => {
        alert(`📢 Promo "${promo.title}" telah dikirim ke pelanggan!`);
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
                            placeholder="Contoh: Diskon 10%"
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
                            <td className="p-2">{promo.valid_until}</td>
                            <td className="p-2 text-center space-x-2">
                                <button
                                    onClick={() => handleSendPromo(promo)}
                                    className="bg-[#4b2e2b] text-white px-3 py-1 rounded hover:bg-[#a35f2a]"
                                >
                                    Kirim
                                </button>
                                <button
                                    onClick={() => fetchClaims(promo.id)}
                                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800"
                                >
                                    Lihat Klaim
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Jika ada klaim ditampilkan */}
            {selectedPromo && (
                <div className="mt-6 bg-white p-4 rounded shadow border">
                    <h4 className="text-lg font-bold text-[#4b2e2b] mb-2">
                        Klaim untuk Promo ID #{selectedPromo}
                    </h4>
                    {claims.length === 0 ? (
                        <p className="text-gray-500 italic">Belum ada yang klaim.</p>
                    ) : (
                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                            {claims.map((c) => (
                                <li key={c.id}>
                                    {c.user_email} - <span className="text-xs text-gray-500">{new Date(c.claimed_at).toLocaleString()}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default PromoManagement;
