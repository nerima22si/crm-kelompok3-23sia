import React, { useState, useEffect } from "react";
import Products from "../data/Products";
import { supabase } from './supabase';

const kategoriList = [
  "Donat",
  "J.Club",
  "J.Cool",
  "Coffee",
  "Chocolate",
  "Tea",
  "Frappe",
];

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", category: "", price: "", image: "", description: "" });
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts(Products);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*").order("id", { ascending: true });
    if (error) console.error("❌ Fetch dari Supabase gagal:", error);
    else {
      setProducts((local) => {
        const localIds = local.map((p) => p.id);
        const newData = data.filter((item) => !localIds.includes(item.id));
        return [...local, ...newData];
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.category || !form.price) return;

    if (!kategoriList.includes(form.category)) {
      alert("Kategori tidak valid.");
      return;
    }

    if (editingProduct) {
      const { error } = await supabase.from("products").update(form).eq("id", editingProduct.id);
      if (error) return alert("❌ Gagal update ke Supabase.");
      setProducts((prev) => prev.map((p) => (p.id === editingProduct.id ? { ...form, id: p.id } : p)));
      setEditingProduct(null);
    } else {
      const newProduct = { ...form, id: Date.now() };
      const { error } = await supabase.from("products").insert([newProduct]);
      if (error) return alert("❌ Gagal tambah ke Supabase.");
      setProducts((prev) => [...prev, newProduct]);
    }

    setForm({ name: "", category: "", price: "", image: "", description: "" });
    setShowForm(false);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) return alert("❌ Gagal hapus di Supabase.");
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff6ec] to-[#fdf6f1] py-10 px-6 shadow-xl rounded-xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#4b2e2b] text-center">Product Management</h2>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => {
              setForm({ name: "", category: "", price: "", image: "", description: "" });
              setEditingProduct(null);
              setShowForm(!showForm);
            }}
            className="bg-[#d3a170] text-white px-4 py-2 rounded hover:bg-[#a35f2a]"
          >
            {showForm ? "Tutup Form" : "Tambah Produk"}
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-6 mb-10 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <input
              className="border border-gray-300 rounded p-2"
              placeholder="Nama Produk"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <select
              className="border border-gray-300 rounded p-2"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="">Pilih Kategori</option>
              {kategoriList.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="number"
              className="border border-gray-300 rounded p-2"
              placeholder="Harga"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="col-span-1 md:col-span-3 border border-gray-300 rounded p-2"
            />
            <textarea
              className="col-span-1 md:col-span-3 border border-gray-300 rounded p-2"
              placeholder="Deskripsi"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <button
              type="submit"
              className="col-span-1 md:col-span-3 bg-[#d3a170] hover:bg-[#a35f2a] text-white py-2 rounded"
            >
              {editingProduct ? "Update Produk" : "Tambah Produk"}
            </button>
          </form>
        )}

        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#a35f2a]">Daftar Produk</h3>
          <div className="overflow-x-auto bg-white rounded-xl shadow-md">
            <table className="min-w-full text-sm text-[#4b2e2b]">
              <thead className="bg-[#f4e8dc]">
                <tr>
                  <th className="p-4 text-left">Gambar</th>
                  <th className="p-4 text-left">Nama</th>
                  <th className="p-4 text-left">Kategori</th>
                  <th className="p-4 text-left">Harga</th>
                  <th className="p-4 text-left">Deskripsi</th>
                  <th className="p-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((p, index) => (
                    <tr
                      key={p.id}
                      className={`${index % 2 === 0 ? 'bg-[#fffdfc]' : 'bg-[#fff9f5]'} hover:bg-[#f8f2ee]`}
                    >
                      <td className="p-4">
                        <img src={p.image} alt={p.name} className="h-16 rounded" />
                      </td>
                      <td className="p-4 font-semibold">{p.name}</td>
                      <td className="p-4">{p.category}</td>
                      <td className="p-4">Rp {parseInt(p.price).toLocaleString("id-ID")}</td>
                      <td className="p-4">{p.description}</td>
                      <td className="p-4 text-center space-x-2">
                        <button onClick={() => handleEdit(p)} className="text-indigo-600 hover:underline">Edit</button>
                        <button onClick={() => handleDelete(p.id)} className="text-red-500 hover:underline">Hapus</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-gray-400 italic p-4 text-center">
                      Belum ada produk
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
