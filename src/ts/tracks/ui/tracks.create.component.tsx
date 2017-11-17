import * as React from "react";
import { connect } from "react-redux";
import { SessionState } from "../../login/login.state";
import { submitTrackEntry } from "../tracks.actions";

class TrackEntryComponent extends React.Component<any, {}> {

  private title: string;
  private description: string;
  private myFormRef: HTMLFormElement;
  constructor(props: any) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  public handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const entry = {
      title: this.title,
      description: this.description,
      user: this.props.session.user,
      token: this.props.session.token
    };
    this.props.dispatch(submitTrackEntry(entry));
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

  public handleDescription(event: React.SyntheticEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.value.length > 0 ? target.value : "";
    if (value.length < 1) {
      return;
    }
    this.description = value;
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <form onSubmit={this.handleSubmit} ref={(input: any) => { this.myFormRef = input; }}>
            <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              onChange={this.handleTitle}
            />
          </fieldset>
          <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Description"
                  onChange={this.handleDescription}
                />
              </fieldset>
              <fieldset className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  Save Track
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
  TrackEntryComponent
);
