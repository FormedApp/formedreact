import * as React from "react";
import { connect } from "react-redux";

class Login extends React.Component<any, {}> {
  public render() {
    return (
      <div id="login" className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <form className="login">
              <img
                className="img-responsive"
                alt="formed app logo"
                src={require("../../../assets/images/logo-wide.png")}
              />
              <fieldset className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <p>
                  <a href="#">Forgot password?</a>
                </p>
              </fieldset>
              <fieldset className="form-group">
                <input
                  type="button"
                  value="Login"
                  className="btn btn-primary btn-block"
                />
              </fieldset>
              <p className="text-center">
                <a href="#">Need an account?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
