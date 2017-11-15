import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
import { registerUser, requestSession } from "../login.actions";

class LoginComponent extends React.Component<any, {}> {
  private username: string;
  private password: string;

  constructor(props: any) {
    super(props);

    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);

    this.state = {
      fireRedirect: false,
      error: false,
    };
  }

  public componentDidMount() {
    this.username = "";
  }

  public handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const credentials = {
      username: this.username,
      password: this.password,
    };
    this.props.dispatch(requestSession(credentials));
  }

  public handleUsername(event: React.SyntheticEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.value.length > 0 ? target.value : "";
    if (value.length < 1) {
      return;
    }
    this.username = value;
  }

  public handlePassword(event: React.SyntheticEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.value.length > 0 ? target.value : "";
    if (value.length < 1) {
      return;
    }
    this.password = value;
  }

  public render() {
    console.log(this.props);
    const fireRedirect =
      this.props.session && this.props.session.user.token !== "" ? true : false;
    const disabled = this.props.session.authenticating;
    return (
      <div id="login" className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <form className="login" onSubmit={this.handleSubmit}>
              <img
                className="img-responsive"
                alt="formed app logo"
                src={require("../../../assets/images/logo-wide.png")}
              />
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  onChange={this.handleUsername}
                  disabled={disabled}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  onChange={this.handlePassword}
                  disabled={disabled}
                />
                <p>
                  <a href="/forgot-password">Forgot password?</a>
                </p>
              </fieldset>
              <fieldset className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                  disabled={disabled}
                >
                  Login
                </button>
              </fieldset>
              <p className="text-center">
                <a href="/register">Need an account?</a>
              </p>
            </form>
          </div>
        </div>
        {fireRedirect && <Redirect to={"/community"} />}
      </div>
    );
  }
}

interface StateFromProps {
  session: any;
}

const mapStateToProps = (state: any) => ({
  session: state.session,
});

export default connect<StateFromProps, null, any>(mapStateToProps)(
  LoginComponent
);
