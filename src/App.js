import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap-sass/assets/stylesheets/_bootstrap.scss";
import "./App.css";
import "./Styles.scss";
import Home from './Home';
import Login from './Login';
import Activities from './Activities'
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/activities" component={Activities} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
