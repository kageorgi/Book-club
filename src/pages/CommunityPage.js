import React from 'react';
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';

function CommunityPage() {
  const navigate = useNavigate();
  return (
    <div className="community-page" style={{ padding: '50px' }}>
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/path/to/community-video.mp4" type="video/mp4" />
          <source src="/path/to/community-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1>Community Discussions</h1>
      <p>conference posts</p>

      <div className="navigation-buttons">
        <button onClick={() => navigate('/login')}>Go to Login</button>
        <button onClick={() => navigate('/books')}>View Books</button>
        <button onClick={() => navigate('/admin')}>Admin Dashboard</button>
        <button onClick={() => navigate('/home')}>Home</button>
      </div>
    </div>
  );
}

export default CommunityPage;
