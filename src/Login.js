import React, { Component } from "react";
import { connect } from 'react-redux';
import {login} from './actions/auth/login';

class Login extends Component {
  
  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    console.log(this.userName.value);
    console.log(this.password.value);
    this.props.dispatch(login(this.userName.value, this.password.value));
  }
  
  render() {
    return (
      <div className="App">
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
                      ref={c => (this.userName = c)}
                      onKeyPress={e => this.handleKeyPress(e)}
                      autoFocus="true"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      ref={c => (this.password = c)}
                      onKeyPress={e => this.handleKeyPress(e)}
                    />
                    <p>
                      <a href="#">
                        Forgot password?
                      </a>
                    </p>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      onClick={() => this.handleSubmit()}
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

export default connect(state => ({
  errorMessage: state.get('session').get('errorMessage'),
}))(Login);

Login.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  errorMessage: React.PropTypes.string.isRequired,
};

Login.defaultProps = {
  errorMessage: '',
};
