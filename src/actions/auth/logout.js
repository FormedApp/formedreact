import { hashHistory } from 'react-router';
import { SUCCESS_LOGOUT } from '../../constants';

function successLogout() {
  return { type: SUCCESS_LOGOUT };
}

export default function logout() {
  return (dispatch) => {
    hashHistory.push('/login');
    localStorage.removeItem('token');
    dispatch(successLogout());
  };
}
