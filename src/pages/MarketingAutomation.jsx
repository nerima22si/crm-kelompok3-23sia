import React, { useEffect, useState } from "react";

const MarketingAutomation = () => {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "Andi Susanto",
            email: "andi@email.com",
            phone: "08123456789",
            status: "Prospek",
            lastContacted: "2025-06-25",
            tags: ["Tertarik", "Email Campaign"],
            notes: "Ingin informasi produk A",
        },
        {
            id: 2,
            name: "Sari Utami",
            email: "sari@email.com",
            phone: "08223456789",
            status: "Pelanggan",
            lastContacted: "2025-06-30",
            tags: ["Loyal"],
            notes: "Telah membeli produk B",
        },
    ]);

    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        status: "Prospek",
        tags: "",
        notes: "",
    });

    const [showForm, setShowForm] = useState(false);
    const [filterStatus, setFilterStatus] = useState("Semua");

    const sendFollowUpEmail = (contact) => {
        alert(`✅ Email follow-up dikirim ke ${contact.email}`);
        console.log(`Mengirim email follow-up ke ${contact.email}`);
    };

    useEffect(() => {
        const now = new Date();
        contacts.forEach((contact) => {
            const last = new Date(contact.lastContacted);
            const days = (now - last) / (1000 * 60 * 60 * 24);
            if (contact.status === "Prospek" && days > 7) {
                sendFollowUpEmail(contact);
            }
        });
    }, [contacts]);

    const handleAddContact = (e) => {
        e.preventDefault();
        const today = new Date().toISOString().slice(0, 10);
        const newEntry = {
            ...newContact,
            id: contacts.length + 1,
            lastContacted: today,
            tags: newContact.tags.split(",").map((tag) => tag.trim()),
        };
        setContacts([...contacts, newEntry]);
        setNewContact({
            name: "",
            email: "",
            phone: "",
            status: "Prospek",
            tags: "",
            notes: "",
        });
        setShowForm(false);
    };

    const filteredContacts =
        filterStatus === "Semua"
            ? contacts
            : contacts.filter((c) => c.status === filterStatus);

    return (
        <div className="min-h-screen bg-[#fafafa] py-10 px-6">
            <h2 className="text-4xl font-bold text-center text-[#4b2e2b] mb-8">
                CRM Marketing Automation
            </h2>

            {/* Tombol Tampilkan Form */}
            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-[#e3b062] hover:bg-[#dba14e] text-white font-semibold px-6 py-2 rounded-full shadow transition"
                >
                    Tambah Kontak Baru
                </button>
            </div>

            {/* Form Tambah Kontak */}
            {showForm && (
                <div className="bg-white rounded-lg shadow p-6 mb-8 max-w-3xl mx-auto">
                    <h3 className="text-xl font-semibold mb-4 text-[#6b3e26]">
                        Tambah Kontak
                    </h3>
                    <form
                        onSubmit={handleAddContact}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        <input
                            className="p-2 border border-gray-300 rounded"
                            type="text"
                            placeholder="Nama"
                            value={newContact.name}
                            onChange={(e) =>
                                setNewContact({ ...newContact, name: e.target.value })
                            }
                            required
                        />
                        <input
                            className="p-2 border border-gray-300 rounded"
                            type="email"
                            placeholder="Email"
                            value={newContact.email}
                            onChange={(e) =>
                                setNewContact({ ...newContact, email: e.target.value })
                            }
                            required
                        />
                        <input
                            className="p-2 border border-gray-300 rounded"
                            type="text"
                            placeholder="No HP"
                            value={newContact.phone}
                            onChange={(e) =>
                                setNewContact({ ...newContact, phone: e.target.value })
                            }
                            required
                        />
                        <select
                            className="p-2 border border-gray-300 rounded"
                            value={newContact.status}
                            onChange={(e) =>
                                setNewContact({ ...newContact, status: e.target.value })
                            }
                        >
                            <option value="Prospek">Prospek</option>
                            <option value="Pelanggan">Pelanggan</option>
                        </select>
                        <input
                            className="p-2 border border-gray-300 rounded col-span-2"
                            type="text"
                            placeholder="Tags (pisahkan dengan koma)"
                            value={newContact.tags}
                            onChange={(e) =>
                                setNewContact({ ...newContact, tags: e.target.value })
                            }
                        />
                        <textarea
                            className="p-2 border border-gray-300 rounded col-span-2"
                            placeholder="Catatan"
                            value={newContact.notes}
                            onChange={(e) =>
                                setNewContact({ ...newContact, notes: e.target.value })
                            }
                        />
                        <button
                            type="submit"
                            className="bg-[#4b2e2b] text-white font-semibold p-2 rounded col-span-2 hover:bg-[#3b231f]"
                        >
                            Simpan Kontak
                        </button>
                    </form>
                </div>
            )}

            {/* Ringkasan Dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                    <h4 className="text-gray-700 text-lg">Total Kontak</h4>
                    <p className="text-2xl font-bold text-blue-600">{contacts.length}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                    <h4 className="text-gray-700 text-lg">Prospek</h4>
                    <p className="text-2xl font-bold text-yellow-600">
                        {contacts.filter((c) => c.status === "Prospek").length}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                    <h4 className="text-gray-700 text-lg">Pelanggan Aktif</h4>
                    <p className="text-2xl font-bold text-green-600">
                        {contacts.filter((c) => c.status === "Pelanggan").length}
                    </p>
                </div>
            </div>

            {/* Filter Dropdown */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-[#6b3e26]">Daftar Kontak</h3>
                <select
                    className="border border-gray-300 rounded p-2"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="Semua">Semua</option>
                    <option value="Prospek">Prospek</option>
                    <option value="Pelanggan">Pelanggan</option>
                </select>
            </div>

            {/* Tabel Kontak */}
            <div className="bg-white rounded-lg shadow p-6">
                <table className="w-full text-sm">
                    <thead className="bg-[#f9f3ed]">
                        <tr>
                            <th className="p-3 text-left">Nama</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Terakhir Dihubungi</th>
                            <th className="p-3 text-left">Catatan</th>
                            <th className="p-3 text-left">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredContacts.map((c) => (
                            <tr key={c.id} className="border-t hover:bg-[#f5f5f5]">
                                <td className="p-3">{c.name}</td>
                                <td className="p-3">{c.email}</td>
                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${c.status === "Pelanggan"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-800"
                                            }`}
                                    >
                                        {c.status}
                                    </span>
                                </td>
                                <td className="p-3">{c.lastContacted}</td>
                                <td className="p-3">{c.notes}</td>
                                <td className="p-3">
                                    <button
                                        onClick={() => sendFollowUpEmail(c)}
                                        className="bg-blue-500 text-white px-3 py-1 text-xs rounded hover:bg-blue-600"
                                    >
                                        Follow Up
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MarketingAutomation;
