import * as React from "react";
import * as ReactDOM from "react-dom";
import { addLocaleData, IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/styles.scss";
import { configureStore } from "./app/app.store";
import HomeContainer from "./app/ui/home.container";
import NotFoundContainer from "./app/ui/notfound.container";
import CommunityComponent from "./community/ui/community.component";
import LoginComponent from "./login/ui/login.component";
import RegisterComponent from "./login/ui/register.component";

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
                <Route exact path="/register" component={RegisterComponent} />
                <Route exact path="/community" component={CommunityComponent} />
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
