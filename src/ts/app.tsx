import NotFoundContainer from "./app/ui/notfound.container";
import HomeContainer from "./app/ui/home.container";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { addLocaleData, IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { configureStore } from './app/app.store';
import LoginComponent from './login/ui/login.component';

import "../styles/styles.scss";
import { Switch } from "react-router";

const store = configureStore();

const renderApp = () => {
  const content = (
    <Provider store={store}>
      <Router>
        <div>
          <main>
            <div className="r">
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/login" component={LoginComponent} />
                <Route exact path="/register" component={LoginComponent} />
                <Route component={NotFoundContainer} />
              </Switch>
            </div>
          </main>
        </div>
      </Router>
    </Provider>
  );

  ReactDOM.render(content, document.getElementById("app"));
};

export default renderApp();
