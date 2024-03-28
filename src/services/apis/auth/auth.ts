import { REQUEST_METHODS, doFetch } from "../fetcher";
import { AUTH_API_ENDPOINTS } from "./authAPIEndPoints";

export const userLoginService = (loginDetails: LoginDetails) => doFetch(AUTH_API_ENDPOINTS.USER_LOGIN, REQUEST_METHODS.POST, loginDetails)
export const userSignupService = (signupDetails: SignUpDetails) => doFetch(AUTH_API_ENDPOINTS.USER_SIGNUP, REQUEST_METHODS.POST, signupDetails) 