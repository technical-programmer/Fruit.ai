import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './login.css'; // Import the CSS for styling

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'ankit@gmail.com' && password === 'password123') {
      navigate('/home');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">Login</h2>
        <p className="terms">
          By signing in you are agreeing to our <a href="#">Term and privacy policy</a>
        </p>

        <div className="login-options">
          
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group password-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FontAwesomeIcon icon="fa-solid fa-eye" className="password-icon" />
        </div>

        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">Remember password</label>
          <a href="#" className="forgot-password">Forget password</a>
        </div>

        <button type="submit" className="btn btn-primary btn-block login-btn">Login</button>

        <p className="social-login-text">or connect with</p>

        <div className="social-login">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          <FontAwesomeIcon icon={faPinterest} className="social-icon" />
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </div>

        <div className="biometric-login">
          <FontAwesomeIcon icon="fa-solid fa-fingerprint" className="fingerprint-icon" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
