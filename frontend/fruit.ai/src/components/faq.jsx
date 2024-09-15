import React, { useEffect, useState } from 'react';
import './faq.css';

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newFaq, setNewFaq] = useState({ title: '', description: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/faqs');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const handleAddFaq = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/faqs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFaq),
      });
      if (!response.ok) throw new Error('Failed to add FAQ');
      const addedFaq = await response.json();
      setFaqs([...faqs, addedFaq]);
      setNewFaq({ title: '', description: '' }); // Clear the form after submission
      setShowForm(false); // Hide form after submission
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/faqs/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete FAQ');
      alert('FAQ deleted successfully');
      setFaqs(faqs.filter(faq => faq._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQs</h1>
      
      {/* Toggle Add FAQ Form */}
      <button onClick={() => setShowForm(!showForm)} className="btn-toggle-form">
        {showForm ? 'Close Form' : 'Add FAQ'}
      </button>

      {/* Add FAQ Form */}
      {showForm && (
        <form onSubmit={handleAddFaq} className="add-faq-form">
          <input
            type="text"
            placeholder="FAQ Title"
            value={newFaq.title}
            onChange={(e) => setNewFaq({ ...newFaq, title: e.target.value })}
            required
          />
          <textarea
            placeholder="FAQ Description"
            value={newFaq.description}
            onChange={(e) => setNewFaq({ ...newFaq, description: e.target.value })}
            required
          />
          <button type="submit" className="btn btn-primary">Submit FAQ</button>
        </form>
      )}

      {/* FAQ List */}
      {faqs.length === 0 ? (
        <p className="no-faqs">No FAQs available</p>
      ) : (
        <div className="faq-list">
          {faqs.map(faq => (
            <div key={faq._id} className="faq-card">
              <div className="faq-header" onClick={() => faq.show = !faq.show}>
                <h2>{faq.title}</h2>
                <span>{faq.show ? '-' : '+'}</span>
              </div>
              {faq.show && (
                <div className="faq-content">
                  <p>{faq.description}</p>
                  <button onClick={() => handleDelete(faq._id)} className="btn btn-danger">Delete</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQPage;
