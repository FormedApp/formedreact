import { BrowserRouter as Router } from "react-router-dom";
import { REQUEST_LOGIN, SUCCESS_LOGIN, FAIL_LOGIN } from '../../constants';

function requestLogin() {
  return { type: REQUEST_LOGIN };
}
function successLogin(payload) {
  return { type: SUCCESS_LOGIN, payload };
}
function failLogin(payload) {
  return { type: FAIL_LOGIN, payload };
}

export function login(name, password) {
  return (dispatch) => {
    dispatch(requestLogin());
    return fetch(`http://localhost:8080/api/authenticate`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    })
      .then(response =>
        response.json()
          .then(user => ({ user, response })))
      .then(({ user, response }) => {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(failLogin(user));
          return Promise.reject(user);
        }
        localStorage.setItem('token', user.token);
        // Dispatch the success action
        dispatch(successLogin(user));
        Router.transitionTo("/activities");
        return Promise.resolve(user);
      })
      .catch(err => dispatch(failLogin(err)));
  };
}

export function tokenLogin(token) {
  return (dispatch) => {
    dispatch(requestLogin());
    return fetch(`http://localhost:8080/authenticate`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(response =>
        response.json()
          .then(user => ({ user, response })))
      .then(({ user, response }) => {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(failLogin(user));
          if (Router.getCurrentLocation().pathname !== '/login') {
            Router.push('login');
          }
          return Promise.reject(user);
        }
          // Dispatch the success action
        dispatch(successLogin(user));
        return Promise.resolve(user);
      })
      .catch(err => dispatch(failLogin(err)));
  };
}
