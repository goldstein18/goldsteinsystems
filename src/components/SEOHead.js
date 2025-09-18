import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = () => {
  const location = useLocation();

  useEffect(() => {
    const updateMetaTags = () => {
      if (location.pathname === '/propuestaG5499') {
        // Update title
        document.title = 'Propuesta de Desarrollo Ecommerce | Goldstein Systems';
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', 'Propuesta profesional de desarrollo web ecommerce. Solución completa con diseño personalizado, integración Stripe, panel de administración y seguridad empresarial. 72,000 MXN.');
        }
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
          ogTitle.setAttribute('content', 'Propuesta de Desarrollo Ecommerce | Goldstein Systems');
        }
        
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
          ogDescription.setAttribute('content', 'Propuesta profesional de desarrollo web ecommerce. Solución completa con diseño personalizado, integración Stripe y panel de administración. 72,000 MXN.');
        }
        
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
          ogUrl.setAttribute('content', window.location.href);
        }
        
        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
          twitterTitle.setAttribute('content', 'Propuesta de Desarrollo Ecommerce | Goldstein Systems');
        }
        
        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterDescription) {
          twitterDescription.setAttribute('content', 'Propuesta profesional de desarrollo web ecommerce. Solución completa con diseño personalizado, integración Stripe y panel de administración. 72,000 MXN.');
        }
        
        const twitterUrl = document.querySelector('meta[property="twitter:url"]');
        if (twitterUrl) {
          twitterUrl.setAttribute('content', window.location.href);
        }
        
        // Add specific keywords for the proposal
        const keywords = document.querySelector('meta[name="keywords"]');
        if (keywords) {
          keywords.setAttribute('content', 'propuesta ecommerce, desarrollo web, diseño personalizado, Stripe, panel administración, Goldstein Systems, 72,000 MXN, software development');
        }
      } else {
        // Reset to default for home page
        document.title = 'Global Cybersecurity & Software Development Firm | Goldstein Systems ®';
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', 'Global Cybersecurity & Software Development Firm | Goldstein Systems ® - Leading provider of cybersecurity solutions and custom software development services worldwide.');
        }
      }
    };

    updateMetaTags();
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default SEOHead;
