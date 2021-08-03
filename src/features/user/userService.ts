import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { setAlarmAndShow, MessageType } from "../alarm/alarmSlice";

const AUTH_URL = "http://localhost:8080/auth/user";
export const REGISTER_URL = AUTH_URL + "/sign-up";
export const LOGIN_URL = AUTH_URL + "/sign-in";
export const JWT_TOKEN_CHECK_URL = AUTH_URL + "has-token";

const signUpService = async (
  username: string,
  email: string,
  password: string
) => {
  return axios
    .post(REGISTER_URL, { username, email, password })
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((err) => console.log(`register failed error : ${err}`));
};

const signInService = async (email: string, password: string) => {
  return axios
    .post(LOGIN_URL, { email, password })
    .then((res: AxiosResponse) => {
      if (!res.data.error) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.accessToken}`;
      }
      return res.data;
    })
    .catch((err) => console.log(`login failed error : ${err}`));
};

const tokenCheckReq = async (accessToken: string) => {
  await axios.get(JWT_TOKEN_CHECK_URL, {
    headers: { Authorization: ` Bearer ${accessToken}` },
  });
  return true;
};

export { signUpService, signInService, tokenCheckReq };
