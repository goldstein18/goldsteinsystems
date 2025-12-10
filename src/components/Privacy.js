import React, { useState } from 'react';
import './Privacy.css';

const Privacy = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const sections = [
    {
      title: 'Information we collect',
      content: (
        <>
          <p>
            Goldstein Systems LTD ("Goldstein Systems," "we," "us," or "our") collects personal data when you visit our website, use our services, or interact with us. The types of personal data we collect include:
          </p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number, company name, and job title</li>
            <li><strong>Website Usage Data:</strong> IP address, browser type, device information, pages visited, and time spent on our site</li>
            <li><strong>Communication Data:</strong> Information you provide when contacting us, subscribing to our newsletter, or requesting services</li>
            <li><strong>Technical Data:</strong> Cookies, analytics data, and other tracking technologies used to improve our services</li>
          </ul>
        </>
      )
    },
    {
      title: 'How we use your information',
      content: (
        <>
          <p>
            We use your personal data for the following purposes:
          </p>
          <ul>
            <li>To provide and improve our cybersecurity and software development services</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To send you relevant information about our services and industry insights</li>
            <li>To analyze website usage and optimize user experience</li>
            <li>To comply with legal obligations and protect our legitimate business interests</li>
            <li>To prevent fraud and ensure the security of our systems and services</li>
          </ul>
        </>
      )
    },
    {
      title: 'Legal basis for processing',
      content: (
        <>
          <p>
            We process your personal data based on the following legal grounds:
          </p>
          <ul>
            <li><strong>Consent:</strong> When you have given clear consent for us to process your personal data for specific purposes</li>
            <li><strong>Contract:</strong> When processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract</li>
            <li><strong>Legitimate Interest:</strong> When we have a legitimate business interest in processing your data, such as improving our services or preventing fraud</li>
            <li><strong>Legal Obligation:</strong> When processing is necessary to comply with a legal obligation we are subject to</li>
          </ul>
        </>
      )
    },
    {
      title: 'Information sharing and disclosure',
      content: (
        <>
          <p>
            We may share your personal data with:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and providing our services</li>
            <li><strong>Business Partners:</strong> Trusted partners who work with us to deliver integrated solutions</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and interests</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, sale of assets, or acquisition of our business</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal data to third parties for their marketing purposes.
          </p>
        </>
      )
    },
    {
      title: 'Data security and retention',
      content: (
        <>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Staff training on data protection and security</li>
          </ul>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
        </>
      )
    },
    {
      title: 'Your rights',
      content: (
        <>
          <p>
            Under applicable data protection laws, you have the following rights regarding your personal data:
          </p>
          <ul>
            <li><strong>Access:</strong> Request access to the personal data we hold about you</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete personal data</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data in certain circumstances</li>
            <li><strong>Restriction:</strong> Request restriction of processing of your personal data</li>
            <li><strong>Portability:</strong> Request transfer of your personal data to another organization</li>
            <li><strong>Objection:</strong> Object to processing of your personal data for certain purposes</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
          </ul>
        </>
      )
    },
    {
      title: 'Cookies and tracking technologies',
      content: (
        <>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us:
          </p>
          <ul>
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Provide personalized content and advertisements</li>
            <li>Improve website functionality and performance</li>
          </ul>
          <p>
            You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
          </p>
        </>
      )
    },
    {
      title: 'International data transfers',
      content: (
        <>
          <p>
            As a global technology company, we may transfer your personal data to countries outside the United Kingdom. When we do so, we ensure that appropriate safeguards are in place to protect your data, including:
          </p>
          <ul>
            <li>Standard contractual clauses approved by the European Commission</li>
            <li>Adequacy decisions by relevant data protection authorities</li>
            <li>Other appropriate safeguards as required by applicable law</li>
          </ul>
        </>
      )
    },
    {
      title: 'Children\'s privacy',
      content: (
        <p>
          Our services are not intended for individuals under the age of 16. We do not knowingly collect personal data from children under 16. If we become aware that we have collected personal data from a child under 16, we will take steps to delete such information promptly.
        </p>
      )
    },
    {
      title: 'Changes to this privacy policy',
      content: (
        <>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
          </p>
          <ul>
            <li>Posting the updated Privacy Policy on our website</li>
            <li>Sending you an email notification (if you have provided your email address)</li>
            <li>Providing notice through our services</li>
          </ul>
          <p>
            We encourage you to review this Privacy Policy periodically to stay informed about how we protect your personal data.
          </p>
        </>
      )
    },
    {
      title: 'Contact information',
      content: (
        <>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <p><strong>Goldstein Systems LTD</strong></p>
          <p>Email: <a href="mailto:privacy@goldsteinsystems.com">privacy@goldsteinsystems.com</a></p>
          <p>General Inquiries: <a href="mailto:michael@goldsteinsystems.com">michael@goldsteinsystems.com</a></p>
          <p>
            You also have the right to lodge a complaint with the relevant data protection authority if you believe we have not handled your personal data in accordance with applicable law.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <div className="hero-background"></div>
        <div className="hero-card">
          <div className="container">
            <p className="breadcrumb">About Goldstein Systems</p>
            <h1>Privacy Policy</h1>
            <p className="hero-description">
              This Privacy Policy explains how Goldstein Systems LTD ("Goldstein Systems") collects, uses, and protects your personal data when you visit our website or use our cybersecurity and software development services.
            </p>
          </div>
        </div>
      </div>

      <div className="privacy-container">
        <div className="privacy-content">
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

          <div className="privacy-footer">
            <p><em>Last Updated: October 2025</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
