import { useEffect, useState } from "react";
import { supabase } from "./supabase";
const FeedbackFAQAdmin = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [newFAQ, setNewFAQ] = useState({ question: "", answer: "" });
  const [showFAQForm, setShowFAQForm] = useState(false);
  const [replyModal, setReplyModal] = useState({ open: false, id: null, replyText: "" });

  useEffect(() => {
    fetchFeedback();
    fetchFAQ();
  }, []);

  const fetchFeedback = async () => {
    const { data } = await supabase.from("feedback").select("*").order("created_at", { ascending: false });
    setFeedbacks(data || []);
  };

  const fetchFAQ = async () => {
    const { data } = await supabase.from("faq").select("*").order("created_at", { ascending: false });
    setFaqs(data || []);
  };

  const submitReply = async () => {
    await supabase
      .from("feedback")
      .update({ reply: replyModal.replyText, status: "Selesai" })
      .eq("id", replyModal.id);
    setReplyModal({ open: false, id: null, replyText: "" });
    fetchFeedback();
  };

  const handleAddFAQ = async () => {
    if (!newFAQ.question || !newFAQ.answer) return;
    await supabase.from("faq").insert([newFAQ]);
    setNewFAQ({ question: "", answer: "" });
    setShowFAQForm(false);
    fetchFAQ();
  };

  const total = feedbacks.length;
  const selesai = feedbacks.filter((f) => f.status === "Selesai").length;
  const belum = total - selesai;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-3xl font-bold text-[#4b2e2b] mb-6 text-center">Feedback & FAQ Admin</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#f3e7d8] p-4 rounded text-center">
          <h4>Total</h4><p className="text-2xl font-bold">{total}</p>
        </div>
        <div className="bg-green-100 p-4 rounded text-center">
          <h4>Selesai</h4><p className="text-2xl font-bold">{selesai}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded text-center">
          <h4>Belum</h4><p className="text-2xl font-bold">{belum}</p>
        </div>
      </div>

      {/* Table Feedback */}
      <h3 className="text-xl font-semibold text-[#a35f2a] mb-2">Daftar Feedback</h3>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full text-sm bg-white border">
          <thead className="bg-[#f4e8dc]">
            <tr>
              <th className="p-2 text-left">Nama</th>
              <th className="p-2">Email</th>
              <th className="p-2">Pesan</th>
              <th className="p-2">Status</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb) => (
              <tr key={fb.id} className="border-t">
                <td className="p-2">{fb.customer}</td>
                <td className="p-2">{fb.email}</td>
                <td className="p-2">{fb.message}</td>
                <td className="p-2">{fb.status}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => setReplyModal({ open: true, id: fb.id, replyText: fb.reply || "" })}
                    className="bg-[#d3a170] text-white px-3 py-1 rounded"
                  >
                    Balas
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-[#4b2e2b] mb-2">FAQ</h3>
        <ul className="space-y-3">
          {faqs.map((faq) => (
            <li key={faq.id} className="bg-[#f0f8fc] p-4 rounded border border-blue-100">
              <p><strong>Q:</strong> {faq.question}</p>
              <p className="text-sm text-gray-700 mt-1"><strong>A:</strong> {faq.answer}</p>
            </li>
          ))}
        </ul>

        {/* Tambah FAQ */}
        {showFAQForm ? (
          <div className="mt-4 bg-white p-4 border rounded">
            <input
              type="text"
              placeholder="Pertanyaan"
              value={newFAQ.question}
              onChange={(e) => setNewFAQ({ ...newFAQ, question: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <textarea
              placeholder="Jawaban"
              value={newFAQ.answer}
              onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
              className="w-full p-2 border rounded mb-2"
              rows={3}
            />
            <div className="flex gap-2">
              <button onClick={() => setShowFAQForm(false)} className="border px-4 py-1 rounded">Batal</button>
              <button onClick={handleAddFAQ} className="bg-[#36687c] text-white px-4 py-1 rounded">Simpan</button>
            </div>
          </div>
        ) : (
          <button onClick={() => setShowFAQForm(true)} className="bg-[#36687c] text-white px-4 py-2 rounded mt-4">
            Tambah FAQ Baru
          </button>
        )}
      </div>

      {/* Modal Balasan */}
      {replyModal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow w-full max-w-md">
            <h4 className="text-lg font-semibold mb-2">Balas Feedback</h4>
            <textarea
              className="w-full p-2 border rounded"
              value={replyModal.replyText}
              onChange={(e) => setReplyModal({ ...replyModal, replyText: e.target.value })}
              rows={4}
            />
            <div className="flex justify-end gap-2 mt-3">
              <button onClick={() => setReplyModal({ open: false, id: null, replyText: "" })} className="border px-4 py-1 rounded">
                Batal
              </button>
              <button onClick={submitReply} className="bg-[#a35f2a] text-white px-4 py-1 rounded">
                Kirim
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackFAQAdmin;
