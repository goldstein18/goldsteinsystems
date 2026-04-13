import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_KEYWORDS =
  'cybersecurity, software development, digital transformation, AI solutions, enterprise security, consulting services, technology strategy, Goldstein Systems, software engineering, risk management, data strategy, venture building, immersive technologies';

const setMetaName = (name, content) => {
  const el = document.querySelector(`meta[name="${name}"]`);
  if (el) el.setAttribute('content', content);
};

const setMetaProperty = (property, content) => {
  const el = document.querySelector(`meta[property="${property}"]`);
  if (el) el.setAttribute('content', content);
};

const SEOHead = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const ogImage = origin ? `${origin}/logo.png` : 'https://goldsteinsystems.com/logo.png';

    const applySocial = (title, description) => {
      setMetaProperty('og:title', title);
      setMetaProperty('og:description', description);
      setMetaProperty('og:url', pageUrl);
      setMetaProperty('og:image', ogImage);

      setMetaName('twitter:title', title);
      setMetaName('twitter:description', description);
      setMetaName('twitter:url', pageUrl);
      setMetaName('twitter:image', ogImage);
    };

    if (path === '/propuestaG5499') {
      document.title = 'Propuesta de Desarrollo Ecommerce | Goldstein Systems';

      setMetaName(
        'description',
        'Propuesta profesional de desarrollo web ecommerce. Solución completa con diseño personalizado, integración Stripe, panel de administración y seguridad empresarial. 72,000 MXN.'
      );

      applySocial(
        'Propuesta de Desarrollo Ecommerce | Goldstein Systems',
        'Propuesta profesional de desarrollo web ecommerce. Solución completa con diseño personalizado, integración Stripe y panel de administración. 72,000 MXN.'
      );

      setMetaName(
        'keywords',
        'propuesta ecommerce, desarrollo web, diseño personalizado, Stripe, panel administración, Goldstein Systems, 72,000 MXN, software development'
      );
      return;
    }

    if (path === '/booking') {
      document.title = 'Schedule a consultation | Goldstein Systems';

      setMetaName(
        'description',
        'Book a 30-minute call with Goldstein Systems. Choose a time that works for you—cybersecurity, software delivery, and technology strategy.'
      );

      applySocial(
        'Schedule a consultation | Goldstein Systems',
        'Book a 30-minute call with our team. Cybersecurity, software development, and technology strategy—simple scheduling with email confirmation.'
      );

      setMetaName('keywords', DEFAULT_KEYWORDS);
      return;
    }

    if (path === '/') {
      document.title = 'Goldstein Systems | Cyber Intelligence & Consulting.';

      setMetaName(
        'description',
        'Global Cybersecurity & Software Development Firm | Goldstein Systems ® — Leading provider of cybersecurity solutions and custom software development worldwide.'
      );

      applySocial(
        'Goldstein Systems | Cyber Intelligence & Consulting.',
        'Global cybersecurity and software development firm. We help organizations secure digital assets and build innovative solutions—from strategy to implementation.'
      );

      setMetaName('keywords', DEFAULT_KEYWORDS);
      return;
    }

    document.title = 'Goldstein Systems | Cyber Intelligence & Consulting.';

    setMetaName(
      'description',
      'Goldstein Systems — cybersecurity and software development. Secure digital assets and build innovative solutions with an experienced technology partner.'
    );

    applySocial(
      'Goldstein Systems | Cyber Intelligence & Consulting.',
      'Cybersecurity and software development firm helping organizations secure digital assets and deliver innovative solutions.'
    );

    setMetaName('keywords', DEFAULT_KEYWORDS);
  }, [location.pathname]);

  return null;
};

export default SEOHead;
