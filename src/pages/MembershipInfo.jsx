import React, { useState } from "react";
import { FaStar, FaUserEdit, FaTrashAlt, FaPlus } from "react-icons/fa";

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

export default function MembershipInfo() {
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
      setMembers((prev) =>
        prev.map((m) =>
          m.id === editingId ? { ...m, ...formData, id: editingId } : m
        )
      );
      setEditingId(null);
    } else {
      const newId = members.length > 0 ? Math.max(...members.map((m) => m.id)) + 1 : 1;
      const newMember = { id: newId, ...formData };
      setMembers([...members, newMember]);
    }

    setFormData({ name: "", level: "Regular", joinDate: "" });
    setShowForm(false);
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

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus member ini?")) {
      setMembers(members.filter((m) => m.id !== id));
      if (editingId === id) {
        setShowForm(false);
        setEditingId(null);
        setFormData({ name: "", level: "Regular", joinDate: "" });
      }
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ name: "", level: "Regular", joinDate: "" });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
        <FaStar /> Membership Info
      </h1>

      <button
        onClick={() => (showForm ? handleCancel() : setShowForm(true))}
        className="flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        <FaPlus />
        {showForm ? "Batal" : "Tambah Member"}
      </button>

      {showForm && (
        <div className="bg-white shadow rounded p-4 mb-6 border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold mb-1">Nama Member</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Masukkan nama"
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400"
              >
                <option value="Regular">Regular</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Tanggal Bergabung</label>
              <input
                type="date"
                name="joinDate"
                value={formData.joinDate}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          <button
            onClick={handleAddOrEditMember}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            {editingId !== null ? "Update" : "Simpan"}
          </button>
        </div>
      )}

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-6 py-3">Nama</th>
              <th className="px-6 py-3">Level</th>
              <th className="px-6 py-3">Tanggal Bergabung</th>
              <th className="px-6 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{member.name}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[member.level]}`}>
                    {member.level}
                  </span>
                </td>
                <td className="px-6 py-4">{member.joinDate}</td>
                <td className="px-6 py-4 text-center space-x-3">
                  <button
                    onClick={() => handleEditClick(member)}
                    className="text-indigo-600 hover:text-indigo-900"
                    title="Edit"
                  >
                    <FaUserEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Hapus"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
            {members.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
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
