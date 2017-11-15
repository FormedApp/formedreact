import * as React from "react";
import Login from "../components/Login";
import { connect } from "react-redux";

class HomeContainer extends React.Component<any, {}> {
  public render() {
    return (
      <div className="">
        <Login />
      </div>
    );
  }
}

export default connect()(HomeContainer);
