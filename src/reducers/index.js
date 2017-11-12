import { combineReducers } from 'redux-immutable';
import login from './login-reducer';
// Reducers

const appReducer = combineReducers({
  session: login,
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'SUCCESS_LOGOUT') {
    newState = undefined;
  }

  return appReducer(newState, action);
};

export default rootReducer;
