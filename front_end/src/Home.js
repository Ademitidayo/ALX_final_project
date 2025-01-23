import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the CSS
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState(null);

  // Fetch data from the backend API
  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
      {/* Header with Navigation Links */}
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/about" className="nav-button">About</Link>
          <Link to="/contact" className="nav-button">Contact</Link>
          <Link to="/Login" className="nav-button">Sign In</Link>
          <Link to="/Signup" className="nav-button">Create Account</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to JUBILEE SECONDARY SCHOOL</h1>
          <p>Empowering young minds for a brighter future</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      <section className="data-section">
        {data ? (
          <div>
            <h2>{data.message}</h2>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </section>
      
      <footer>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>&copy; 2025 JUBILEE SECONDARY SCHOOL. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;