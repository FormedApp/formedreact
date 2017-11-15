import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
import { registerUser, requestSession } from "../login.actions";

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

class RegisterComponent extends React.Component<any, {}> {
  private username: string;
  private password: string;
  private confirmPassword: string;
  private user: User;

  constructor(props: any) {
    super(props);

    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);

    this.state = {
      fireRedirect: false,
      error: false,
    };
  }

  public componentDidMount() {
    this.username = "";
    this.user = {
        firstName: "",
        lastName: "",
        email: "",
    };
  }

  public handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const credentials = {
      username: this.username,
      password: this.password,
      user: this.user,
    };
    this.props.dispatch(registerUser(credentials));
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

  public handleConfirmPassword(event: React.SyntheticEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.value.length > 0 ? target.value : "";
    if (value.length < 1) {
      return;
    }
    this.confirmPassword = value;
  }

  public handleFirstName(event: React.SyntheticEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.value.length > 0 ? target.value : "";
    if (value.length < 1) {
      return;
    }
    this.user.firstName = value;
  }

  public handleLastName(event: React.SyntheticEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.value.length > 0 ? target.value : "";
    if (value.length < 1) {
      return;
    }
    this.user.lastName = value;
  }

  public handleEmail(event: React.SyntheticEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.value.length > 0 ? target.value : "";
    if (value.length < 1) {
      return;
    }
    this.user.email = value;
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
                  type="text"
                  placeholder="E-Mail"
                  onChange={this.handleEmail}
                  disabled={disabled}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                  onChange={this.handleFirstName}
                  disabled={disabled}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  onChange={this.handleLastName}
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
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={this.handleConfirmPassword}
                  disabled={disabled}
                />
              </fieldset>
              <fieldset className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                  disabled={disabled}
                >
                  Register
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        {fireRedirect && <Redirect to={"/dashboard"} />}
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
  RegisterComponent,
);
