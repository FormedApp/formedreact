import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
import { registerUser, requestSession } from "../login.actions";
import Login from "../../app/components/Login";

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
      error: false
    };
  }

  public componentDidMount() {
    this.username = "";
  }

  public handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const credentials = {
      username: this.username,
      password: this.password
    };
    console.log(this.props);
    if (this.props.match.path === "/register") {
      this.props.dispatch(registerUser(credentials));
    } else {
      this.props.dispatch(requestSession(credentials));
    }
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
      // <Login />
      <div className="franke-login-form uk-full-height ">
        <form onSubmit={this.handleSubmit}>
          <fieldset className="uk-fieldset">
            <div className="uk-margin">
              <input
                className="uk-input"
                type="text"
                placeholder="Username"
                onChange={this.handleUsername}
                disabled={disabled}
              />
            </div>
            <div className="uk-margin">
              <input
                className="uk-input"
                type="password"
                placeholder="Password"
                onChange={this.handlePassword}
                disabled={disabled}
              />
            </div>
            <button
              className="uk-button uk-button-default uk-width-1-1 uk-text-uppercase"
              type="submit"
              disabled={disabled}
            >
              Login
            </button>
          </fieldset>
        </form>
        {fireRedirect && <Redirect to={"/"} />}
      </div>
    );
  }
}

interface StateFromProps {
  session: any;
}

const mapStateToProps = (state: any) => ({
  session: state.session
});

export default connect<StateFromProps, null, any>(mapStateToProps)(
  LoginComponent
);
