import React, { useState, useEffect } from "react";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", category: "", price: "" });
  const [editingProduct, setEditingProduct] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.category || !form.price) return;

    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingProduct.id ? { ...form, id: p.id } : p))
      );
      setEditingProduct(null);
    } else {
      setProducts([...products, { ...form, id: Date.now() }]);
    }

    setForm({ name: "", category: "", price: "" });
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingProduct(product);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow-md rounded-lg mt-10 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Product Management</h2>

      {/* Form Input */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          className="border border-gray-300 rounded p-2"
          placeholder="Nama Produk"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border border-gray-300 rounded p-2"
          placeholder="Kategori"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input
          type="number"
          className="border border-gray-300 rounded p-2"
          placeholder="Harga"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button
          type="submit"
          className="col-span-1 md:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {editingProduct ? "Update Produk" : "Tambah Produk"}
        </button>
      </form>

      {/* Tabel Produk */}
      <div className="overflow-x-auto">
        <table className="w-full border text-sm text-center mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Nama</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="p-2">{p.name}</td>
                  <td>{p.category}</td>
                  <td>Rp {parseInt(p.price).toLocaleString()}</td>
                  <td className="space-x-2">
                    <button
                      onClick={() => handleEdit(p)}
                      className="text-indigo-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="text-red-500 hover:underline"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-gray-400 italic p-4">
                  Belum ada produk
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
