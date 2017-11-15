import { Action } from "../app/app.store";

export const FAIL_SESSION = "FAIL_SESSION";
export const REQUEST_SESSION = "REQUEST_SESSION";
export const RECEIVE_SESSION = "RECEIVE_SESSION";
export const REGISTER_USER = "REGISTER_USER";
export const FAIL_REGISTER = "FAIL_REGISTER";

export const requestSession = (credentials: any) => {
  return {
    type: REQUEST_SESSION,
    payload: credentials
  };
};

export const receiveSession = (user: any): Action => {
  return {
    type: RECEIVE_SESSION,
    payload: user
  };
};

export const failSession = (err: any) => {
  return {
    type: FAIL_SESSION,
    payload: err
  };
};

export const registerUser = (credentials: any) => {
  return {
    type: REGISTER_USER,
    payload: credentials
  };
};

export const failRegister = (err: any) => {
  return {
    type: FAIL_REGISTER,
    payload: err
  };
};
