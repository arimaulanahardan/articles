import axios from "axios";
import { ISignup,ISignin, IAuthResponse } from "@/interfaces";

const SIGNUP_API_URL = "https://extra-brooke-yeremiadio-46b2183e.koyeb.app/api/auth/local/register";
const SIGNIN_API_URL = "https://extra-brooke-yeremiadio-46b2183e.koyeb.app/api/auth/local";

export const signup = async (signupData: ISignup): Promise<IAuthResponse> => {
    const response = await axios.post<IAuthResponse>(SIGNUP_API_URL, signupData);
    return response.data;
};

export const signin = async (signinData: ISignin): Promise<IAuthResponse> => {
    const response = await axios.post<IAuthResponse>(SIGNIN_API_URL, signinData);
    return response.data;
};

