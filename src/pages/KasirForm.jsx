import React, { useState } from 'react';

const initialItem = { name: '', qty: 1, price: 0 };

const KasirForm = ({ onSubmitOrder }) => {
    const [customer, setCustomer] = useState('');
    const [membership, setMembership] = useState('Umum');
    const [contact, setContact] = useState('');
    const [payment, setPayment] = useState('Tunai');
    const [channel, setChannel] = useState('Dine-in');
    const [items, setItems] = useState([initialItem]);

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...items];
        updatedItems[index][field] = field === 'qty' || field === 'price' ? Number(value) : value;
        setItems(updatedItems);
    };

    const addItem = () => {
        setItems([...items, initialItem]);
    };

    const removeItem = (index) => {
        if (items.length > 1) {
            setItems(items.filter((_, i) => i !== index));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            id: 'ORD' + Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
            customer,
            membership,
            contact,
            payment,
            channel,
            items,
            date: new Date().toISOString(),
            status: 'Menunggu',
        };

        if (onSubmitOrder) {
            onSubmitOrder(order);
        }

        // Reset
        setCustomer('');
        setContact('');
        setMembership('Umum');
        setPayment('Tunai');
        setChannel('Dine-in');
        setItems([initialItem]);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow p-6 space-y-4 max-w-3xl mx-auto"
        >
            <h2 className="text-xl font-bold text-[#4b2e2b] mb-4">Form Transaksi Kasir</h2>

            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium">Nama Pelanggan</label>
                    <input
                        type="text"
                        value={customer}
                        onChange={(e) => setCustomer(e.target.value)}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">No. Kontak</label>
                    <input
                        type="tel"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Membership</label>
                    <select
                        value={membership}
                        onChange={(e) => setMembership(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        <option>Umum</option>
                        <option>Silver</option>
                        <option>Gold</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium">Metode Pembayaran</label>
                    <select
                        value={payment}
                        onChange={(e) => setPayment(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        <option>Tunai</option>
                        <option>QRIS</option>
                        <option>Transfer</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium">Kanal Penjualan</label>
                    <select
                        value={channel}
                        onChange={(e) => setChannel(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        <option>Dine-in</option>
                        <option>Takeaway</option>
                        <option>Online</option>
                    </select>
                </div>
            </div>

            <div>
                <h3 className="text-md font-semibold mt-4 mb-2">Produk Dipesan</h3>
                {items.map((item, index) => (
                    <div key={index} className="grid grid-cols-5 gap-2 mb-2">
                        <input
                            type="text"
                            placeholder="Nama Produk"
                            value={item.name}
                            onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                            required
                            className="col-span-2 p-2 border rounded"
                        />
                        <input
                            type="number"
                            placeholder="Qty"
                            value={item.qty}
                            min="1"
                            onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
                            required
                            className="p-2 border rounded"
                        />
                        <input
                            type="number"
                            placeholder="Harga"
                            value={item.price}
                            min="0"
                            onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                            required
                            className="p-2 border rounded"
                        />
                        <button
                            type="button"
                            onClick={() => removeItem(index)}
                            className="text-red-500 text-sm hover:underline"
                        >
                            Hapus
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addItem}
                    className="text-[#4b2e2b] hover:text-[#a35f2a] text-sm mt-1 underline"
                >
                    + Tambah Produk
                </button>
            </div>

            <div className="text-right">
                <button
                    type="submit"
                    className="bg-[#4b2e2b] hover:bg-[#a35f2a] text-white px-4 py-2 rounded"
                >
                    Simpan Order
                </button>
            </div>
        </form>
    );
};

export default KasirForm;
