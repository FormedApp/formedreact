import * as moment from "moment";
import * as React from "react";
import { connect } from "react-redux";
import { JournalState } from "../../journal/journal.state";
import { SessionState } from "../../login/login.state";
import { requestJournals } from "../journal.actions";
import { Journal } from "../journal.state";

interface JournalComponentProps {
  dispatch: any;
  session: SessionState;
  journals: JournalState;
}

class JournalEntryListComponent extends React.Component<JournalComponentProps, {}> {
  public componentDidMount() {
    this.props.dispatch(requestJournals(this.props.session.token));
  }

  public renderJournalEntry(journal: Journal) {
    return <li key={journal.id}>{moment(journal.created_at).format("MMMM Do YYYY - h:mm:ss a")} {journal.entry}</li>;
  }

  public render() {
    console.log(this.props);
    if (!this.props.journals) { return null; }
    const { journalEntries } = this.props.journals;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2" />
          <ul>
          {journalEntries && journalEntries.length > 0 ? (
            journalEntries.map((journal: Journal) => {
              return this.renderJournalEntry(journal);
            })
          ) : (
            <li>No Journals</li>
          )}
          </ul>
        </div>
      </div>
    );
  }
}

interface StateFromProps {
  session: SessionState;
  journals: JournalState;
}

const mapStateToProps = (state: any) => ({
  session: state.session,
  journals: state.journals
});

export default connect<StateFromProps, null, any>(mapStateToProps)(
  JournalEntryListComponent
);
