import React, { useState } from 'react';
import './DataDeletionRequest.css';

const DataDeletionRequest = () => {
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');

    try {
      // Here you would send the data to your backend server
      // Example using fetch:
      const response = await fetch('https://your-backend.com/delete-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, userId }),
      });

      if (response.ok) {
        setSuccessMessage('Your data deletion request has been submitted successfully.');
        setEmail('');
        setUserId('');
      } else {
        setSuccessMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setSuccessMessage('Something went wrong. Please try again later.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="data-deletion-container">
      <div className="data-deletion-content">
        <div className="logo-section-deletion">
          <img src="/logo.png" alt="Goldstein Systems" className="deletion-logo" />
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '2.5rem 2rem',
          borderRadius: '15px',
          marginBottom: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            margin: '0 0 1rem 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>The Ride Studio App</h1>
          <p style={{
            color: 'white',
            fontSize: '1.5rem',
            margin: '0',
            fontWeight: '600'
          }}>by WOSKI GROUP LTD</p>
          <p style={{
            color: '#ffd700',
            fontSize: '1.2rem',
            margin: '1.5rem 0 0 0',
            fontWeight: 'bold'
          }}>Account ID: 8251327401753570827</p>
        </div>
        
        <h1>Data Deletion Request</h1>
        <p className="subtitle">
          Submit a request to delete your personal data from our systems. 
          We will process your request within 30 days.
        </p>

        <form onSubmit={handleSubmit} className="deletion-form">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="userId">User ID (Optional)</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your User ID if known"
            />
          </div>

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>

        {successMessage && (
          <div className={`message ${successMessage.includes('successfully') ? 'success' : 'error'}`}>
            {successMessage}
          </div>
        )}

        <div className="info-section">
          <h3>What happens next?</h3>
          <ul>
            <li>We will verify your identity</li>
            <li>Your data will be permanently deleted from our systems</li>
            <li>You will receive a confirmation email once completed</li>
            <li>This process typically takes up to 30 days</li>
          </ul>
        </div>

        <div className="footer-info">
          <p>For questions about data deletion, contact us at:</p>
          <p><strong>michael@goldsteinsystems.com</strong></p>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionRequest;
