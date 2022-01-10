import { CryptoProvider } from '../context/CryptoContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <CryptoProvider>
      <Component {...pageProps} />
    </CryptoProvider>
  )
}

export default MyApp
