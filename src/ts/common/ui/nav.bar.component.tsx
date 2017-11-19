import * as React from "react";
import { connect } from "react-redux";

class NavBar extends React.Component<any, {}> {
  public render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <i className="fa fa-ellipsis-v" />
            </button>
            <a className="navbar-brand" href="#">
              <img
                src={require("../../../assets/images/logo.png")}
                width="45"
              />
            </a>
            <span className="view-title">Formed</span>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="community">
                <a href="#">Community</a>
              </li>
              <li className="activity">
                <a href="#">Activity</a>
              </li>
              <li className="post">
                <a href="#">Post</a>
              </li>
              <li className="user">
                <a href="#">User</a>
              </li>
              <li className="leader">
                <a href="#">Leader</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect()(NavBar);
