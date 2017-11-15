import { createLogic } from "redux-logic";
import {
  failRegister,
  failSession,
  receiveSession,
  REGISTER_USER,
  REQUEST_SESSION,
  requestSession,
} from "./login.actions";

const SIGNUP = "http://localhost:8081/api/signup";
const AUTHENTICATE = "http://localhost:8081/api/authenticate";

const loginLogic = createLogic<any>({
  type: REQUEST_SESSION,

  async process({ httpClient, action }, dispatch, done) {
    const credentials = action.payload;
    try {
      const result = await httpClient.post(AUTHENTICATE, credentials);
      dispatch(receiveSession(result.data));
    } catch (err) {
      console.log(
        "Error trying to authenticate user, credentials, error",
        credentials,
        err,
      );
      dispatch(failSession(err));
    }
    done();
  },
});

const registerLogic = createLogic<any>({
  type: REGISTER_USER,

  async process({ httpClient, action }, dispatch, done) {
    const credentials = action.payload;
    try {
      const result = await httpClient.post(SIGNUP, credentials);
      if (result.status === 200) {
        dispatch(requestSession(credentials));
      }
      dispatch(receiveSession(result.data));
    } catch (err) {
      console.log(
        "Error trying to register user, credentials, error",
        credentials,
        err,
      );
      dispatch(failRegister(err));
    }
    done();
  },
});

export default [loginLogic, registerLogic];
