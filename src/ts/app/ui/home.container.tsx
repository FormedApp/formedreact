import * as React from "react";
import { connect } from "react-redux";

class HomeContainer extends React.Component<any, {}> {
  public render() {
    return (
      <div className="">
        <h1>HOME</h1>
      </div>
    );
  }
}

export default connect()(HomeContainer);