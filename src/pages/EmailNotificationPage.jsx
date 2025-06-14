// src/pages/EmailNotificationPage.jsx
import React, { useState, useEffect } from 'react';

// --- Styles Object (CSS diubah menjadi JavaScript Objects) ---
const styles = {
  campaignManagementPage: {
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
  campaignFormContainer: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
    marginBottom: '30px',
  },
  campaignFormContainerH3: {
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
  formTextarea: {
    resize: 'vertical',
    width: 'calc(100% - 20px)', // Duplicate for clarity, inherits from formInput
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
  submitButtonHover: { // Untuk hover, harus ditangani dengan pseudoclass atau event handler jika inline
    backgroundColor: '#218838',
  },
  campaignListContainer: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
  },
  campaignListContainerH3: {
    color: '#0056b3',
    marginTop: 0,
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '1.6em',
  },
  campaignGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  campaignItem: {
    backgroundColor: '#fefefe',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  campaignItemHover: { // Untuk hover
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  campaignItemUnread: { // Style untuk status 'unread' (jika sebelumnya ada, disamakan)
    borderLeft: '6px solid #007bff',
    backgroundColor: '#eaf3ff',
  },
  campaignHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  campaignHeaderH4: {
    margin: 0,
    color: '#333',
    fontSize: '1.3em',
    wordBreak: 'break-word',
  },
  campaignStatusBase: { // Base style for status badges
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '0.8em',
    fontWeight: 'bold',
    color: 'white',
    minWidth: '80px',
    textAlign: 'center',
  },
  statusActive: { backgroundColor: '#28a745' }, // Green
  statusPaused: { backgroundColor: '#ffc107', color: '#333' }, // Yellow
  statusCompleted: { backgroundColor: '#6c757d' }, // Gray
  statusDraft: { backgroundColor: '#007bff' }, // Blue
  campaignDescription: {
    color: '#666',
    fontSize: '0.9em',
    lineHeight: '1.5',
    marginBottom: '15px',
    flexGrow: 1,
  },
  campaignDates: {
    fontSize: '0.85em',
    color: '#777',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  campaignActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: '15px',
    borderTop: '1px solid #eee',
  },
  campaignActionsSelect: {
    padding: '8px 10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  deleteCampaignButton: {
    backgroundColor: '#dc3545', // Red
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9em',
    transition: 'background-color 0.3s ease',
  },
  deleteCampaignButtonHover: {
    backgroundColor: '#c82333',
  },
  noCampaigns: {
    textAlign: 'center',
    color: '#888',
    padding: '30px',
    fontStyle: 'italic',
    fontSize: '1.1em',
  },
};

// --- Helper Component: CampaignForm ---
const CampaignForm = ({ onAddCampaign }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !startDate || !endDate) {
      alert('Nama, Tanggal Mulai, dan Tanggal Selesai harus diisi!');
      return;
    }
    const newCampaign = {
      id: Date.now(), // ID unik sederhana
      name,
      description,
      startDate,
      endDate,
      status: 'Draft', // Default status saat membuat
    };
    onAddCampaign(newCampaign);
    // Reset form
    setName('');
    setDescription('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div style={styles.campaignFormContainer}>
      <h3 style={styles.campaignFormContainerH3}>Buat Kampanye Baru</h3>
      <form onSubmit={handleSubmit} style={styles.campaignForm}>
        <div style={styles.formGroup}>
          <label htmlFor="campaignName" style={styles.formLabel}>Nama Kampanye:</label>
          <input
            type="text"
            id="campaignName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.formInput}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.formLabel}>Deskripsi:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            style={styles.formTextarea}
          ></textarea>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="startDate" style={styles.formLabel}>Tanggal Mulai:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={styles.formInput}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="endDate" style={styles.formLabel}>Tanggal Selesai:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={styles.formInput}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>Tambah Kampanye</button>
      </form>
    </div>
  );
};

// --- Helper Component: CampaignItem ---
const CampaignItem = ({ campaign, onUpdateStatus, onDeleteCampaign }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active': return styles.statusActive;
      case 'Paused': return styles.statusPaused;
      case 'Completed': return styles.statusCompleted;
      case 'Draft': return styles.statusDraft;
      default: return {};
    }
  };

  const handleStatusChange = (e) => {
    onUpdateStatus(campaign.id, e.target.value);
  };

  return (
    <div style={styles.campaignItem}>
      <div style={styles.campaignHeader}>
        <h4 style={styles.campaignHeaderH4}>{campaign.name}</h4>
        <span style={{ ...styles.campaignStatusBase, ...getStatusStyle(campaign.status) }}>
          {campaign.status}
        </span>
      </div>
      <p style={styles.campaignDescription}>{campaign.description}</p>
      <div style={styles.campaignDates}>
        <span>Mulai: {campaign.startDate}</span>
        <span>Selesai: {campaign.endDate}</span>
      </div>
      <div style={styles.campaignActions}>
        <select value={campaign.status} onChange={handleStatusChange} style={styles.campaignActionsSelect}>
          <option value="Draft">Draf</option>
          <option value="Active">Aktif</option>
          <option value="Paused">Dijeda</option>
          <option value="Completed">Selesai</option>
        </select>
        <button onClick={() => onDeleteCampaign(campaign.id)} style={styles.deleteCampaignButton}>Hapus</button>
      </div>
    </div>
  );
};

// --- Main Component: EmailNotificationPage (sekarang menjadi Campaign Management Page) ---
const EmailNotificationPage = () => {
  // State untuk daftar kampanye
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Kampanye Ramadhan Sale 2025',
      description: 'Promosi besar-besaran untuk menyambut bulan Ramadhan.',
      startDate: '2025-03-10',
      endDate: '2025-04-10',
      status: 'Completed',
    },
    {
      id: 2,
      name: 'Peluncuran Produk Baru X',
      description: 'Kampanye promosi untuk memperkenalkan produk terbaru kami.',
      startDate: '2025-06-01',
      endDate: '2025-06-30',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Promo Awal Tahun',
      description: 'Diskon khusus untuk pelanggan setia di awal tahun.',
      startDate: '2025-01-15',
      endDate: '2025-02-15',
      status: 'Paused',
    },
  ]);

  // Fungsi untuk menambahkan kampanye baru
  const handleAddCampaign = (newCampaign) => {
    setCampaigns((prevCampaigns) => [...prevCampaigns, newCampaign]);
    alert('Kampanye berhasil ditambahkan!');
  };

  // Fungsi untuk update status kampanye
  const handleUpdateStatus = (id, newStatus) => {
    setCampaigns((prevCampaigns) =>
      prevCampaigns.map((camp) =>
        camp.id === id ? { ...camp, status: newStatus } : camp
      )
    );
  };

  // Fungsi untuk menghapus kampanye
  const handleDeleteCampaign = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus kampanye ini?')) {
      setCampaigns((prevCampaigns) => prevCampaigns.filter((camp) => camp.id !== id));
      alert('Kampanye berhasil dihapus!');
    }
  };

  return (
    <div style={styles.campaignManagementPage}>
      <h2 style={styles.h2}>Manajemen Kampanye</h2>

      {/* Bagian Formulir Kampanye Baru */}
      <CampaignForm onAddCampaign={handleAddCampaign} />

      {/* Bagian Daftar Kampanye */}
      <div style={styles.campaignListContainer}>
        <h3 style={styles.campaignListContainerH3}>Daftar Kampanye</h3>
        {campaigns.length === 0 ? (
          <p style={styles.noCampaigns}>Belum ada kampanye yang dibuat.</p>
        ) : (
          <div style={styles.campaignGrid}>
            {campaigns.map((campaign) => (
              <CampaignItem
                key={campaign.id}
                campaign={campaign}
                onUpdateStatus={handleUpdateStatus}
                onDeleteCampaign={handleDeleteCampaign}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailNotificationPage;