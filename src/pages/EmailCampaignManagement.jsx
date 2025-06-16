import React, { useState } from "react";

const EmailCampaignManagement = () => {
  const [form, setForm] = useState({
    title: "",
    subject: "",
    content: "",
    target: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    console.log("Sending Email Campaign:", form);
    alert("📨 Email promosi berhasil dikirim!");
    setForm({ title: "", subject: "", content: "", target: "" });
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] p-6 text-[#5c3a1c]">
      <h1 className="text-3xl font-bold mb-6 border-b border-[#e0cfc0] pb-2">
        📨 Campaign & Email Management
      </h1>

      <div className="bg-white max-w-3xl mx-auto p-6 rounded-xl shadow space-y-6">
        <h2 className="text-xl font-semibold mb-4">✍️ Buat & Kirim Email Promosi</h2>

        <form onSubmit={handleSend} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Judul Kampanye Email</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Contoh: Promo Akhir Tahun"
              className="w-full p-3 border border-[#e0cfc0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Subjek Email</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Contoh: Dapatkan Diskon 50%!"
              className="w-full p-3 border border-[#e0cfc0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Isi Email</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              rows="6"
              required
              placeholder="Tulis pesan email promosi di sini..."
              className="w-full p-3 border border-[#e0cfc0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-medium">Target Penerima</label>
            <input
              type="text"
              name="target"
              value={form.target}
              onChange={handleChange}
              required
              placeholder="Contoh: pelanggan-member, atau semua"
              className="w-full p-3 border border-[#e0cfc0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#f4a261] hover:bg-[#e76f51] text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Kirim Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailCampaignManagement;
