import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the updated CSS

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="welcome-box">
        <h1>Fruit.AI</h1>
        <p>The Healthy AI</p>
      </div>
      <div className="card-container">
        <div className="row">
          <Link to="/chat" className="custom-card">
            <span>Chat</span>
          </Link>
          <Link to="/translator" className="custom-card">
            <span>Translator</span>
          </Link>
        </div>
        <div className="row">
          <Link to="/faq" className="custom-card">
            <span>FAQs</span>
          </Link>
          <Link to="/about" className="custom-card">
            <span>About</span>
          </Link>
        </div>
        {/* <div className="row">
          <Link to="/addFaq" className="custom-card">
            <span>Add FAQ</span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
