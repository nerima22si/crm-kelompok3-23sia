import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TambahKontakForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        status: "Prospek",
        tags: "",
        notes: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data disimpan:", formData);
        alert("Kontak baru berhasil disimpan!");
        navigate("/marketing"); // Kembali ke halaman marketing
      
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-semibold mb-4">Form Tambah Kontak</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Nama"
                    required
                    className="w-full border p-2 rounded"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full border p-2 rounded"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="No HP"
                    className="w-full border p-2 rounded"
                    value={formData.phone}
                    onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                    }
                />
                <select
                    className="w-full border p-2 rounded"
                    value={formData.status}
                    onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                    }
                >
                    <option value="Prospek">Prospek</option>
                    <option value="Pelanggan">Pelanggan</option>
                </select>
                <input
                    type="text"
                    placeholder="Tags (pisahkan dengan koma)"
                    className="w-full border p-2 rounded"
                    value={formData.tags}
                    onChange={(e) =>
                        setFormData({ ...formData, tags: e.target.value })
                    }
                />
                <textarea
                    placeholder="Catatan"
                    className="w-full border p-2 rounded"
                    value={formData.notes}
                    onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                    }
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Simpan
                </button>
            </form>
        </div>
    );
};

export default TambahKontakForm;
