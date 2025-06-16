import React, { useState } from 'react';

const OrderPromoManagement = () => {
  const [items, setItems] = useState([{ product: '', qty: 1, price: 0 }]);

  const handleChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = field === 'qty' || field === 'price' ? parseInt(value) || 0 : value;
    setItems(updatedItems);
  };

  const addItem = () => setItems([...items, { product: '', qty: 1, price: 0 }]);

  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  const calculateTotal = () =>
    items.reduce((total, item) => total + item.qty * item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Transaksi disimpan!');
  };

  const promos = [
    {
      title: "Promo Buy 1 Get 1",
      desc: "Berlaku untuk semua donat klasik",
      start: "2025-06-10",
      end: "2025-06-20",
    },
    {
      title: "Diskon 20% Kopi",
      desc: "Min. pembelian Rp50.000",
      start: "2025-06-15",
      end: "2025-06-30",
    },
  ];

  return (
    <div className="bg-[#fffaf5] min-h-screen p-6 text-[#5c3a1c]">
      <h1 className="text-3xl font-bold mb-6 border-b border-[#e0cfc0] pb-2">
        🍩 Order & Promo Management
      </h1>

      {/* POS Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">🧾 Simulasi Transaksi POS</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
              <input
                type="text"
                placeholder="Nama Produk"
                value={item.product}
                onChange={(e) => handleChange(index, 'product', e.target.value)}
                className="border border-[#e0cfc0] p-2 rounded-lg w-full"
                required
              />
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => handleChange(index, 'qty', e.target.value)}
                className="border border-[#e0cfc0] p-2 rounded-lg w-full"
              />
              <input
                type="number"
                min="0"
                value={item.price}
                onChange={(e) => handleChange(index, 'price', e.target.value)}
                className="border border-[#e0cfc0] p-2 rounded-lg w-full"
              />
              <div className="text-sm font-medium text-center">
                Subtotal: Rp {item.qty * item.price}
              </div>
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="text-red-500 hover:underline text-sm"
              >
                Hapus
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addItem}
            className="text-sm text-purple-700 hover:underline"
          >
            + Tambah Produk
          </button>

          <div className="flex justify-between items-center pt-4 border-t border-[#e0cfc0] mt-4">
            <div className="text-lg font-semibold">Total: Rp {calculateTotal()}</div>
            <button
              type="submit"
              className="bg-[#f4a261] text-white px-6 py-2 rounded-lg hover:bg-[#e76f51] transition"
            >
              Simpan Transaksi
            </button>
          </div>
        </form>
      </div>

      {/* Promo Reminder */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">📢 Reminder Promo Aktif</h2>
        <table className="w-full text-left border border-[#e0cfc0] rounded-lg overflow-hidden">
          <thead className="bg-[#f4a261] text-white text-sm">
            <tr>
              <th className="px-4 py-2">Judul</th>
              <th className="px-4 py-2">Deskripsi</th>
              <th className="px-4 py-2">Periode</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-sm bg-[#fffaf5] text-[#5c3a1c]">
            {promos.map((promo, idx) => (
              <tr key={idx} className="border-t border-[#e0cfc0]">
                <td className="px-4 py-2 font-medium">{promo.title}</td>
                <td className="px-4 py-2">{promo.desc}</td>
                <td className="px-4 py-2">
                  {promo.start} – {promo.end}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => alert(`Promo "${promo.title}" dikirim!`)}
                    className="bg-[#2a9d8f] text-white px-3 py-1 rounded hover:bg-[#21867a] text-sm"
                  >
                    Kirim Sekarang
                  </button>
                </td>
              </tr>
            ))}
            {promos.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-400">
                  Tidak ada promo aktif.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPromoManagement;
