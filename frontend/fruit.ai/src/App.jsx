import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/login.jsx';
import HomePage from './components/home.jsx';
import FAQPage from './components/faq.jsx';
// import AddFAQPage from './components/addFaq.jsx';
import ChatbotPage from './components/chatBot.jsx';
import AboutPage from './components/AboutUs.jsx';
import TranslationPage from './components/TranslationPage';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Login Page */}
        <Route path="/" element={<LoginPage />} />
        {/* Protected route that leads to the HomePage after successful login */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        {/* <Route path="/addFaq" element={<AddFAQPage />} /> */}
        <Route path="/chat" element={<ChatbotPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/translator" element={<TranslationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
