/**
 * @Imports
 */
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import { useEffect } from 'react'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}

export default MyApp;