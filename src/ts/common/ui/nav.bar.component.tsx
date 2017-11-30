import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
            <Link className="navbar-brand" to="/">
              <img
                src={require("../../../assets/images/logo.png")}
                width="45"
              />
            </Link>
            <span className="view-title">Formed</span>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="community">
                <Link to="/community">Community</Link>
              </li>
              <li className="activity">
                <Link to="/tracks">Tracks</Link>
              </li>
              <li className="activity">
                <Link to="/groups">Groups</Link>
              </li>
              <li className="post">
                <Link to="/">Post</Link>
              </li>
              <li className="user">
                <Link to="/user">User</Link>
              </li>
              <li className="leader">
                <Link to="#">Leader</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect()(NavBar);
