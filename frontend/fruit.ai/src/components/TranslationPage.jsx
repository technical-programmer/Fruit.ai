import React, { useState } from 'react';
import axios from 'axios';
import './TranslationPage.css';

const TranslationPage = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/translate', {
        text,
        targetLang: 'EN'
      });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
      setTranslatedText('Error translating text');
    }
  };

  return (
    <div className="translator-container">
      <h1>Translator</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button onClick={handleTranslate}>Translate</button>
      <div className="translation-result">
        <h2>Translated Text:</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default TranslationPage;
