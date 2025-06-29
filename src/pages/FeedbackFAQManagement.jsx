import React, { useState } from 'react';

const FeedbackFAQAdmin = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      customer: 'Dian Rahma',
      email: 'dian@email.com',
      message: 'Pengiriman terlalu lama.',
      status: 'Belum Selesai',
      reply: '',
    },
  ]);

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'Bagaimana cara reset password?',
      answer: 'Klik "Lupa Password" saat login, lalu ikuti instruksi.',
    },
  ]);

  const [newFAQ, setNewFAQ] = useState({ question: '', answer: '' });
  const [replyModal, setReplyModal] = useState({ open: false, feedbackId: null, replyText: '' });

  const handleAddFAQ = () => {
    if (newFAQ.question && newFAQ.answer) {
      setFaqs([...faqs, { ...newFAQ, id: Date.now() }]);
      setNewFAQ({ question: '', answer: '' });
    }
  };

  const openReplyModal = (id) => {
    const fb = feedbacks.find((f) => f.id === id);
    setReplyModal({ open: true, feedbackId: id, replyText: fb.reply || '' });
  };

  const submitReply = () => {
    setFeedbacks((prev) =>
      prev.map((f) =>
        f.id === replyModal.feedbackId
          ? { ...f, reply: replyModal.replyText, status: 'Selesai' }
          : f
      )
    );
    setReplyModal({ open: false, feedbackId: null, replyText: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff6ec] to-[#fdf6f1] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#4b2e2b] text-center">
          Feedback & FAQ Management
        </h2>

        {/* Feedback Table */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-[#a35f2a]">Daftar Feedback</h3>
          <div className="overflow-x-auto bg-white rounded-xl shadow-md">
            <table className="min-w-full text-sm">
              <thead className="bg-[#f4e8dc] text-[#4b2e2b]">
                <tr>
                  <th className="p-4 text-left">Nama</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Pesan</th>
                  <th className="p-4 text-center">Status</th>
                  <th className="p-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.map((fb, index) => (
                  <tr
                    key={fb.id}
                    className={`${index % 2 === 0 ? 'bg-[#fffdfc]' : 'bg-[#fff9f5]'} hover:bg-[#f8f2ee]`}
                  >
                    <td className="p-4 border-b border-[#e8d8c5]">{fb.customer}</td>
                    <td className="p-4 border-b border-[#e8d8c5]">{fb.email}</td>
                    <td className="p-4 border-b border-[#e8d8c5]">{fb.message}</td>
                    <td className="p-4 border-b border-[#e8d8c5] text-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${fb.status === 'Selesai'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-800'
                          }`}
                      >
                        {fb.status}
                      </span>
                    </td>
                    <td className="p-4 border-b border-[#e8d8c5] text-center">
                      <button
                        onClick={() => openReplyModal(fb.id)}
                        className="bg-[#d3a170] hover:bg-[#a35f2a] text-white text-sm px-4 py-1 rounded"
                      >
                        Balas
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-[#36687c]">Daftar FAQ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-[#f0f8fc] border border-blue-100 rounded-lg p-4 shadow-sm"
              >
                <h4 className="font-semibold text-[#2c5777] mb-1">Q: {faq.question}</h4>
                <p className="text-gray-700">A: {faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Add FAQ Form */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="font-semibold text-[#2c5777] mb-3">Tambah FAQ Baru</h4>
            <input
              type="text"
              placeholder="Pertanyaan"
              value={newFAQ.question}
              onChange={(e) => setNewFAQ({ ...newFAQ, question: e.target.value })}
              className="w-full border border-gray-300 rounded p-2 mb-3"
            />
            <textarea
              placeholder="Jawaban"
              rows={3}
              value={newFAQ.answer}
              onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
              className="w-full border border-gray-300 rounded p-2 mb-3"
            />
            <button
              onClick={handleAddFAQ}
              className="bg-[#36687c] hover:bg-[#2a4f65] text-white px-4 py-2 rounded"
            >
              Tambah FAQ
            </button>
          </div>
        </div>
      </div>

      {/* Modal Balas */}
      {replyModal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h4 className="text-lg font-semibold mb-2 text-[#4b2e2b]">Balas Feedback</h4>
            <textarea
              rows={4}
              value={replyModal.replyText}
              onChange={(e) =>
                setReplyModal({ ...replyModal, replyText: e.target.value })
              }
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Tulis balasan di sini..."
            />
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setReplyModal({ open: false, feedbackId: null, replyText: '' })}
                className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={submitReply}
                className="px-4 py-2 bg-[#d3a170] text-white rounded hover:bg-[#a35f2a]"
              >
                Kirim Balasan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackFAQAdmin;
