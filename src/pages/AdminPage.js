// src/pages/AdminPage.js
import React from 'react';
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';


function AdminPage() {
  const navigate = useNavigate();
  return (
    <div className="admin-page" style={{ padding: '50px' }}>
      <h1>Admin Dashboard</h1>
      <p>Manage content and users here.</p>

      <div className="navigation-buttons">
        <button onClick={() => navigate('/login')}>Go to Login</button>
        <button onClick={() => navigate('/community')}>Community</button>
        <button onClick={() => navigate('/books')}>View Books</button>
        <button onClick={() => navigate('/app')}>Home</button>
      </div>
    </div>
  );
}

export default AdminPage;