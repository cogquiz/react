import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-hot-toast";

const instance = axios.create();

instance.interceptors.response.use(
  (res) => res,
  (error) => {

    if (
      typeof error?.config?.headers?.showToast === "boolean" &&
      !error?.config?.headers?.showToast
    )
      throw error;

    if (
      (error?.response?.status >= 400 && error?.config?.method !== "get") ||
      error?.response?.status >= 500
    ) {
      if (typeof error?.response?.data.message === "string") {
        toast.error(error?.response?.data.message);
      } else if (typeof error?.response?.data === "string") {
        toast.error(error?.response?.data);
      } else if (typeof error?.response?.data?.response === "string") {
        toast.error(error?.response?.data?.response);
      } else {
        toast.error("Server error: ");
      }
    }
    if (error.message === "Network Error") {
      toast.error(error.message);
    }
    throw error;
  }
);

export const REQUEST_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const REQUEST_CONTENT_TYPE = {
  JSON: "application/json",
  MULTIPART: "multipart/form-data",
};

// export const pdfUrl = "https://0435-123-201-220-159.ngrok-free.app/public/"
export const pdfUrl = `http://localhost:3001/public/`;

export const doFetch = (
  url: string,
  method: string = REQUEST_METHODS.GET,
  body: unknown = {},
  otherOptions?: {
    contentType?: string;
    showToast?: boolean;
  } & AxiosRequestConfig
) => {
  const { contentType, signal, showToast, ...others } = otherOptions ?? {};

  // const apiUrl = `https://0435-123-201-220-159.ngrok-free.app${url}`;
  const apiUrl = `http://localhost:3001${url}`;

  const options = {
    ...others,
    url: apiUrl,
    method,
    headers: {
      "Content-Type": contentType ?? REQUEST_CONTENT_TYPE.JSON,
      "ngrok-skip-browser-warning": true,
    } as any,
  } as any;

  const token = localStorage.getItem("authToken");

  if (token) {
    options.headers.authorization = `${token}`;
  }

  if (showToast !== undefined) {
    options.headers.showToast = showToast;
  }

  // signal to cancel request
  if (signal) {
    options.signal = signal;
  }

  if (contentType && contentType.includes("json")) {
    options.data = JSON.stringify(body);
  } else {
    options.data = body;
  }

  return instance(options);
};
