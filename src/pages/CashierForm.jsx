import React, { useEffect, useState } from 'react';
import { supabase } from './supabase';
import Products from '../data/Products';

const CashierForm = () => {
    const [isMember, setIsMember] = useState(true);
    const [form, setForm] = useState({
        customer: '',
        contact: '',
        membership: 'SILVER',
        items: [],
        payment: 'Tunai',
        channel: 'Dine-in',
        status: 'Menunggu',
    });

    const [itemInput, setItemInput] = useState({ productId: '', qty: 1 });
    const [productList, setProductList] = useState([]);
    const [cashInput, setCashInput] = useState('');
    const [change, setChange] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem('products'));
        setProductList(local?.length ? local : Products);
        fetchSupabaseProducts();
    }, []);

    const fetchSupabaseProducts = async () => {
        const { data, error } = await supabase.from('products').select('*').order('id', { ascending: true });
        if (!error && data) {
            const ids = new Set(productList.map(p => p.id));
            const merged = [...productList, ...data.filter(p => !ids.has(p.id))];
            setProductList(merged);
        }
    };

    const calculateTotal = () =>
        form.items.reduce((sum, item) => sum + item.price * item.qty, 0);

    const handleAddItem = () => {
        const product = productList.find(p => p.id === parseInt(itemInput.productId));
        if (!product || itemInput.qty <= 0) return;

        const newItem = { name: product.name, price: product.price, qty: itemInput.qty };
        setForm(prev => ({
            ...prev,
            items: [...prev.items, newItem],
        }));
        setItemInput({ productId: '', qty: 1 });
    };

    const handleRemoveItem = (index) => {
        setForm(prev => ({
            ...prev,
            items: prev.items.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const total = calculateTotal();
        const bayar = parseInt(cashInput);

        if (bayar < total) {
            alert('⚠️ Uang pembayaran kurang dari total.');
            return;
        }

        // 🚫 Remove id if exists
        const { id, ...cleanForm } = form;

        const orderData = {
            ...cleanForm,
            total,
            membership: isMember ? cleanForm.membership : 'NON-MEMBER',
            contact: isMember ? cleanForm.contact : '-',
        };

        const { error } = await supabase.from('orders').insert([orderData]);
        if (error) {
            alert('❌ Gagal menyimpan order: ' + error.message);
        } else {
            alert('✅ Order berhasil ditambahkan!');
            resetForm();
        }
    };

    const resetForm = () => {
        setForm({
            customer: '',
            contact: '',
            membership: 'SILVER',
            items: [],
            payment: 'Tunai',
            channel: 'Dine-in',
            status: 'Menunggu',
        });
        setCashInput('');
        setChange(0);
        setItemInput({ productId: '', qty: 1 });
    };

    useEffect(() => {
        const bayar = parseInt(cashInput) || 0;
        setChange(bayar - calculateTotal());
    }, [cashInput, form.items]);

    const categories = [...new Set(productList.map(p => p.category))];
    const filteredProducts = selectedCategory
        ? productList.filter(p => p.category === selectedCategory)
        : productList;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#4b2e2b]">Form Tambah Order</h2>

            <div className="mb-4">
                <label className="text-sm font-semibold mr-4">Tipe Pelanggan:</label>
                <label className="mr-4">
                    <input type="radio" name="memberType" checked={isMember} onChange={() => setIsMember(true)} /> Member
                </label>
                <label>
                    <input type="radio" name="memberType" checked={!isMember} onChange={() => setIsMember(false)} /> Bukan Member
                </label>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Nama Pelanggan"
                    value={form.customer}
                    onChange={(e) => setForm({ ...form, customer: e.target.value })}
                    className="w-full border rounded p-2"
                    required
                />

                {isMember && (
                    <>
                        <input
                            type="text"
                            placeholder="Nomor Kontak"
                            value={form.contact}
                            onChange={(e) => setForm({ ...form, contact: e.target.value })}
                            className="w-full border rounded p-2"
                            required
                        />
                        <select
                            value={form.membership}
                            onChange={(e) => setForm({ ...form, membership: e.target.value })}
                            className="w-full border rounded p-2"
                        >
                            <option value="SILVER">SILVER</option>
                            <option value="GOLD">GOLD</option>
                            <option value="PLATINUM">PLATINUM</option>
                        </select>
                    </>
                )}

                {/* Filter Kategori */}
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full border rounded p-2"
                >
                    <option value="">Semua Kategori</option>
                    {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat}</option>
                    ))}
                </select>

                {/* Tambah Produk */}
                <div className="grid grid-cols-3 gap-2 items-center">
                    <select
                        value={itemInput.productId}
                        onChange={(e) => setItemInput({ ...itemInput, productId: e.target.value })}
                        className="border rounded p-2"
                    >
                        <option value="">Pilih Produk</option>
                        {filteredProducts.map((product) => (
                            <option key={product.id} value={product.id}>
                                {product.name} - Rp{product.price.toLocaleString()}
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        placeholder="Qty"
                        min={1}
                        value={itemInput.qty}
                        onChange={(e) => setItemInput({ ...itemInput, qty: parseInt(e.target.value) || 1 })}
                        className="border rounded p-2"
                    />
                    <button
                        type="button"
                        onClick={handleAddItem}
                        className="bg-[#d3a170] text-white px-4 py-2 rounded"
                    >
                        + Tambah
                    </button>
                </div>

                {/* Item List */}
                {form.items.length > 0 && (
                    <div className="mt-2">
                        <h4 className="font-medium mb-1">Item Dipesan:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-700">
                            {form.items.map((item, idx) => (
                                <li key={idx} className="flex justify-between">
                                    <span>{item.name} × {item.qty} @ Rp{item.price.toLocaleString()}</span>
                                    <button
                                        onClick={() => handleRemoveItem(idx)}
                                        className="text-red-500 text-xs ml-2"
                                        type="button"
                                    >
                                        Hapus
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Total & Pembayaran */}
                <div className="space-y-2 mt-4">
                    <p className="font-semibold">Total: Rp {calculateTotal().toLocaleString('id-ID')}</p>
                    <input
                        type="number"
                        placeholder="Uang Tunai"
                        value={cashInput}
                        onChange={(e) => setCashInput(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    />
                    <p className="font-semibold">Kembalian: Rp {change >= 0 ? change.toLocaleString('id-ID') : 0}</p>
                </div>

                {/* Pembayaran & Channel */}
                <div className="grid grid-cols-2 gap-4">
                    <select
                        value={form.payment}
                        onChange={(e) => setForm({ ...form, payment: e.target.value })}
                        className="border p-2 rounded"
                    >
                        <option value="Tunai">Tunai</option>
                        <option value="QRIS">QRIS</option>
                        <option value="Kartu">Kartu</option>
                    </select>

                    <select
                        value={form.channel}
                        onChange={(e) => setForm({ ...form, channel: e.target.value })}
                        className="border p-2 rounded"
                    >
                        <option value="Dine-in">Dine-in</option>
                        <option value="Takeaway">Takeaway</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-[#a35f2a] text-white px-6 py-2 rounded mt-4"
                >
                    Simpan Order
                </button>
            </form>
        </div>
    );
};

export default CashierForm;
