import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import Providers from "../lib/providers";

function App({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default App;
