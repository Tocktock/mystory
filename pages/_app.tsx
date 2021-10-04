import "tailwindcss/tailwind.css";
import Head from "next/head";
import {Provider} from "react-redux";
import store from "../src/features/store";
import {CookiesProvider} from "react-cookie";
import ModalBackground from "../src/components/modal/ModalBackground";
import Alarm from "../src/components/alarm/Alarm";

export default function App({Component, pageProps}) {
    return (
        <CookiesProvider>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    key="ttt"
                />
                <title> my story </title>
            </Head>
            <Provider store={store}>
                <Alarm/>
                <ModalBackground/>
                <Component {...pageProps} />
            </Provider>
        </CookiesProvider>
    );
}
