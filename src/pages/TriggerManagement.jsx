import React, { useState } from 'react';

// === Dummy Data Pelanggan ===
const dummyCustomers = [
  {
    name: 'Budi',
    email: 'budi@example.com',
    birthday: '1990-06-29', // tanggal hari ini untuk demo
    lastPurchase: '2024-06-01',
    status: 'loyal',
  },
  {
    name: 'Ani',
    email: 'ani@example.com',
    birthday: '1995-07-01',
    lastPurchase: '2024-04-01',
    status: 'inactive',
  },
];

// === Fungsi Simulasi Kirim Email ===
const sendEmail = (to, subject, message) => {
  console.log(`📩 Email ke: ${to}`);
  console.log(`📨 Subjek: ${subject}`);
  console.log(`📝 Pesan: ${message}`);
  alert(`Email otomatis ke ${to} berhasil dikirim!`);
};

const getTodayMMDD = () => new Date().toISOString().slice(5, 10);

const getTargetCustomers = (triggerEvent) => {
  const today = getTodayMMDD();
  switch (triggerEvent) {
    case 'birthday':
      return dummyCustomers.filter((c) => c.birthday?.slice(5, 10) === today);
    case 'purchase-history':
      return dummyCustomers.filter((c) => new Date(c.lastPurchase) > new Date('2024-05-01'));
    case 'inactivity':
      return dummyCustomers.filter((c) => new Date(c.lastPurchase) < new Date('2024-06-01'));
    default:
      return [];
  }
};

// === UI Komponen ===
const TriggerManagement = () => {
  const [triggerEvent, setTriggerEvent] = useState('birthday');
  const [subject, setSubject] = useState('Selamat Ulang Tahun!');
  const [message, setMessage] = useState(
    'Hai pelanggan setia! Nikmati diskon 20% untuk pembelian hari ini. 🎉'
  );
  const [preview, setPreview] = useState(false);
  const [targetCustomers, setTargetCustomers] = useState([]);

  const templateRekomendasi = [
    'Donat Coklat Leleh',
    'Kopi Latte Special',
    'Yogurt Stroberi Segar',
  ];

  const handlePreview = () => {
    const targets = getTargetCustomers(triggerEvent);
    setTargetCustomers(targets);
    setPreview(true);
  };

  const handleSend = () => {
    const targets = getTargetCustomers(triggerEvent);
    targets.forEach((customer) => {
      sendEmail(customer.email, subject, message);
    });
    setTargetCustomers(targets);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#fdf6f1] rounded-xl shadow">
      <h2 className="text-2xl font-bold text-[#4b2e2b] mb-4">Trigger Marketing</h2>

      {/* Trigger Event */}
      <div className="mb-6">
        <label className="text-sm text-[#4b2e2b]">Trigger Event</label>
        <select
          value={triggerEvent}
          onChange={(e) => setTriggerEvent(e.target.value)}
          className="w-full border border-[#d3a170] rounded px-3 py-2"
        >
          <option value="birthday">Ulang Tahun</option>
          <option value="purchase-history">Histori Pembelian</option>
          <option value="inactivity">Tidak Aktif 30 Hari</option>
        </select>
      </div>

      {/* Subject & Message */}
      <div className="mb-4">
        <label className="text-sm text-[#4b2e2b]">Judul Email</label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border border-[#d3a170] rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="text-sm text-[#4b2e2b]">Isi Email</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full border border-[#d3a170] rounded px-3 py-2"
        />
      </div>

      {/* Rekomendasi Produk */}
      <div className="mb-4">
        <label className="text-sm text-[#4b2e2b]">Rekomendasi Produk</label>
        <ul className="list-disc pl-5 text-[#4b2e2b]">
          {templateRekomendasi.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Tombol Aksi */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={handlePreview}
          className="bg-white border border-[#d3a170] text-[#4b2e2b] px-4 py-2 rounded hover:bg-[#f3e5dc]"
        >
          Preview Email
        </button>

        <button
          onClick={handleSend}
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
            <p className="mt-4 text-sm text-[#888]">Produk Rekomendasi:</p>
            <ul className="list-disc pl-5 text-sm">
              {templateRekomendasi.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#888]">Target: {targetCustomers.length} pelanggan</p>
            <ul className="list-disc pl-5 text-sm">
              {targetCustomers.map((c, i) => (
                <li key={i}>{c.name} ({c.email})</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TriggerManagement;
