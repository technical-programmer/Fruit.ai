import React from 'react';
import './about.css'; // Ensure this CSS file exists

const AboutPage = () => {
  return (
    <div className="about-container container mt-4">
      <h1 className="text-center mb-4">About us</h1>
      <p className="lead text-center mb-4">
        Welcome to <strong>Fruit.ai</strong>! We are a cutting-edge platform that leverages artificial intelligence to help users manage their health and wellness more effectively.
      </p>
      <div className="section">
        <h2>Our Mission</h2>
        <p>
          At Fruit.ai, our mission is to empower individuals to take control of their health by providing personalized insights, intuitive tools, and AI-driven solutions. Whether you're tracking your daily habits, managing health goals, or seeking information about nutrition and fitness, Fruit.ai is here to assist you every step of the way.
        </p>
      </div>
      <div className="section">
        <h2>Features of Fruit.ai</h2>
        <ul className="list-group">
          <li className="list-group-item">AI-Powered Chatbot for health queries and advice</li>
          <li className="list-group-item">Comprehensive FAQ section for common questions</li>
          <li className="list-group-item">Interactive tools for tracking your health metrics</li>
          <li className="list-group-item">User-friendly design and mobile responsiveness</li>
        </ul>
      </div>
      <div className="section">
        <h2>Why Fruit.ai?</h2>
        <p>
          We believe that managing health should be simple, accessible, and effective. Fruit.ai combines the latest in AI technology with easy-to-use tools, ensuring that everyone has access to the resources they need to live a healthier, happier life.
        </p>
        <p>
          Whether you're a seasoned health enthusiast or just starting your journey, Fruit.ai is designed to make your experience smoother and more enjoyable.
        </p>
      </div>
      <div className="section">
        <h2>Contact Us</h2>
        <p>
          Got questions or feedback? We would love to hear from you! Reach out to us.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
