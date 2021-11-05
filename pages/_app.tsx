import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Footer>
      <Component {...pageProps} />
    </Footer>
  );
}

export default MyApp;
