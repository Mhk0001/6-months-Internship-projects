import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Home.css';

function Home() {
  return (
    <div className="hero-section">
      <div className="hero-content text-center">
        <h1>Welcome to Super Mall</h1>
        <p>Discover the best shops, exclusive offers, and amazing products all in one place.</p>
        <Link className="btn btn-primary btn-lg" to="/shop">
          Explore Shops
        </Link>
      </div>
    </div>
  );
}

export default Home;
