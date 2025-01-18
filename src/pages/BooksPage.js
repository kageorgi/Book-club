// src/pages/BooksPage.js
import React from 'react';
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';

function BooksPage() {
  const navigate = useNavigate();
  return (
    <div className="books-page" style={{ padding: '50px' }}>
      <h1>Payment Form</h1>
      <p>stk push</p>

      <div className="navigation-buttons">
        <button onClick={() => navigate('/login')}>Go to Login</button>
        <button onClick={() => navigate('/community')}>Community</button>
        <button onClick={() => navigate('/admin')}>Admin Dashboard</button>
        <button onClick={() => navigate('/app')}>Home</button>
      </div>
    </div>
  );
}

export default BooksPage;