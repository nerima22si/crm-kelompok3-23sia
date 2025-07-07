import { useState } from "react";
import { supabase } from "./supabase";
import jcoLogo from "../assets/jco.logo.png";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return alert("❌ Password tidak cocok.");
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            return alert("❌ Gagal registrasi: " + error.message);
        }

        const user = data?.user;
        if (user) {
            const { error: profileError } = await supabase.from("profiles").insert([
                {
                    id: user.id,
                    full_name: fullName,
                },
            ]);

            if (profileError) {
                alert("❌ Gagal menyimpan profil: " + profileError.message);
            } else {
                alert("✅ Akun berhasil dibuat. Silakan cek email untuk verifikasi.");
                navigate("/");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#faf7f3] px-4">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8">
                <div className="flex flex-col items-center mb-6">
                    <img src={jcoLogo} alt="JCO Logo" className="w-16 h-16 mb-2" />
                    <h2 className="text-2xl font-bold text-[#6b3e26] text-center">
                        Create Your Account to be Member ✨
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Please fill in the form to continue
                    </p>
                </div>

                <form className="space-y-4" onSubmit={handleRegister}>
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="********"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="********"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#d2691e] hover:bg-[#a24f16] text-white font-semibold py-2 rounded-lg transition duration-300"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-xs text-gray-400 mt-6">
                    Already have an account?{" "}
                    <a href="/" className="text-orange-700 hover:underline">Login</a>
                </p>

                <p className="text-center text-xs text-gray-400 mt-2">
                    © 2025 JCO CRM. All rights reserved.
                </p>
            </div>
        </div>
    );
}
