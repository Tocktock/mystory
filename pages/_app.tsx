import "tailwindcss/tailwind.css";
import Head from "next/head";
import {Provider} from "react-redux";
import store from "../src/features/store";
import {CookiesProvider} from "react-cookie";
import ModalBackground from "../src/components/modal/ModalBackground";
import Alarm from "../src/components/alarm/Alarm";

export default function App({Component, pageProps}) {
    // if (cookies.user && !userState.isAuthenticated) {
    //   const result = axios
    //     .post(
    //       "http://localhost:8080/auth/user",
    //       {},
    //       {
    //         headers: { Authorization: ` Bearer ${cookies.user}` },
    //       }
    //     )
    //     .then((res) => {
    //       if (res.data.username)
    //         dispatch(
    //           userAuthenticated({
    //             accessToken: cookies.user,
    //             isAuthenticated: true,
    //             username: res.data.username,
    //             email: res.data.email,
    //           })
    //         );
    //       return res.data;
    //     });
    // } else if (!cookies.user && userState.isAuthenticated) {
    //   dispatch(
    //     userAuthenticated({
    //       accessToken: "",
    //       isAuthenticated: false,
    //       username: "",
    //       email: "",
    //     })
    //   );
    //   axios.defaults.headers.common["Authorization"] = "";
    // }

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
