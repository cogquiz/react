import { REQUEST_METHODS, doFetch } from "../fetcher";
import { USERPROFILE_API_ENDPOINTS } from "./userprofileAPIEndPoints";


export const userProfileOptionService = () => doFetch(USERPROFILE_API_ENDPOINTS.FETCH_OPTIONS, REQUEST_METHODS.GET)
export const userProfileDetailsService = (userId: string) => doFetch(`${USERPROFILE_API_ENDPOINTS.FETCH_USERPROFILE_DETAIL}${userId}`, REQUEST_METHODS.GET)
export const userDetailsService = (userId: string) => doFetch(`${USERPROFILE_API_ENDPOINTS.FETCH_USER_DETAIL}${userId}`, REQUEST_METHODS.GET)
export const updateUserProfileService = (data: any) => doFetch(USERPROFILE_API_ENDPOINTS.UPDATE_USER_PROFILE, REQUEST_METHODS.PUT, data)
export const addNewParticipant = (data: any) => doFetch(USERPROFILE_API_ENDPOINTS.ADD_PARTICIPANT, REQUEST_METHODS.POST, data)
export const resetPassword = (data: any) => doFetch(USERPROFILE_API_ENDPOINTS.RESET_PASSWORD, REQUEST_METHODS.PUT, data)