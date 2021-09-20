import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
// import 'bootstrap/dist/css/bootstrap.css';
import 'tailwindcss/tailwind.css';
// import '../styles/style.css';
// import '../styles/bootsnav.css';
// import '../styles/animate.css';
// import '../styles/responsive.css';
// import '../styles/plugins.min.css';
// import '../styles/owl.theme.default.min.css';
// import '../styles/owl.carousel.min.css';
// import '../styles/font-awesome.min.css';
// import '../styles/magnific-popup.css';
// import '../styles/flaticon-set.css';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
      TagManager.initialize({ gtmId: 'GTM-TWS6XC8' });
  }, []);
  return <Component {...pageProps}/>
}

export default MyApp
