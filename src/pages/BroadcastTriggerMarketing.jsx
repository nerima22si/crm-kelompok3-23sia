import React, { useState } from 'react';

// Simulasi data member
const members = [
    { id: 1, name: 'Ayu', email: 'ayu@email.com', birthdate: '1998-06-29', membership: 'Gold' },
    { id: 2, name: 'Budi', email: 'budi@email.com', birthdate: '2000-06-29', membership: 'Silver' },
    { id: 3, name: 'Citra', email: 'citra@email.com', birthdate: '1997-10-12', membership: 'Non-member' },
];

const today = new Date().toISOString().slice(5, 10); // "MM-DD"

const BroadcastTriggerMarketing = () => {
    const [filterBy, setFilterBy] = useState('birthday');
    const [membershipLevel, setMembershipLevel] = useState('');
    const [subject, setSubject] = useState('Promo Spesial Untukmu!');
    const [message, setMessage] = useState('Selamat! Kamu mendapatkan diskon 20% 🎉');
    const [preview, setPreview] = useState(false);

    const getFilteredRecipients = () => {
        if (filterBy === 'birthday') {
            return members.filter((m) => m.birthdate.slice(5, 10) === today);
        }
        if (filterBy === 'membership') {
            return members.filter((m) => m.membership === membershipLevel);
        }
        return [];
    };

    const recipients = getFilteredRecipients();

    return (
        <div className="max-w-3xl mx-auto p-6 bg-[#fdf6f1] rounded-xl shadow">
            <h2 className="text-2xl font-bold text-[#4b2e2b] mb-4">Broadcast Berdasarkan Event</h2>

            {/* Filter */}
            <div className="mb-4">
                <label className="text-sm text-[#4b2e2b]">Filter Kirim</label>
                <select
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value)}
                    className="w-full border border-[#d3a170] rounded px-3 py-2"
                >
                    <option value="birthday">Hari Ulang Tahun</option>
                    <option value="membership">Status Membership</option>
                </select>
            </div>

            {filterBy === 'membership' && (
                <div className="mb-4">
                    <label className="text-sm text-[#4b2e2b]">Pilih Level Membership</label>
                    <select
                        value={membershipLevel}
                        onChange={(e) => setMembershipLevel(e.target.value)}
                        className="w-full border border-[#d3a170] rounded px-3 py-2"
                    >
                        <option value="">Pilih Membership</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                        <option value="Non-member">Non-member</option>
                    </select>
                </div>
            )}

            {/* Form Email */}
            <div className="mb-4">
                <label className="text-sm text-[#4b2e2b]">Subjek Email</label>
                <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border border-[#d3a170] rounded px-3 py-2"
                />
            </div>
            <div className="mb-4">
                <label className="text-sm text-[#4b2e2b]">Isi Pesan</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full border border-[#d3a170] rounded px-3 py-2"
                />
            </div>

            {/* Target Preview */}
            <div className="mb-6">
                <h3 className="text-[#4b2e2b] font-semibold mb-2">Target Pelanggan:</h3>
                {recipients.length === 0 ? (
                    <p className="text-sm text-gray-500">Tidak ada pelanggan sesuai filter.</p>
                ) : (
                    <ul className="list-disc pl-5 text-sm text-[#4b2e2b]">
                        {recipients.map((r) => (
                            <li key={r.id}>{r.name} ({r.email})</li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Button Action */}
            <div className="flex gap-4">
                <button
                    onClick={() => setPreview(true)}
                    className="bg-white border border-[#d3a170] text-[#4b2e2b] px-4 py-2 rounded hover:bg-[#f3e5dc]"
                >
                    Preview Email
                </button>
                <button
                    onClick={() => alert('Broadcast dikirim ke ' + recipients.length + ' pelanggan!')}
                    className="bg-[#d3a170] text-white px-4 py-2 rounded hover:bg-[#a35f2a]"
                >
                    Kirim Sekarang
                </button>
            </div>

            {/* Preview */}
            {preview && (
                <div className="mt-6 border-t pt-4">
                    <h3 className="text-lg font-semibold text-[#4b2e2b] mb-2">Preview Email</h3>
                    <div className="bg-white border border-[#d3a170] p-4 rounded shadow">
                        <strong>{subject}</strong>
                        <p className="mt-2">{message}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BroadcastTriggerMarketing;
