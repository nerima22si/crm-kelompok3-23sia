import React, { useState } from "react";

const CampaignManagement = () => {
  const [campaign, setCampaign] = useState({
    name: "",
    start: "",
    end: "",
    target: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Campaign Submitted:", campaign);
    alert("Kampanye berhasil disimpan!");
    // reset form
    setCampaign({ name: "", start: "", end: "", target: "" });
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] p-6 text-[#5c3a1c]">
      <h1 className="text-3xl font-bold mb-6 border-b border-[#e0cfc0] pb-2">
        📢 Campaign Management
      </h1>

      <div className="bg-white max-w-2xl mx-auto p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">📋 Form Kampanye Promosi</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Nama Kampanye</label>
            <input
              type="text"
              name="name"
              value={campaign.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#e0cfc0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
              placeholder="Contoh: Promo Lebaran Ceria"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Waktu Mulai</label>
              <input
                type="date"
                name="start"
                value={campaign.start}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#e0cfc0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Waktu Selesai</label>
              <input
                type="date"
                name="end"
                value={campaign.end}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#e0cfc0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Target / Tujuan</label>
            <textarea
              name="target"
              value={campaign.target}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-[#e0cfc0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
              placeholder="Contoh: Pelanggan member aktif, umur 20-35 tahun, area Jabodetabek"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#f4a261] hover:bg-[#e76f51] text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Simpan Kampanye
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignManagement;
