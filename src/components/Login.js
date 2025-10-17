import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    keepSignedIn: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, show success message
      alert('Login functionality would be implemented here. This is a demo version.');
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="company-name">
            <span>GOLDSTEIN SYSTEMS</span>
            <div className="help-icon">
              <i className="fas fa-info"></i>
            </div>
          </div>
        </div>

        <div className="login-content">
          <h2>Sign In</h2>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <div className="input-container">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder=""
                />
                <div className="input-icons">
                  <i className="fas fa-key"></i>
                  <span>~</span>
                </div>
              </div>
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                id="keepSignedIn"
                name="keepSignedIn"
                checked={formData.keepSignedIn}
                onChange={handleInputChange}
              />
              <label htmlFor="keepSignedIn">Keep me signed in</label>
            </div>

            <button 
              type="submit" 
              className="next-button"
              disabled={isLoading}
            >
              {isLoading ? 'NEXT' : 'NEXT'}
            </button>
          </form>

          <div className="support-links">
            <a href="#unlock">Unlock account</a>
            <a href="#support">Account support</a>
            <a href="/">Back to Goldsteinsystems.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
