import React, { Component } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap-sass/assets/stylesheets/_bootstrap.scss";
import "./App.css";
import "./Styles.scss";
import Home from './Home';
import Login from './Login';
import Activities from './Activities'
import Header from './Header';
import configureStore from './store/configureStore';
import DevTools from './components/DevTools/DevTools';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/activities" component={Activities} />
            </div>
          </Router>
          {(process.env.NODE_ENV === 'production') ? null : <DevTools />}
        </div>
      </Provider>
    );
  }
}

export default App;
