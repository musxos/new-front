import Layout from "../components/Layout";
import { Web3ContextProvider } from "../context";
import HooksWrapper from "../hooks";
import "../styles/bootstrap.min.css";
import "../styles/fontawesome.all.css";

import "../styles/globals.css";
import "../styles/overrides.css";

function MyApp({ Component, pageProps }) {
  return (
    <Web3ContextProvider>
      <HooksWrapper />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ContextProvider>
  );
}

export default MyApp;
