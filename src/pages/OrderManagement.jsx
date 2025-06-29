import React, { useState, useEffect } from 'react';

const products = [
  { name: 'Donat Coklat', price: 12000 },
  { name: 'Kopi Latte', price: 25000 },
  { name: 'Yogurt Stroberi', price: 20000 },
];

const promos = [
  { id: 1, title: 'Diskon 10% untuk Member Gold', validUntil: '30 Juni 2025' },
  { id: 2, title: 'Beli 2 Gratis 1 Donat', validUntil: '15 Juli 2025' },
];

const members = [
  { email: 'john@example.com', phone: '081234567890', name: 'John Doe', membership: 'Gold' },
  { email: 'jane@example.com', phone: '082345678901', name: 'Jane Smith', membership: 'Silver' },
];

const OrderManagement = () => {
  const [contactInfo, setContactInfo] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [purchaseMethod, setPurchaseMethod] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  useEffect(() => {
    const member = members.find(
      (m) => m.email === contactInfo || m.phone === contactInfo
    );
    if (member) {
      setCustomerName(member.name);
    }
  }, [contactInfo]);

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    const prod = products.find(p => p.name === selectedProduct);
    const newItem = {
      name: selectedProduct,
      price: prod.price,
      quantity,
      subtotal: prod.price * quantity,
    };
    setCartItems([...cartItems, newItem]);
    setSelectedProduct('');
    setQuantity(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Transaksi berhasil disimpan!');
  };

  return (
    <div className="bg-[#fdf6f1] p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-[#4b2e2b] mb-4">Form Transaksi POS</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm text-[#4b2e2b]">Email / Nomor HP</label>
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            className="w-full border border-[#d3a170] rounded px-3 py-2"
            placeholder="Masukkan email atau nomor"
            required
          />
        </div>

        <div>
          <label className="text-sm text-[#4b2e2b]">Nama Pelanggan</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full border border-[#d3a170] rounded px-3 py-2"
            placeholder="Nama akan terisi otomatis jika member"
            required
          />
        </div>

        <div>
          <label className="text-sm text-[#4b2e2b]">Produk</label>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="w-full border border-[#d3a170] rounded px-3 py-2"
          >
            <option value="">Pilih Produk</option>
            {products.map((prod) => (
              <option key={prod.name} value={prod.name}>{prod.name}</option>
            ))}
          </select>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border border-[#d3a170] rounded px-3 py-2 mt-2"
            placeholder="Jumlah"
          />
          <button
            type="button"
            onClick={handleAddToCart}
            className="bg-[#4b2e2b] text-white px-4 py-2 rounded hover:bg-[#a35f2a] mt-2 w-full"
          >
            Tambah ke Keranjang
          </button>
        </div>

        <div>
          <label className="text-sm text-[#4b2e2b]">Metode Pembayaran</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border border-[#d3a170] rounded px-3 py-2"
            required
          >
            <option value="">Pilih Metode</option>
            <option value="QRIS">QRIS</option>
            <option value="Tunai">Tunai</option>
            <option value="Kartu">Kartu</option>
          </select>

          <label className="text-sm text-[#4b2e2b] mt-4 block">Metode Pembelian</label>
          <select
            value={purchaseMethod}
            onChange={(e) => setPurchaseMethod(e.target.value)}
            className="w-full border border-[#d3a170] rounded px-3 py-2"
            required
          >
            <option value="">Pilih Kanal</option>
            <option value="Dine-in">Dine-in</option>
            <option value="Takeaway">Takeaway</option>
            <option value="Delivery">Delivery</option>
          </select>
        </div>

        <div className="md:col-span-2 mt-4">
          <h4 className="font-semibold text-[#4b2e2b] mb-2">Keranjang Produk</h4>
          <table className="w-full text-sm bg-white border">
            <thead className="bg-[#f3e5dc] text-[#4b2e2b]">
              <tr>
                <th className="p-2 text-left">Produk</th>
                <th className="p-2">Qty</th>
                <th className="p-2">Harga</th>
                <th className="p-2">Subtotal</th>
              </tr>
            </thead>
            <tbody className="text-[#4b2e2b]">
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2 text-center">{item.quantity}</td>
                  <td className="p-2">Rp {item.price.toLocaleString()}</td>
                  <td className="p-2">Rp {item.subtotal.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right mt-2 font-bold text-[#4b2e2b]">
            Total: Rp {total.toLocaleString()}
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#d3a170] text-white px-4 py-2 rounded hover:bg-[#a35f2a] w-full"
          >
            Simpan Transaksi
          </button>
        </div>
      </form>

      <hr className="my-6" />

      <h3 className="text-lg font-semibold text-[#4b2e2b] mb-2">Reminder Promo Aktif</h3>
      <table className="min-w-full text-sm bg-white shadow rounded overflow-hidden">
        <thead className="bg-[#f3e5dc] text-[#4b2e2b]">
          <tr>
            <th className="p-2 text-left">Judul Promo</th>
            <th className="p-2 text-left">Berlaku Sampai</th>
            <th className="p-2 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-[#4b2e2b]">
          {promos.map((promo) => (
            <tr key={promo.id} className="border-t hover:bg-[#fff8f4]">
              <td className="p-2">{promo.title}</td>
              <td className="p-2">{promo.validUntil}</td>
              <td className="p-2 text-center">
                <button className="bg-[#4b2e2b] text-white px-3 py-1 rounded hover:bg-[#a35f2a]">
                  Kirim Sekarang
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
