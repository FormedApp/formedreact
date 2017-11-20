import * as React from "react";
import { connect } from "react-redux";
import PostEntryComponent from "../../post/ui/post.create.component";
import PostEntryListComponent from "../../post/ui/post.list.component";

class Community extends React.Component<any, {}> {
  public render() {
    return (
      <div>
        <div>Community Page</div>
        <PostEntryComponent />
        <PostEntryListComponent />
      </div>
    );
  }
}

export default connect()(Community);
