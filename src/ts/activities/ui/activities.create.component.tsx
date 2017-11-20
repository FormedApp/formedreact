import * as React from "react";
import { connect } from "react-redux";
import { SessionState } from "../../login/login.state";
import { submitActivityEntry } from "../activities.actions";

class ActivityEntryComponent extends React.Component<any, {}> {
  private title: string;
  private receive: string;
  private respond: string;
  private myFormRef: HTMLFormElement;
  constructor(props: any) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleReceive = this.handleReceive.bind(this);
    this.handleRespond = this.handleRespond.bind(this);
  }

  public handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const entry = {
      title: this.title,
      receive: this.receive,
      respond: this.respond,
      track_id: this.props.match.params.trackId,
      user: this.props.session.user,
      token: this.props.session.token
    };
    this.props.dispatch(submitActivityEntry(entry));
    this.myFormRef.reset();
  }

  public handleTitle(event: React.SyntheticEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.value.length > 0 ? target.value : "";
    if (value.length < 1) {
      return;
    }
    this.title = value;
  }

  public handleReceive(event: React.SyntheticEvent<HTMLTextAreaElement>) {
    const target = event.target as HTMLTextAreaElement;
    if (target.value.length > 0) {
      this.receive = target.value;
    } else {
      this.receive = "";
    }
    this.setState({ update: true });
  }

  public handleRespond(event: React.SyntheticEvent<HTMLTextAreaElement>) {
    const target = event.target as HTMLTextAreaElement;
    if (target.value.length > 0) {
      this.respond = target.value;
    } else {
      this.respond = "";
    }
    this.setState({ update: true });
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <form
              onSubmit={this.handleSubmit}
              ref={(input: any) => {
                this.myFormRef = input;
              }}
            >
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Title"
                  onChange={this.handleTitle}
                />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  className="form-control"
                  onChange={this.handleReceive}
                />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  className="form-control"
                  onChange={this.handleRespond}
                />
              </fieldset>
              <fieldset className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  Save Activity
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

interface StateFromProps {
  session: SessionState;
}

const mapStateToProps = (state: any) => ({
  session: state.session
});

export default connect<StateFromProps, null, any>(mapStateToProps)(
  ActivityEntryComponent
);
