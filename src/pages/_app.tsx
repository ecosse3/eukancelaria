import '../styles/tailwind.css';
import '../styles/bubbles.css';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import type { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import GlobalStyles from '../styles/GlobalStyles';

library.add(faHome, faPhone, faEnvelope, faFacebook, faTwitter, faLinkedin, faSmile);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Checks for GA ID and only turns on GA in production
    if (process.env.NEXT_PUBLIC_ANALYTICS_ID && process.env.NODE_ENV === 'production') {
      ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_ID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  });

  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
