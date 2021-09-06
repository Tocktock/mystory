import axios, {AxiosResponse} from "axios";

const AUTH_URL = "http://localhost:8080";

export const REGISTER_URL = AUTH_URL + "/sign-up";
export const LOGIN_URL = AUTH_URL + "/sign-in";
export const JWT_TOKEN_CHECK_URL = AUTH_URL + "/has-token";

const signUpService = async (
    username: string,
    email: string,
    password: string
) => {
    return axios
        .post(REGISTER_URL, {username, email, password})
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((err) => {
            return {err: `회원가입 실패 : ${err}`}
        })
}


const signInService = async (email: string, password: string) => {
    return axios
        .post(LOGIN_URL, {email, password})
        .then((res: AxiosResponse) => {
            axios.defaults.headers.common["Authorization"] = `Bearer ${res.data}`;
            return res.data;
        })
        .catch((err) => {
            return {err: `로그인 실패 : ${err}`}
        })
};

const tokenCheckReq = async (accessToken: string) => {
    await axios.get(JWT_TOKEN_CHECK_URL, {
        headers: {Authorization: ` Bearer ${accessToken}`},
    });
    return true;
};

export {signUpService, signInService, tokenCheckReq};
