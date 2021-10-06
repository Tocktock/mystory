import "tailwindcss/tailwind.css";
import Head from "next/head";
import {Provider} from "react-redux";
import store from "../src/features/store";
import {CookiesProvider} from "react-cookie";
import ModalBackground from "../src/components/modal/ModalBackground";
import Alarm from "../src/components/alarm/Alarm";
import App from 'next/app'
import axios from "axios";

export default function MyApp({Component, pageProps}) {
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

MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext)
    const {ctx} = appContext;
    const cookieReq = ctx.req ? ctx.req.headers.cookie : null
    await axios.get(process.env.SERVER_URI+"/jwt-auth",{
        headers: {
            Cookie : cookieReq+';',
        }
    }).then((v)=>console.log(v.data)).catch((v)=>console.log(v))
    return {...appProps}
}