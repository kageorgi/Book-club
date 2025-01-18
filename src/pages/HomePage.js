import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/videos/8275963-hd_1920_1080_30fps.mp4" type="video/mp4" />
          <source src="/videos/8275963-hd_1920_1080_30fps.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <header className="home-header">
        <div className="logo">
          <img src="/logo.png" alt="Book Club Logo" />
        </div>
        <h1 className="club-name">Welcome to IMPACT WORLD COMMUNITY with SDGBOOK CLUB.</h1>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Impact World Community Kenya is a youth-led organization working with
          youth to promote social, economic activities; discuss youth problems,
          and collaborate with government and organizations for a better future.
        </p>
      </section>

      <section className="leadership-section">
        <h2>Leadership</h2>
        <div className="leaders">
          <div className="leader">
            <img src="/president.jpeg" alt="Leader 1" />
            <h3>John Doe</h3>
            <p>President</p>
          </div>
          <div className="leader">
            <img src="/secretary general.jpeg" alt="Leader 2" />
            <h3>Jane Smith</h3>
            <p>Vice President</p>
          </div>
          <div className="leader">
            <img src="/treasurer.jpeg" alt="Leader 3" />
            <h3>Jane Smith</h3>
            <p>Vice President</p>
          </div>
        </div>
      </section>

      <section className="HQ-section">
      <div>
        <h1>IMPACT WORLD COMMUNITY with SDGBOOK CLUB</h1>
        <p>
          The headquarters in Nairobi, Kenya, aims to link the community to the
          world through organizing international conferences and summits,
          providing a platform to discuss Sustainable Development Goals.
        </p>
        <h3>Slogan</h3>
        <p>Bringing change to the community for a peaceful youth and a better planet.</p>
      </div>
      </section>
      <div className="navigation-buttons">
        <button onClick={() => navigate('/login')}>Go to Login</button>
        <button onClick={() => navigate('/books')}>View Books</button>
        <button onClick={() => navigate('/community')}>Community</button>
        <button onClick={() => navigate('/admin')}>Admin Dashboard</button>
      </div>
      
    </div>
  );
}

export default HomePage;
