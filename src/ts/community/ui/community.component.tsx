import * as React from "react";
import { connect } from "react-redux";
import NavBar from "../../common/ui/nav.bar.component";
import PostEntryComponent from "../../post/ui/post.create.component";
import PostEntryListComponent from "../../post/ui/post.list.component";
import TrackEntryComponent from "../../tracks/ui/tracks.create.component";
import TrackEntryListComponent from "../../tracks/ui/tracks.list.component";

class Community extends React.Component<any, {}> {
  public render() {
    return (
      <div>
        <NavBar />
        <div>Community Page</div>
        <PostEntryComponent />
        <PostEntryListComponent />
        <TrackEntryComponent />
        <TrackEntryListComponent />
      </div>
    );
  }
}

export default connect()(Community);
