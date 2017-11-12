import { Map, fromJS } from 'immutable';
import { SUCCESS_LOGIN, FAIL_LOGIN, SUCCESS_LOGOUT } from '../constants';

const intialState = Map({
  token: null,
  isAuthenticated: false,
  errorMessage: '',
});

function login(state = intialState, action) {
  switch (action.type) {
    case (SUCCESS_LOGIN):
      return fromJS({
        isAuthenticated: true,
        token: action.payload.token,
     });
    case (FAIL_LOGIN):
      return fromJS({
        errorMessage: action.payload.msg,
      });
    case (SUCCESS_LOGOUT):
      return intialState;
    default:
      return state;
  }
}

export default login;
