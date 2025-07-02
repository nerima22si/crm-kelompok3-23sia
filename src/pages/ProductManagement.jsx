import React, { useState } from "react";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", category: "", price: "", image: "" });
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

    setForm({ name: "", category: "", price: "", image: "" });
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingProduct(product);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
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

        {/* Form Input */}
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
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="col-span-1 md:col-span-3 border border-gray-300 rounded p-2"
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-3 bg-[#d3a170] hover:bg-[#a35f2a] text-white py-2 rounded"
          >
            {editingProduct ? "Update Produk" : "Tambah Produk"}
          </button>
        </form>

        {/* Tabel Produk */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-[#a35f2a]">Daftar Produk</h3>
          <div className="overflow-x-auto bg-white rounded-xl shadow-md">
            <table className="min-w-full text-sm text-[#4b2e2b]">
              <thead className="bg-[#f4e8dc]">
                <tr>
                  <th className="p-4 text-left">Nama</th>
                  <th className="p-4 text-left">Kategori</th>
                  <th className="p-4 text-left">Harga</th>
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
                      <td className="p-4">{p.name}</td>
                      <td className="p-4">{p.category}</td>
                      <td className="p-4">Rp {parseInt(p.price).toLocaleString()}</td>
                      <td className="p-4 text-center space-x-2">
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
                    <td colSpan="4" className="text-gray-400 italic p-4 text-center">
                      Belum ada produk
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Card Produk */}
        {products.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#4b2e2b]">Preview Produk</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.id} className="bg-white shadow rounded-lg p-4 border border-[#f0e4da]">
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-40 object-cover rounded mb-3"
                    />
                  )}
                  <h4 className="text-lg font-bold text-[#a35f2a] mb-1">{p.name}</h4>
                  <p className="text-sm text-gray-600">Kategori: {p.category}</p>
                  <p className="text-sm text-gray-600">Harga: Rp {parseInt(p.price).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManagement;
