import React, { useEffect, useState } from 'react';
import './Update.css';

const HERO_IMAGE_SRC = '/ai-hero.jpg';
const STORAGE_KEY = 'gs-update-authenticated-until';
const SESSION_MS = 5 * 60 * 1000;
const UPDATE_PASSWORD = 'BlueBrand26!';
// July 31, 2026 23:59 America/New_York (EDT, UTC-4)
const RELEASE_AT = new Date('2026-07-31T23:59:00-04:00');

const isBeforeRelease = () => Date.now() < RELEASE_AT.getTime();

const getSessionExpiry = () => {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  const expiry = raw ? Number(raw) : 0;
  return Number.isFinite(expiry) ? expiry : 0;
};

const isSessionValid = () => getSessionExpiry() > Date.now();

const clearSession = () => {
  sessionStorage.removeItem(STORAGE_KEY);
};

const Update = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [waitingForRelease, setWaitingForRelease] = useState(isBeforeRelease());

  const logout = () => {
    clearSession();
    setAuthenticated(false);
    setPassword('');
    setError('');
  };

  useEffect(() => {
    const preload = document.createElement('link');
    preload.rel = 'preload';
    preload.as = 'image';
    preload.href = HERO_IMAGE_SRC;
    preload.setAttribute('fetchpriority', 'high');
    document.head.appendChild(preload);

    if (isSessionValid()) {
      setAuthenticated(true);
      setWaitingForRelease(isBeforeRelease());
    } else {
      clearSession();
    }

    return () => {
      preload.remove();
    };
  }, []);

  useEffect(() => {
    if (!authenticated) return undefined;

    const expiry = getSessionExpiry();
    const remaining = expiry - Date.now();

    if (remaining <= 0) {
      logout();
      return undefined;
    }

    const id = window.setTimeout(logout, remaining);
    return () => window.clearTimeout(id);
  }, [authenticated]);

  useEffect(() => {
    if (!authenticated || !waitingForRelease) return undefined;

    const tick = () => {
      if (!isSessionValid()) {
        logout();
        return;
      }
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
      sessionStorage.setItem(STORAGE_KEY, String(Date.now() + SESSION_MS));
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
        <img
          src={HERO_IMAGE_SRC}
          alt=""
          className="update-hero-image"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1084}
        />
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
