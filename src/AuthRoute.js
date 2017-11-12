import React from 'react';
import {Route, LoginRedirect} from 'react-router-dom';
import AuthCheck from './AuthenticationCheck';

const AuthRoute = (props) => {
  return (<AuthCheck>
    {({ success, message }) => {
      if (success) {
        return (<Route {...props} />);
      }

      // cleaning out props
      // eslint-disable-next-line no-unused-vars, react/prop-types
      const { component, children, render, ...rest } = props;
      return (<Route {...rest} render={() => <LoginRedirect returnUrl={window.location.href} message={message} />} />);
    }}
  </AuthCheck>);
};

export default AuthRoute;