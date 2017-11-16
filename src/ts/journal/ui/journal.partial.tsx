import * as React from "react";

class JournalEntryComponent extends React.Component<any, {}> {
    private entry: string;
  constructor(props: any) {
    super(props);
  }

  public handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const entry = {
      entry: this.entry,
    };
    // this.props.dispatch(submitJournalEntry(entry));
  }

  public handleJournalEntry(event: React.SyntheticEvent<HTMLTextAreaElement>) {
    const target = event.target as HTMLTextAreaElement;
    if (target.value.length > 0) {
      this.entry = target.value;
    } else {
      this.entry = "";
    }
    this.setState({update: true});
  }

  public render() {
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
                <textarea
                  className="form-control"
                  onChange={this.handleJournalEntry}
                ></textarea>
              </fieldset>
              <fieldset className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                >
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
  session: any;
}

const mapStateToProps = (state: any) => ({
  session: state.session,
});

export default JournalEntryComponent;
