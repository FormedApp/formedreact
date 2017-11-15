import * as React from "react";
import { connect } from "react-redux";

class HomeContainer extends React.Component<any, {}> {
  public render() {
    return <div className="">Home Page</div>;
  }
}

export default connect()(HomeContainer);
