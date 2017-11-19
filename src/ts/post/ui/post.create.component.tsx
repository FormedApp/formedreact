import * as React from "react";
import { connect } from "react-redux";
import { SessionState } from "../../login/login.state";
import { submitPostEntry } from "../post.actions";

class PostEntryComponent extends React.Component<any, {}> {

  private content: string;
  private myFormRef: HTMLFormElement;
  constructor(props: any) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePostEntry = this.handlePostEntry.bind(this);
  }

  public handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const entry = {
      content: this.content,
      token: this.props.session.token
    };
    this.props.dispatch(submitPostEntry(entry));
    this.myFormRef.reset();
  }

  public handlePostEntry(event: React.SyntheticEvent<HTMLTextAreaElement>) {
    const target = event.target as HTMLTextAreaElement;
    if (target.value.length > 0) {
      this.content = target.value;
    } else {
      this.content = "";
    }
    this.setState({ update: true });
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <form onSubmit={this.handleSubmit} ref={(input: any) => { this.myFormRef = input; }}>
              <fieldset className="form-group">
                <textarea
                  className="form-control"
                  onChange={this.handlePostEntry}
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
  PostEntryComponent
);
