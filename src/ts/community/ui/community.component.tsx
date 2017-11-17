import * as React from "react";
import { connect } from "react-redux";
import NavBar from "../../common/ui/nav.bar.component";
import JournalEntryComponent from "../../journal/ui/journal.create.component";
import JournalEntryListComponent from "../../journal/ui/journal.list.component";
import TrackEntryComponent from "../../tracks/ui/tracks.create.component";
import TrackEntryListComponent from "../../tracks/ui/tracks.list.component";

class Community extends React.Component<any, {}> {
  public render() {
    return (
      <div>
        <NavBar />
        <div>Community Page</div>
        <JournalEntryComponent />
        <JournalEntryListComponent />
        <TrackEntryComponent />
        <TrackEntryListComponent />
      </div>
    );
  }
}

export default connect()(Community);
