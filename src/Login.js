import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="App">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/activities">Activities</Link></li>
          </ul>
          <div id="login" className="container">
            <div className="row">
              <div className="col-xs-8 col-xs-offset-2">
                <form className="login">
                  <img className="img-responsive" alt="formed app logo" />
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
                      <a href="#">
                        Forgot password?
                      </a>
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
                    <a href="#">
                      Need an account?
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <hr />
      </div>
    );
  }
}

export default Login;
