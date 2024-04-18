import Cookies from "js-cookie";
import { STORAGE } from "../constants/storage";

export const localToken = {
  get: () => JSON.parse(localStorage.getItem(STORAGE.token)),
  set: () => localStorage.setItem(STORAGE.token, JSON.stringify(token)),
  remove: () => localStorage.removeItem(STORAGE.token),
};

export const cookieToken = {
  get: () => {
    return Cookies.get(STORAGE.token)
      ? JSON.parse(Cookies.get(STORAGE.token))
      : undefined;
  },
  set: (token) =>
    token ? Cookies.set(STORAGE.token, JSON.stringify(token)) : undefined,
  remove: () => Cookies.remove(STORAGE.token),
};

const tokenMethod = {
  get: () => {
    return cookieToken.get();
  },
  set: (token) => {
    cookieToken.set(token);
  },
  remove: () => {
    cookieToken.remove();
  },
};

export default tokenMethod;
