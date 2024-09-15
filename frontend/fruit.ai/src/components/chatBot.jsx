import React, { useState, useEffect } from 'react';
import './chatBot.css';

const ChatbotPage = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  const handleSendMessage = async () => {
    if (!userInput) return;

    setMessages([...messages, { sender: 'user', text: userInput }]);

    try {
      const response = await fetch('http://localhost:5000/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) throw new Error('Could not connect to chatbot.');
      const data = await response.json();

      setMessages([...messages, { sender: 'user', text: userInput }, { sender: 'bot', text: data.message }]);
    } catch (error) {
      setError(error.message);
    }

    setUserInput('');
  };

  return (
    <div className="chat-container">
      <h1>Fruit.ai Chatbot</h1>

      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>
            {msg.text}
          </div>
        ))}
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button onClick={handleSendMessage} className="send-button">Send</button>
      </div>
    </div>
  );
};

export default ChatbotPage;
