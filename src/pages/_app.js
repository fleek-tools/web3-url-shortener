import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { Inter } from "next/font/google";
import Providers from "@lib/providers.jsx";

function App({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default App;
