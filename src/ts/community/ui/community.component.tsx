import * as React from "react";
import { connect } from "react-redux";
import NavBar from "../../common/ui/nav.bar.component";
class Community extends React.Component<any, {}> {
  public render() {
    return (
      <div>
        <NavBar />
        <div>Community Page</div>
      </div>
    );
  }
}

export default connect()(Community);
