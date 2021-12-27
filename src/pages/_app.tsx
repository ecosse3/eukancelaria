import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faPhone, faEnvelope);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
