import React, { useState } from 'react';
import './Terms.css';

const Terms = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const sections = [
    {
      title: 'Acceptance of terms',
      content: (
        <>
          <p>
            Welcome to the Goldstein Systems LTD ("Goldstein Systems," "we," "us," or "our") website (the "Site"). By accessing or using this Site, you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use this Site.
          </p>
          <p>
            These Terms apply to all visitors, users, and others who access or use the Site. By using this Site, you represent and warrant that you have the legal capacity to enter into these Terms.
          </p>
        </>
      )
    },
    {
      title: 'Use of site',
      content: (
        <>
          <p>
            You may use this Site for lawful purposes only. You agree not to use the Site:
          </p>
          <ul>
            <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
            <li>To impersonate or attempt to impersonate Goldstein Systems, a Goldstein Systems employee, another user, or any other person or entity</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Site, or which, as determined by us, may harm Goldstein Systems or users of the Site</li>
          </ul>
        </>
      )
    },
    {
      title: 'Intellectual property rights',
      content: (
        <>
          <p>
            The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Goldstein Systems, its licensors, or other providers of such material and are protected by United Kingdom and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p>
            You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as follows:
          </p>
          <ul>
            <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
            <li>You may store files that are automatically cached by your Web browser for display enhancement purposes</li>
            <li>You may print or download one copy of a reasonable number of pages of the Site for your own personal, non-commercial use</li>
          </ul>
        </>
      )
    },
    {
      title: 'Trademarks',
      content: (
        <p>
          The Goldstein Systems name, the Goldstein Systems logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Goldstein Systems or its affiliates or licensors. You must not use such marks without the prior written permission of Goldstein Systems. All other names, logos, product and service names, designs, and slogans on this Site are the trademarks of their respective owners.
        </p>
      )
    },
    {
      title: 'Prohibited uses',
      content: (
        <>
          <p>
            You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:
          </p>
          <ul>
            <li>In any way that could disable, overburden, damage, or impair the Site or interfere with any other party's use of the Site</li>
            <li>To use any robot, spider, or other automatic device, process, or means to access the Site for any purpose, including monitoring or copying any of the material on the Site</li>
            <li>To introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
            <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Site, the server on which the Site is stored, or any server, computer, or database connected to the Site</li>
          </ul>
        </>
      )
    },
    {
      title: 'Links to third-party websites',
      content: (
        <p>
          The Site may contain links to third-party websites or resources. These links are provided for your convenience only. Goldstein Systems has no control over the contents of those sites or resources and accepts no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any of the third-party websites linked to this Site, you do so entirely at your own risk and subject to the terms and conditions of use for such websites.
        </p>
      )
    },
    {
      title: 'Disclaimer of warranties',
      content: (
        <>
          <p>
            YOUR USE OF THE SITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE SITE IS AT YOUR OWN RISK. THE SITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE SITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          </p>
          <p>
            NEITHER GOLDSTEIN SYSTEMS NOR ANY PERSON ASSOCIATED WITH GOLDSTEIN SYSTEMS MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SITE. GOLDSTEIN SYSTEMS HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
          </p>
        </>
      )
    },
    {
      title: 'Limitation of liability',
      content: (
        <>
          <p>
            IN NO EVENT SHALL GOLDSTEIN SYSTEMS, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE SITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
          </p>
          <p>
            IN NO EVENT SHALL GOLDSTEIN SYSTEMS' TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION WHETHER IN CONTRACT, TORT (INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE) OR OTHERWISE EXCEED £1. SOME JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES IN WHICH CASE SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO ALL USERS.
          </p>
        </>
      )
    },
    {
      title: 'Indemnification',
      content: (
        <p>
          You hereby indemnify, defend, and hold harmless Goldstein Systems and all of its predecessors, successors, parents, subsidiaries, affiliates, officers, directors, shareholders, investors, employees, agents, representatives and attorneys and their respective heirs, successors and assigns (collectively, the "Indemnified Parties") from and against any and all liability and costs, including, without limitation, reasonable attorneys' fees, incurred by any or all the Indemnified Parties in connection with any claim arising out of or relating to: (i) your access to or use of the Site, or (ii) any breach by you of these Terms and Conditions or the representations, warranties, and covenants you have made by agreeing to these Terms and Conditions.
        </p>
      )
    },
    {
      title: 'Enforcement of terms and conditions',
      content: (
        <>
          <p>
            These Terms and Conditions are governed and interpreted pursuant to the laws of England and Wales, United Kingdom, notwithstanding any principles of conflicts of law. You expressly agree that exclusive jurisdiction resides in the courts of England and Wales.
          </p>
          <p>
            If any part of these Terms and Conditions is unlawful, void, or unenforceable, that part shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.
          </p>
        </>
      )
    },
    {
      title: 'Changes to terms',
      content: (
        <p>
          We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Site thereafter. Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
        </p>
      )
    },
    {
      title: 'Entire agreement',
      content: (
        <p>
          These Terms and Conditions constitute the entire agreement between you and Goldstein Systems LTD with respect to the subject matter of these Terms and Conditions and supersedes and replaces all prior or contemporaneous understandings or agreements, written or oral, regarding that subject matter. Any waiver of any provision of these Terms and Conditions shall be effective only if in writing and signed by Goldstein Systems. Any failure to enforce any provision of these Terms and Conditions shall not constitute a waiver of a future breach of that or any other provision of these Terms and Conditions.
        </p>
      )
    }
  ];

  return (
    <div className="terms-page">
      <div className="terms-hero">
        <div className="hero-background"></div>
        <div className="hero-card">
          <div className="container">
            <p className="breadcrumb">About Goldstein Systems</p>
            <h1>Terms of Use</h1>
            <p className="hero-description">
              These terms and conditions ("Terms and Conditions") constitute a binding legal agreement between you and Goldstein Systems LTD ("Goldstein Systems") governing your access to and use of the website and its Content located at goldsteinsystems.com (the "Site").
            </p>
          </div>
        </div>
      </div>

      <div className="terms-container">
        <div className="terms-content">
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

          <div className="terms-footer">
            <p><em>Last Updated: October 2025</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
