import Head from "next/head";
import { Provider } from "react-redux";
import Notifications from "../components/functional/notifications";
import Layout from "../components/layout/layout";
import { store } from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Notifications />
      <Layout>
        <Head>
          <link rel="icon" href="/favicon.svg"></link>
          <title>Next notes</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
