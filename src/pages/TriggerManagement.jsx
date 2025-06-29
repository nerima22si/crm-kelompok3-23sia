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

// === Fungsi Trigger Otomatis Berdasarkan Ulang Tahun ===
const checkBirthdayTriggers = () => {
  const today = new Date().toISOString().slice(5, 10); // "MM-DD"
  const triggered = dummyCustomers.filter(c => c.birthday?.slice(5, 10) === today);

  triggered.forEach(customer => {
    const subject = "🎉 Selamat Ulang Tahun!";
    const message = `Hai ${customer.name}, nikmati diskon 20% hari ini khusus ulang tahunmu! 🎁`;
    sendEmail(customer.email, subject, message);
  });

  return triggered.length;
};

// === UI Komponen ===
const TriggerManagement = () => {
  const [customerEmail, setCustomerEmail] = useState('');
  const [triggerEvent, setTriggerEvent] = useState('');
  const [subject, setSubject] = useState('Selamat Ulang Tahun!');
  const [message, setMessage] = useState(
    'Hai pelanggan setia! Nikmati diskon 20% untuk pembelian hari ini. 🎉'
  );
  const [preview, setPreview] = useState(false);

  const templateRekomendasi = [
    'Donat Coklat Leleh',
    'Kopi Latte Special',
    'Yogurt Stroberi Segar',
  ];

  const handlePreview = () => setPreview(true);
  const handleSend = () => alert('Email dikirim! (simulasi)');

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#fdf6f1] rounded-xl shadow">
      <h2 className="text-2xl font-bold text-[#4b2e2b] mb-4">Trigger Marketing</h2>

      {/* Form Input */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm text-[#4b2e2b]">Email Pelanggan</label>
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            className="w-full border border-[#d3a170] rounded px-3 py-2"
            placeholder="contoh@email.com"
          />
        </div>

        <div>
          <label className="text-sm text-[#4b2e2b]">Trigger Event</label>
          <select
            value={triggerEvent}
            onChange={(e) => setTriggerEvent(e.target.value)}
            className="w-full border border-[#d3a170] rounded px-3 py-2"
          >
            <option value="">Pilih Event</option>
            <option value="birthday">Ulang Tahun</option>
            <option value="purchase-history">Histori Pembelian</option>
            <option value="inactivity">Tidak Aktif 30 Hari</option>
          </select>
        </div>
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
          Kirim Manual
        </button>

        <button
          onClick={() => {
            const total = checkBirthdayTriggers();
            alert(`Sistem otomatis mengirim ${total} email ulang tahun.`);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Jalankan Trigger Otomatis
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
          </div>
        </div>
      )}
    </div>
  );
};

export default TriggerManagement;
