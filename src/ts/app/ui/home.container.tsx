import * as React from "react";
import { connect } from "react-redux";
import LoginComponent from "../../login/ui/login.component";

class HomeContainer extends React.Component<any, {}> {
  public render() {
    return (
      <div className="">
        <LoginComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
