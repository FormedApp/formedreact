import * as React from "react";
import { connect } from "react-redux";

class NavBar extends React.Component<any, {}> {
  public render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-default dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Dropdown
          <span className="caret" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Another action</a>
          </li>
          <li>
            <a href="#">Something else here</a>
          </li>
          <li role="separator" className="divider" />
          <li>
            <a href="#">Separated link</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect()(NavBar);
