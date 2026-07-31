import React, { useEffect, useState } from 'react';
import './Update.css';

const HERO_IMAGE_SRC = '/ai-hero.jpg';
const STORAGE_KEY = 'gs-update-authenticated-until';
const SESSION_MS = 5 * 60 * 1000;
const UPDATE_PASSWORD = 'BlueBrand26!';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password === UPDATE_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, String(Date.now() + SESSION_MS));
      setAuthenticated(true);
      setPassword('');
      return;
    }

    setError('Incorrect password. Please try again.');
  };

  return (
    <section className={`update-page${authenticated ? ' update-page--letter' : ''}`}>
      <div className="update-image-background">
        <img
          src={HERO_IMAGE_SRC}
          alt=""
          className={`update-hero-image${authenticated ? ' update-hero-image--still' : ''}`}
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
            <img
              src="/logo.png"
              alt="Goldstein Systems"
              className="update-brand-logo"
            />
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
        ) : (
          <article className="update-letter">
            <img
              src="/logo.png"
              alt="Goldstein Systems"
              className="update-letter-logo"
            />

            <h1 className="update-letter-greeting">Hi Jonny,</h1>

            <div className="update-letter-body">
              <p>Gaspi here.</p>
              <p>
                I&apos;d appreciate your help moving a couple of items forward when you have a
                moment.
              </p>
              <p>
                First, please release the latest push on the GitHub repo. Once that&apos;s done,
                download the build and update your env file with the contents provided in this
                secure link:
              </p>
              <p>
                <a
                  className="update-letter-link"
                  href="https://share.1password.com/s#21WBfltBlnovAAwXg0PUHLv6z-gEmTsdTMe4-pHvdLQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  share.1password.com
                </a>
              </p>
              <p>
                With that in place, you should be able to authenticate via Google and receive the
                OTP.
              </p>
              <p>
                On Oliver&apos;s connection: once the push is released, the test results will be
                visible here:{' '}
                <a
                  className="update-letter-link"
                  href="https://www.slopesearch.com/dev/skiresort-xml"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  slopesearch.com/dev/skiresort-xml
                </a>
                . Please note that until the steps above are complete, this link will return a 404.
              </p>
              <p>
                Thanks for prioritizing this. If anything is unclear or you need support along the
                way, reach out and I&apos;ll assist.
              </p>
              <p className="update-letter-signoff">
                Best,
                <br />
                Gaspi
              </p>
              <p className="update-letter-ps">
                P.S. Thank you for the bonus you sent a few months ago, much appreciated.
              </p>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default Update;
