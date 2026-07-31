import React, { useEffect, useState } from 'react';
import './Update.css';
import heroMainGold from '../assets/ai-hero.png';

const STORAGE_KEY = 'gs-update-authenticated';
const UPDATE_PASSWORD = 'BlueBrand26!';
// July 31, 2026 23:59 America/New_York (EDT, UTC-4)
const RELEASE_AT = new Date('2026-07-31T23:59:00-04:00');

const isBeforeRelease = () => Date.now() < RELEASE_AT.getTime();

const Update = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [waitingForRelease, setWaitingForRelease] = useState(isBeforeRelease());

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!authenticated || !waitingForRelease) return undefined;

    const tick = () => {
      if (!isBeforeRelease()) {
        setWaitingForRelease(false);
      }
    };

    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, [authenticated, waitingForRelease]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password === UPDATE_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setWaitingForRelease(isBeforeRelease());
      setAuthenticated(true);
      setPassword('');
      return;
    }

    setError('Incorrect password. Please try again.');
  };

  return (
    <section className="update-page">
      <div className="update-image-background">
        <img src={heroMainGold} alt="" className="update-hero-image" />
        <div className="update-overlay"></div>
      </div>

      <div className="update-container">
        {!authenticated ? (
          <div className="update-gate">
            <p className="update-eyebrow">Goldstein Systems</p>
            <h1 className="update-title">Client Update</h1>
            <p className="update-subtitle">
              Enter the password provided by your Goldstein Systems contact to view this update.
            </p>
            <form className="update-form" onSubmit={handleSubmit}>
              <label htmlFor="update-password" className="update-label">
                Password
              </label>
              <input
                id="update-password"
                type="password"
                className="update-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              {error ? <p className="update-error">{error}</p> : null}
              <button type="submit" className="update-submit">
                Enter
              </button>
            </form>
          </div>
        ) : waitingForRelease ? (
          <div className="update-content">
            <p className="update-eyebrow">Goldstein Systems</p>
            <h1 className="update-title">Update Scheduled</h1>
            <p className="update-subtitle">
              Access confirmed. This client update will be published at{' '}
              <span className="update-highlight">11:59 PM New York time</span> today.
              Please check back then.
            </p>
          </div>
        ) : (
          <div className="update-content">
            <p className="update-eyebrow">Goldstein Systems</p>
            <h1 className="update-title">Client Update</h1>
            <p className="update-subtitle">
              You are signed in. Client information for this update will appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Update;
