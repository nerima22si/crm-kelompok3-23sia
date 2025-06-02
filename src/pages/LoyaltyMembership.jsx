import React, { useState } from "react";

const initialMembers = [
  { id: 1, name: "Budi Santoso", level: "Gold", joinDate: "2023-04-10" },
  { id: 2, name: "Siti Aminah", level: "Regular", joinDate: "2024-02-01" },
  { id: 3, name: "Andi Wijaya", level: "Platinum", joinDate: "2022-11-20" },
  { id: 4, name: "Dewi Lestari", level: "Silver", joinDate: "2023-08-14" },
];

const badgeColors = {
  Regular: "bg-gray-200 text-gray-800",
  Silver: "bg-slate-300 text-slate-800",
  Gold: "bg-yellow-300 text-yellow-900",
  Platinum: "bg-purple-300 text-purple-900",
};

export default function LoyaltyMembership() {
  const [members, setMembers] = useState(initialMembers);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    level: "Regular",
    joinDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOrEditMember = () => {
    if (!formData.name || !formData.level || !formData.joinDate) {
      alert("Semua field wajib diisi!");
      return;
    }

    if (editingId !== null) {
      // Edit mode
      setMembers((prev) =>
        prev.map((m) =>
          m.id === editingId ? { ...m, ...formData, id: editingId } : m
        )
      );
      setEditingId(null);
    } else {
      // Add mode
      const newMember = {
        id: members.length > 0 ? Math.max(...members.map(m => m.id)) + 1 : 1,
        name: formData.name,
        level: formData.level,
        joinDate: formData.joinDate,
      };
      setMembers([...members, newMember]);
    }

    setFormData({ name: "", level: "Regular", joinDate: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus member ini?")) {
      setMembers(members.filter((m) => m.id !== id));
      // Jika sedang edit member yg dihapus, reset form juga
      if (editingId === id) {
        setEditingId(null);
        setShowForm(false);
        setFormData({ name: "", level: "Regular", joinDate: "" });
      }
    }
  };

  const handleEditClick = (member) => {
    setEditingId(member.id);
    setFormData({
      name: member.name,
      level: member.level,
      joinDate: member.joinDate,
    });
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingId(null);
    setShowForm(false);
    setFormData({ name: "", level: "Regular", joinDate: "" });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto mb-10">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">
        Loyalty & Membership Management
      </h2>

      <button
        onClick={() => {
          if (showForm) {
            handleCancel();
          } else {
            setShowForm(true);
          }
        }}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        {showForm ? "Batal" : "Tambah Member"}
      </button>

      {showForm && (
        <div className="mb-6 p-4 border border-gray-300 rounded shadow-sm bg-white">
          <div className="mb-2">
            <label className="block font-medium mb-1">Nama Member</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Masukkan nama member"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="mb-2">
            <label className="block font-medium mb-1">Level Membership</label>
            <select
              name="level"
              value={formData.level}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="Regular">Regular</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Tanggal Bergabung</label>
            <input
              type="date"
              name="joinDate"
              value={formData.joinDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            onClick={handleAddOrEditMember}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            {editingId !== null ? "Update" : "Simpan"}
          </button>
        </div>
      )}

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Nama
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Tanggal Bergabung
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {member.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${badgeColors[member.level]}`}
                  >
                    {member.level}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {member.joinDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center space-x-3">
                  <button
                    onClick={() => handleEditClick(member)}
                    className="text-indigo-600 hover:text-indigo-900 font-semibold"
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 font-semibold"
                    onClick={() => handleDelete(member.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {members.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-4 text-gray-500"
                >
                  Tidak ada data member
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
