import { Cookies } from "react-cookie";
import { CookieSetOptions } from "../@types";

const cookie = new Cookies();

export const getCookie = (key: string) => cookie.get(key);

export const setCookie = (
  key: string,
  value: string,
  options?: CookieSetOptions | undefined
) => cookie.set(key, value, options);

export const removeCookie = (
  key: string,
  options?: CookieSetOptions | undefined
) => cookie.remove(key, options);
