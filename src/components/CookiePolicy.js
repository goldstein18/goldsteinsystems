import React, { useState } from 'react';
import './CookiePolicy.css';

const CookiePolicy = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const sections = [
    {
      title: 'What are cookies?',
      content: (
        <>
          <p>
            "Cookies" are small text files that are stored by your browser on your computer's or other device's hard drive. Cookies can be placed on your device directly by one of our websites (first party Cookies) or by a third party through one of our websites (third party Cookies).
          </p>
          <p>
            Cookies can be further categorised into two types:
          </p>
          <ul>
            <li><strong>Session Cookies</strong> are only stored on your device during your browser session. They are deleted when you close your browser.</li>
            <li><strong>Persistent Cookies</strong> remain on your device for a set period of time even after your browser session has ended.</li>
          </ul>
        </>
      )
    },
    {
      title: 'What do we use cookies for?',
      content: (
        <>
          <p>
            Our website uses different categories of Cookies for the purposes described below.
          </p>
          <p>
            <strong>Strictly necessary Cookies</strong>
          </p>
          <p>
            These Cookies are required for the operation of our website and use of its features. They include, for example, Cookies that enable you to log into secure areas of our website. They enable us to remember some of your choices to speed up navigation and provide you with a secure site experience.
          </p>
          <p>
            Our website cannot function without such Cookies and they are therefore automatically set when you visit them. You can set your browser to block or alert you about these Cookies, but some parts of our website will not work.
          </p>
        </>
      )
    },
    {
      title: 'Functional cookies',
      content: (
        <>
          <p>
            Our website may use functional Cookies such as Google Analytics to carry out some analytics on and enhance our website. These Cookies allow us to collect information such as how you use our website, which pages are the most visited or where people visiting our website are located. This enables us to determine what content is of most interest to our users and to ensure that users are finding what they are looking for easily.
          </p>
          <p>
            If you are an account holder on our website, we may use Cookies to collect information about your activity, such as which pages you viewed or which videos you watched. This helps us to understand what content is of interest to you.
          </p>
        </>
      )
    },
    {
      title: 'Targeting cookies',
      content: (
        <>
          <p>
            These Cookies record your visit to our website, the pages you have visited and the links you have followed. We may use this information to make our website more relevant to your interests.
          </p>
          <p>
            We may also use Cookies to enable you to share content on networking or social media sites or for marketing and promotional purposes where you have subscribed to marketing communications from Goldstein Systems.
          </p>
        </>
      )
    },
    {
      title: 'Third-party cookies',
      content: (
        <>
          <p>
            We may use third-party services that set their own cookies on our website. These include:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
            <li><strong>Social Media Platforms:</strong> For sharing content and social media integration</li>
            <li><strong>Marketing Tools:</strong> To provide personalized content and advertisements</li>
            <li><strong>Security Services:</strong> To protect our website and users from malicious activities</li>
          </ul>
          <p>
            These third-party cookies are governed by the respective privacy policies of those companies.
          </p>
        </>
      )
    },
    {
      title: 'Managing cookies',
      content: (
        <>
          <p>
            Strictly necessary Cookies are automatically set on your browser when you visit our website. These Cookies are required for our website to work properly and cannot be disabled.
          </p>
          <p>
            You have the choice to accept all Cookies or manage your Cookie preferences. Please note that certain functionalities of our website might not work if you choose to disable other Cookies.
          </p>
          <p>
            You can also use the settings of your Internet browser to prevent your browser from accepting new Cookies, get notified when new Cookies are dropped on your browser and disable or delete Cookies altogether. Please note that deleting existing Cookies will not prevent Cookies from being set during your next visit to our website.
          </p>
          <p>
            You can find more information about how to manage Cookies in the "help" section of your browser.
          </p>
        </>
      )
    },
    {
      title: 'Cookie retention periods',
      content: (
        <>
          <p>
            Different types of cookies have different retention periods:
          </p>
          <ul>
            <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
            <li><strong>Analytics Cookies:</strong> Typically retained for 24 months</li>
            <li><strong>Preference Cookies:</strong> Retained for 12 months</li>
            <li><strong>Marketing Cookies:</strong> Retained for 12 months or until consent is withdrawn</li>
          </ul>
          <p>
            We regularly review and update our cookie retention periods to ensure they align with our legitimate business interests and legal requirements.
          </p>
        </>
      )
    },
    {
      title: 'Your rights',
      content: (
        <>
          <p>
            Under applicable data protection laws, you have the following rights regarding cookies:
          </p>
          <ul>
            <li><strong>Consent:</strong> You have the right to give or withdraw consent for non-essential cookies</li>
            <li><strong>Access:</strong> You can request information about what cookies are being used</li>
            <li><strong>Control:</strong> You can manage cookie settings through your browser or our cookie preference center</li>
            <li><strong>Deletion:</strong> You can delete cookies that have already been set</li>
          </ul>
        </>
      )
    },
    {
      title: 'Changes to this cookie policy',
      content: (
        <>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
          </p>
          <ul>
            <li>Posting the updated Cookie Policy on our website</li>
            <li>Sending you an email notification (if you have provided your email address)</li>
            <li>Providing notice through our website</li>
          </ul>
          <p>
            We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
          </p>
        </>
      )
    },
    {
      title: 'Contact information',
      content: (
        <>
          <p>
            If you have any questions about this Cookie Policy, please contact us:
          </p>
          <p><strong>Goldstein Systems LTD</strong></p>
          <p>Email: <a href="mailto:privacy@goldsteinsystems.com">privacy@goldsteinsystems.com</a></p>
          <p>General Inquiries: <a href="mailto:michael@goldsteinsystems.com">michael@goldsteinsystems.com</a></p>
        </>
      )
    }
  ];

  return (
    <div className="cookie-policy-page">
      <div className="cookie-hero">
        <div className="hero-background"></div>
        <div className="hero-card">
          <div className="container">
            <p className="breadcrumb">About Goldstein Systems</p>
            <h1>Cookie Policy</h1>
            <p className="hero-description">
              Goldstein Systems uses cookies to improve your experience throughout our website. More information about how and why we use cookies and how you can manage them can be found in this policy.
            </p>
          </div>
        </div>
      </div>

      <div className="cookie-container">
        <div className="cookie-content">
          <div className="cookie-intro">
            <p><em>Last updated on October 2025</em></p>
            <p>
              This Cookie Policy applies to the website(s) and mobile applications (together, the "Sites") provided by Goldstein Systems LTD ("Goldstein Systems", "we", "us"). The Sites include goldsteinsystems.com and additional websites or mobile applications produced and managed by Goldstein Systems.
            </p>
            <p>
              This Cookie Policy explains how and why cookies, web beacons, pixels and other similar technologies (collectively "Cookies") may be stored on and accessed from your device when you use or visit our Sites and how you can manage your preferences. This Cookie Policy should be read together with our Privacy Policy and our Terms of Use.
            </p>
          </div>

          <div className="accordion-list">
            {sections.map((section, index) => (
              <div key={index} className="accordion-item">
                <button 
                  className={`accordion-header ${openSections[index] ? 'active' : ''}`}
                  onClick={() => toggleSection(index)}
                >
                  <span>{section.title}</span>
                  <i className={`fas fa-chevron-${openSections[index] ? 'up' : 'down'}`}></i>
                </button>
                {openSections[index] && (
                  <div className="accordion-content">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="cookie-footer">
            <p><em>Last Updated: October 2025</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
