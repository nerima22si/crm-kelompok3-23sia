// src/pages/SegmentasiKampanye.jsx
import React, { useState } from 'react';

// --- Styles Object (CSS diubah menjadi JavaScript Objects) ---
const styles = {
  segmentationPage: {
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '1000px',
    margin: '20px auto',
    backgroundColor: '#f0f2f5',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
  },
  h2: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '2.2em',
    fontWeight: '600',
  },
  segmentFormContainer: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
    marginBottom: '30px',
  },
  segmentFormContainerH3: {
    color: '#0056b3',
    marginTop: 0,
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '1.6em',
  },
  formGroup: {
    marginBottom: '15px',
  },
  formLabel: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#555',
  },
  formInput: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1em',
    boxSizing: 'border-box',
  },
  formSelect: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1em',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  },
  formTextarea: {
    resize: 'vertical',
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1em',
    boxSizing: 'border-box',
  },
  submitButton: {
    display: 'block',
    width: '100%',
    padding: '12px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  // New: Filter Controls
  filterControls: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  filterButton: {
    margin: '0 8px',
    padding: '10px 18px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.95em',
    transition: 'all 0.3s ease',
  },
  filterButtonActive: {
    backgroundColor: '#007bff',
    color: 'white',
    borderColor: '#007bff',
    boxShadow: '0 2px 5px rgba(0,123,255,0.2)',
  },
  // End New Filter Controls
  segmentListContainer: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
  },
  segmentListContainerH3: {
    color: '#0056b3',
    marginTop: 0,
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '1.6em',
  },
  segmentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  segmentItem: {
    backgroundColor: '#fefefe',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  segmentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  segmentHeaderH4: {
    margin: 0,
    color: '#333',
    fontSize: '1.3em',
    wordBreak: 'break-word',
  },
  segmentStatusBase: {
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '0.8em',
    fontWeight: 'bold',
    color: 'white',
    minWidth: '80px',
    textAlign: 'center',
  },
  statusActive: { backgroundColor: '#28a745' }, // Green
  statusInactive: { backgroundColor: '#dc3545' }, // Red
  segmentCriteria: {
    color: '#666',
    fontSize: '0.9em',
    lineHeight: '1.5',
    marginBottom: '15px',
    flexGrow: 1,
  },
  segmentCategory: { // New style for category tag
    backgroundColor: '#007bff',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '5px',
    fontSize: '0.75em',
    fontWeight: 'bold',
    marginRight: 'auto', // Push it to the left
  },
  segmentActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: '15px',
    borderTop: '1px solid #eee',
  },
  deleteSegmentButton: {
    backgroundColor: '#dc3545', // Red
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9em',
    transition: 'background-color 0.3s ease',
  },
  noSegments: {
    textAlign: 'center',
    color: '#888',
    padding: '30px',
    fontStyle: 'italic',
    fontSize: '1.1em',
  },
};

// --- Helper Component: SegmentForm ---
const SegmentForm = ({ onAddSegment }) => {
  const [name, setName] = useState('');
  const [criteria, setCriteria] = useState('');
  const [type, setType] = useState('Demografi'); // Default criteria type
  const [category, setCategory] = useState('Lainnya'); // New: Category for filtering

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !criteria) {
      alert('Nama Segmen dan Kriteria harus diisi!');
      return;
    }
    const newSegment = {
      id: Date.now(), // ID unik sederhana
      name,
      criteria: `${type}: ${criteria}`, // Combine type and criteria detail
      status: 'Active', // Default status for new segments
      category, // Add the selected category
    };
    onAddSegment(newSegment);
    // Reset form
    setName('');
    setCriteria('');
    setType('Demografi');
    setCategory('Lainnya');
  };

  return (
    <div style={styles.segmentFormContainer}>
      <h3 style={styles.segmentFormContainerH3}>Buat Segmen Pelanggan Baru</h3>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="segmentName" style={styles.formLabel}>Nama Segmen:</label>
          <input
            type="text"
            id="segmentName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.formInput}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="criteriaType" style={styles.formLabel}>Jenis Kriteria:</label>
          <select
            id="criteriaType"
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={styles.formSelect}
          >
            <option value="Demografi">Demografi (Usia, Lokasi)</option>
            <option value="Perilaku">Perilaku (Riwayat Pembelian)</option>
            <option value="Sumber">Sumber Akuisisi</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="criteria" style={styles.formLabel}>Kriteria Detail:</label>
          <textarea
            id="criteria"
            value={criteria}
            onChange={(e) => setCriteria(e.target.value)}
            rows="3"
            style={styles.formTextarea}
            required
            placeholder="Contoh: Usia 18-25, Lokasi Jakarta"
          ></textarea>
        </div>
        {/* New: Category selection for filtering */}
        <div style={styles.formGroup}>
          <label htmlFor="segmentCategory" style={styles.formLabel}>Kategori Pelanggan:</label>
          <select
            id="segmentCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.formSelect}
          >
            <option value="Lainnya">Lainnya</option>
            <option value="Baru">Baru</option>
            <option value="Loyal">Loyal</option>
            <option value="Tidak Aktif">Tidak Aktif</option>
          </select>
        </div>
        {/* End New: Category selection */}
        <button type="submit" style={styles.submitButton}>Tambah Segmen</button>
      </form>
    </div>
  );
};

// --- Helper Component: SegmentItem ---
const SegmentItem = ({ segment, onDeleteSegment }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active': return styles.statusActive;
      case 'Inactive': return styles.statusInactive;
      default: return {};
    }
  };

  return (
    <div style={styles.segmentItem}>
      <div style={styles.segmentHeader}>
        <h4 style={styles.segmentHeaderH4}>{segment.name}</h4>
        <span style={{ ...styles.segmentStatusBase, ...getStatusStyle(segment.status) }}>
          {segment.status}
        </span>
      </div>
      <p style={styles.segmentCriteria}>{segment.criteria}</p>
      {segment.category && ( // Display category if available
        <span style={styles.segmentCategory}>{segment.category}</span>
      )}
      <div style={styles.segmentActions}>
        <button onClick={() => onDeleteSegment(segment.id)} style={styles.deleteSegmentButton}>Hapus</button>
      </div>
    </div>
  );
};

// --- Main Component: SegmentasiKampanye Page ---
const SegmentasiKampanye = () => {
  // State untuk daftar segmen
  const [segments, setSegments] = useState([
    {
      id: 1,
      name: 'Segmen Pelanggan Baru',
      criteria: 'Sumber: Website Registrasi, Tanggal Daftar: < 3 bulan',
      status: 'Active',
      category: 'Baru',
    },
    {
      id: 2,
      name: 'Pelanggan Loyal Jakarta',
      criteria: 'Perilaku: Pembelian > 5x, Lokasi: Jakarta',
      status: 'Active',
      category: 'Loyal',
    },
    {
      id: 3,
      name: 'Pelanggan Tidak Aktif 6 Bulan+',
      criteria: 'Perilaku: Tidak ada aktivitas selama > 6 bulan',
      status: 'Inactive',
      category: 'Tidak Aktif',
    },
    {
      id: 4,
      name: 'Prospek Webinar',
      criteria: 'Sumber: Mengikuti Webinar Terbaru',
      status: 'Active',
      category: 'Lainnya',
    },
  ]);

  const [filterCategory, setFilterCategory] = useState('All'); // New state for filter

  // Fungsi untuk menambahkan segmen baru
  const handleAddSegment = (newSegment) => {
    setSegments((prevSegments) => [...prevSegments, newSegment]);
    alert('Segmen berhasil ditambahkan!');
  };

  // Fungsi untuk menghapus segmen
  const handleDeleteSegment = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus segmen ini?')) {
      setSegments((prevSegments) => prevSegments.filter((seg) => seg.id !== id));
      alert('Segmen berhasil dihapus!');
    }
  };

  // Filtered segments based on the selected category
  const filteredSegments = segments.filter((segment) => {
    if (filterCategory === 'All') {
      return true; // Show all segments
    }
    return segment.category === filterCategory;
  });

  return (
    <div style={styles.segmentationPage}>
      <h2 style={styles.h2}>Manajemen Segmentasi Pelanggan</h2>

      {/* Bagian Formulir Segmen Baru */}
      <SegmentForm onAddSegment={handleAddSegment} />

      {/* Bagian Kontrol Filter */}
      <div style={styles.filterControls}>
        <button
          style={filterCategory === 'All' ? { ...styles.filterButton, ...styles.filterButtonActive } : styles.filterButton}
          onClick={() => setFilterCategory('All')}
        >
          Semua Segmen
        </button>
        <button
          style={filterCategory === 'Baru' ? { ...styles.filterButton, ...styles.filterButtonActive } : styles.filterButton}
          onClick={() => setFilterCategory('Baru')}
        >
          Pelanggan Baru
        </button>
        <button
          style={filterCategory === 'Loyal' ? { ...styles.filterButton, ...styles.filterButtonActive } : styles.filterButton}
          onClick={() => setFilterCategory('Loyal')}
        >
          Pelanggan Loyal
        </button>
        <button
          style={filterCategory === 'Tidak Aktif' ? { ...styles.filterButton, ...styles.filterButtonActive } : styles.filterButton}
          onClick={() => setFilterCategory('Tidak Aktif')}
        >
          Pelanggan Tidak Aktif
        </button>
      </div>

      {/* Bagian Daftar Segmen */}
      <div style={styles.segmentListContainer}>
        <h3 style={styles.segmentListContainerH3}>Daftar Segmen</h3>
        {filteredSegments.length === 0 ? (
          <p style={styles.noSegments}>Tidak ada segmen untuk ditampilkan dalam kategori ini.</p>
        ) : (
          <div style={styles.segmentGrid}>
            {filteredSegments.map((segment) => (
              <SegmentItem
                key={segment.id}
                segment={segment}
                onDeleteSegment={handleDeleteSegment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SegmentasiKampanye;