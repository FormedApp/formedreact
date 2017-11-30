import * as React from "react";
import { connect } from "react-redux";
import { SessionState } from "../../login/login.state";
import { submitGroupEntry } from "../group.actions";

class GroupEntryComponent extends React.Component<any, {}> {
  private title: string;
  private myFormRef: HTMLFormElement;
  constructor(props: any) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  public handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const entry = {
      title: this.title,
      token: this.props.session.token
    };
    this.props.dispatch(submitGroupEntry(entry));
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
              <fieldset>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Title"
                  onChange={this.handleTitle}
                />
              </fieldset>
              <fieldset className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  Save Entry
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
  GroupEntryComponent
);
