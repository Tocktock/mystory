import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/features/store";
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          key="ttt"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </CookiesProvider>
  );
}
