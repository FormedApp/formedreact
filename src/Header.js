import React from 'react';
import NavBar from './NavBar';

class Header extends React.Component {
  render() {
    return ( 
      <div>
		<NavBar navChangeCallback={this.props.navChangedCallback} />
      </div>
    );
  }
}

export default Header;