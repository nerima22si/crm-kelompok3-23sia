import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CampaignManagement = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Promo Akhir Tahun',
      type: 'Diskon 25%',
      start: '2025-11-01',
      end: '2025-12-31',
      target: 'Member Loyal',
      status: 'Berjalan',
      ctr: 15.2,
      openRate: 48,
      response: 320,
    },
    {
      id: 2,
      name: 'Kampanye Member Baru',
      type: 'Gratis Ongkir',
      start: '2025-06-01',
      end: '2025-06-15',
      target: 'Member Baru',
      status: 'Selesai',
      ctr: 22.1,
      openRate: 60,
      response: 510,
    },
  ]);

  const [formVisible, setFormVisible] = useState(false);
  const [editing, setEditing] = useState(null);
  const [filter, setFilter] = useState("Semua");

  const [form, setForm] = useState({
    name: '',
    type: '',
    start: '',
    end: '',
    target: '',
  });

  const total = campaigns.length;
  const sukses = campaigns.filter(c => c.status === 'Selesai').length;
  const berjalan = total - sukses;

  const pieData = {
    labels: ['Selesai', 'Berjalan'],
    datasets: [
      {
        data: [sukses, berjalan],
        backgroundColor: ['#4b2e2b', '#d3a170'],
      },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCampaign = {
      id: campaigns.length + 1,
      name: form.name,
      type: form.type,
      start: form.start,
      end: form.end,
      target: form.target,
      status: 'Berjalan',
      ctr: 0,
      openRate: 0,
      response: 0,
    };
    setCampaigns([...campaigns, newCampaign]);
    setForm({ name: '', type: '', start: '', end: '', target: '' });
    setFormVisible(false);
  };

  const handleEdit = (campaign) => {
    setForm({
      name: campaign.name,
      type: campaign.type,
      start: campaign.start,
      end: campaign.end,
      target: campaign.target,
    });
    setEditing(campaign.id);
    setFormVisible(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedCampaigns = campaigns.map(c =>
      c.id === editing
        ? { ...c, ...form }
        : c
    );
    setCampaigns(updatedCampaigns);
    setEditing(null);
    setForm({ name: '', type: '', start: '', end: '', target: '' });
    setFormVisible(false);
  };

  const handleDelete = (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus kampanye?");
    if (confirmDelete) {
      setCampaigns(campaigns.filter(c => c.id !== id));
    }
  };

  return (
    <div className="p-6 bg-[#fdf6f1] rounded-xl shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#4b2e2b]">Campaign Management</h2>
        <button
          onClick={() => {
            setFormVisible(!formVisible);
            if (!formVisible) {
              setEditing(null);
              setForm({ name: '', type: '', start: '', end: '', target: '' });
            }
          }}
          className="bg-[#d3a170] text-white px-4 py-2 rounded hover:bg-[#a35f2a]"
        >
          {formVisible ? 'Tutup Form' : 'Buat Kampanye'}
        </button>
      </div>

      {/* 🔶 Form Kampanye */}
      {formVisible && (
        <div className="bg-white p-4 rounded-lg shadow mb-8">
          <h3 className="text-lg font-semibold text-[#4b2e2b] mb-4">{editing ? 'Edit Kampanye' : 'Buat Kampanye Baru'}</h3>
          <form onSubmit={editing ? handleUpdate : handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Nama Kampanye"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border border-[#d3a170] px-3 py-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Jenis Promo"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="border border-[#d3a170] px-3 py-2 rounded"
              required
            />
            <select
              value={form.target}
              onChange={(e) => setForm({ ...form, target: e.target.value })}
              className="border border-[#d3a170] px-3 py-2 rounded"
              required
            >
              <option value="">Pilih Target Pelanggan</option>
              <option value="Loyal">Loyal</option>
              <option value="Baru">Baru</option>
              <option value="Tidak Aktif">Tidak Aktif</option>
              <option value="Semua Pelanggan">Semua Pelanggan</option>
            </select>
            <input
              type="date"
              value={form.start}
              onChange={(e) => setForm({ ...form, start: e.target.value })}
              className="border border-[#d3a170] px-3 py-2 rounded"
              required
            />
            <input
              type="date"
              value={form.end}
              onChange={(e) => setForm({ ...form, end: e.target.value })}
              className="border border-[#d3a170] px-3 py-2 rounded"
              required
            />
            <button type="submit" className="bg-[#d3a170] text-white py-2 rounded hover:bg-[#a35f2a]">
              {editing ? 'Update Kampanye' : 'Tambah Kampanye'}
            </button>
          </form>
        </div>
      )}

      {/* 🔶 Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow text-center flex flex-col items-center">
          <h3 className="text-[#4b2e2b] font-semibold mb-4 text-base">Statistik Kampanye</h3>
          <div className="w-[200px] sm:w-[250px]">
            <Pie data={pieData} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#fffaf6] p-3 rounded-lg shadow text-center">
            <h4 className="text-xs text-[#a35f2a]">Total Kampanye</h4>
            <p className="text-xl font-bold text-[#4b2e2b]">{total}</p>
          </div>
          <div className="bg-[#e6f4ea] p-3 rounded-lg shadow text-center">
            <h4 className="text-xs text-green-600">Selesai</h4>
            <p className="text-xl font-bold text-green-800">{sukses}</p>
          </div>
          <div className="bg-[#fff7e6] p-3 rounded-lg shadow text-center">
            <h4 className="text-xs text-yellow-700">Berjalan</h4>
            <p className="text-xl font-bold text-yellow-800">{berjalan}</p>
          </div>
        </div>
      </div>

      {/* 🔶 Filter & Tabel */}
      <div className="mb-4 flex justify-end">
        <select
          className="px-3 py-1 border border-[#d3a170] rounded text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="Semua">Semua</option>
          <option value="Berjalan">Berjalan</option>
          <option value="Selesai">Selesai</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-[#f3e5dc] text-[#4b2e2b]">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Jenis</th>
              <th className="p-3 text-left">Durasi</th>
              <th className="p-3 text-left">Target</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">CTR</th>
              <th className="p-3 text-left">Open Rate</th>
              <th className="p-3 text-left">Respons</th>
              <th className="p-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {campaigns
              .filter(c => filter === "Semua" || c.status === filter)
              .map(c => (
                <tr key={c.id} className="border-t hover:bg-[#fff8f4] text-[#4b2e2b]">
                  <td className="p-2">{c.id}</td>
                  <td className="p-2">{c.name}</td>
                  <td className="p-2">{c.type}</td>
                  <td className="p-2">{c.start} – {c.end}</td>
                  <td className="p-2">{c.target}</td>
                  <td className="p-2">{c.status}</td>
                  <td className="p-2">{c.ctr}%</td>
                  <td className="p-2">{c.openRate}%</td>
                  <td className="p-2">{c.response}</td>
                  <td className="p-2 flex gap-2">
                    <button onClick={() => handleEdit(c)} className="text-blue-600 hover:underline text-sm">✏️</button>
                    <button onClick={() => handleDelete(c.id)} className="text-red-600 hover:underline text-sm">🗑️</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignManagement;
