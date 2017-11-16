import * as React from "react";
import { connect } from "react-redux";
import NavBar from "../../common/ui/nav.bar.component";
import JournalEntryComponent from "../../journal/ui/journal.component";

class Community extends React.Component<any, {}> {
  public render() {
    return (
      <div>
        <NavBar />
        <div>Community Page</div>
        <JournalEntryComponent />
      </div>
    );
  }
}

export default connect()(Community);
