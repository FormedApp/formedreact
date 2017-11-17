import * as React from "react";
import { connect } from "react-redux";
import { SessionState } from "../../login/login.state";
import { submitJournalEntry } from "../journal.actions";

class JournalEntryComponent extends React.Component<any, {}> {
  private entry: string;
  private myFormRef: HTMLFormElement;
  constructor(props: any) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleJournalEntry = this.handleJournalEntry.bind(this);
  }

  public handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const token = this.props.session.token;
    const entry = {
      entry: this.entry,
      token: this.props.session.token
    };
    this.props.dispatch(submitJournalEntry(entry));
    this.myFormRef.reset();
  }

  public handleJournalEntry(event: React.SyntheticEvent<HTMLTextAreaElement>) {
    const target = event.target as HTMLTextAreaElement;
    if (target.value.length > 0) {
      this.entry = target.value;
    } else {
      this.entry = "";
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
              <img
                className="img-responsive"
                alt="formed app logo"
                src={require("../../../assets/images/logo-wide.png")}
              />
              <fieldset className="form-group">
                <textarea
                  className="form-control"
                  onChange={this.handleJournalEntry}
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
  JournalEntryComponent
);
