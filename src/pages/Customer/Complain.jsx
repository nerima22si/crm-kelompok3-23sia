import { useEffect, useState } from "react";
import { supabase } from "../supabase";
const Complain = () => {
    const [feedback, setFeedback] = useState({ customer: "", email: "", message: "" });
    const [faqs, setFaqs] = useState([]);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchFAQ();

        // Jika user sudah isi nama/email sebelumnya, ambil feedback-nya
        const savedEmail = localStorage.getItem("userEmail");
        const savedName = localStorage.getItem("userName");
        if (savedEmail && savedName) {
            fetchHistory(savedName, savedEmail);
        }
    }, []);

    const fetchFAQ = async () => {
        const { data } = await supabase.from("faq").select("*").order("created_at", { ascending: false });
        setFaqs(data || []);
    };

    const fetchHistory = async (name, email) => {
        const { data } = await supabase
            .from("feedback")
            .select("*")
            .eq("customer", name)
            .eq("email", email)
            .order("created_at", { ascending: false });
        setHistory(data || []);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!feedback.customer || !feedback.message) return alert("Nama dan pesan wajib diisi.");

        const { error } = await supabase.from("feedback").insert([feedback]);

        if (!error) {
            alert("✅ Komplain berhasil dikirim.");
            localStorage.setItem("userEmail", feedback.email);
            localStorage.setItem("userName", feedback.customer);
            setFeedback({ customer: "", email: "", message: "" });
            fetchHistory(feedback.customer, feedback.email);
        } else {
            alert("❌ Gagal mengirim: " + error.message);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-[#4b2e2b] mb-4 text-center">Form Komplain & Bantuan</h2>

            {/* FORM KOMPLAIN */}
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
                <input
                    type="text"
                    placeholder="Nama"
                    className="w-full mb-3 border p-2 rounded"
                    value={feedback.customer}
                    onChange={(e) => setFeedback({ ...feedback, customer: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email (opsional)"
                    className="w-full mb-3 border p-2 rounded"
                    value={feedback.email}
                    onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
                />
                <textarea
                    placeholder="Tulis keluhan atau pertanyaan"
                    className="w-full border p-2 rounded mb-3"
                    rows={4}
                    value={feedback.message}
                    onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                    required
                />
                <button className="bg-[#a35f2a] hover:bg-[#81421b] text-white px-4 py-2 rounded" type="submit">
                    Kirim
                </button>
            </form>

            {/* RIWAYAT KOMPLAIN */}
            {history.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#4b2e2b] mb-3">Riwayat Komplain Anda</h3>
                    <ul className="space-y-4">
                        {history.map((fb) => (
                            <li key={fb.id} className="bg-[#fdf8f2] border border-orange-100 p-4 rounded shadow-sm">
                                <p className="text-sm text-gray-800">
                                    <strong>Pesan:</strong> {fb.message}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    <strong>Status:</strong>{" "}
                                    {fb.status === "Selesai" ? (
                                        <span className="text-green-600">Selesai</span>
                                    ) : (
                                        <span className="text-yellow-700">Belum Selesai</span>
                                    )}
                                </p>
                                {fb.reply && (
                                    <div className="mt-2 bg-green-50 p-3 rounded text-sm text-green-800">
                                        <strong>Balasan Admin:</strong> {fb.reply}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* FAQ */}
            <div>
                <h3 className="text-xl font-semibold text-[#4b2e2b] mb-2">Pertanyaan Umum (FAQ)</h3>
                {faqs.length === 0 ? (
                    <p className="text-sm text-gray-500">Belum ada FAQ.</p>
                ) : (
                    <ul className="space-y-3">
                        {faqs.map((faq) => (
                            <li key={faq.id} className="bg-[#fffaf5] border p-4 rounded shadow-sm">
                                <p><strong>Q:</strong> {faq.question}</p>
                                <p className="text-gray-600 mt-1"><strong>A:</strong> {faq.answer}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Complain;
