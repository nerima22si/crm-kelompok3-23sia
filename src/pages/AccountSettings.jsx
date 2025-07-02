import React, { useState } from "react";
import { Pencil, Lock, Mail, Phone, User } from "lucide-react";

const AccountSettings = () => {
    const [formData, setFormData] = useState({
        name: "Andi Susanto",
        email: "andi@email.com",
        phone: "08123456789",
        password: "",
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Perubahan berhasil disimpan!");
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Pengaturan Akun</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nama */}
                <div className="relative">
                    <label className="block text-sm text-gray-600 mb-1">Nama Lengkap</label>
                    <div className="flex items-center border rounded-lg px-4 py-2">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <input
                            type="text"
                            className="w-full outline-none text-sm"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">Email</label>
                    <div className="flex items-center border rounded-lg px-4 py-2">
                        <Mail className="w-4 h-4 text-gray-400 mr-2" />
                        <input
                            type="email"
                            className="w-full outline-none text-sm"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />
                    </div>
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">No. HP</label>
                    <div className="flex items-center border rounded-lg px-4 py-2">
                        <Phone className="w-4 h-4 text-gray-400 mr-2" />
                        <input
                            type="text"
                            className="w-full outline-none text-sm"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                        />
                    </div>
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">Kata Sandi Baru</label>
                    <div className="flex items-center border rounded-lg px-4 py-2">
                        <Lock className="w-4 h-4 text-gray-400 mr-2" />
                        <input
                            type="password"
                            className="w-full outline-none text-sm"
                            value={formData.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                            placeholder="Masukkan jika ingin mengubah"
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="bg-[#f5a623] hover:bg-[#f29e10] text-white font-semibold px-6 py-2 rounded-full shadow-sm transition-all"
                    >
                        Simpan Perubahan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AccountSettings;
