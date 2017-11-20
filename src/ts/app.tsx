import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/styles.scss";
import ActivityCreateComponent from "./activities/ui/activities.create.component";
import ActivityListComponent from "./activities/ui/activities.list.component";
import { configureStore } from "./app/app.store";
import HomeContainer from "./app/ui/home.container";
import NotFoundContainer from "./app/ui/notfound.container";
import NavBar from "./common/ui/nav.bar.component";
import CommunityComponent from "./community/ui/community.component";
import GroupCreateComponent from "./group/ui/group.create.component";
import GroupDetailComponent from "./group/ui/group.detail.component";
import GroupListComponent from "./group/ui/group.list.component";
import LoginComponent from "./login/ui/login.component";
import RegisterComponent from "./login/ui/register.component";
import TrackCreateComponent from "./tracks/ui/tracks.create.component";
import TrackDetailComponent from "./tracks/ui/tracks.detail.component";
import TrackListComponent from "./tracks/ui/tracks.list.component";
import ActivityDetailComponent from "./tracks/ui/tracks.list.component";

const store = configureStore();

const renderApp = () => {
  const content = (
    <Provider store={store}>
      <Router>
        <div>
        <NavBar />
          <main>
            <div className="r">
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/login" component={LoginComponent} />
                <Route exact path="/register" component={RegisterComponent} />
                <Route exact path="/community" component={CommunityComponent} />
                <Route exact path="/groups" component={GroupListComponent} />
                <Route exact path="/groups/new" component={GroupCreateComponent} />
                <Route exact path="/groups/:trackId" component={GroupDetailComponent} />
                <Route exact path="/tracks" component={TrackListComponent} />
                <Route exact path="/tracks/new" component={TrackCreateComponent} />
                <Route exact path="/tracks/:trackId" component={TrackDetailComponent} />
                <Route exact path="/tracks/:trackId/activities" component={ActivityListComponent} />
                <Route exact path="/tracks/:trackId/activities/new" component={ActivityCreateComponent} />
                <Route exact path="/tracks/:trackId/activities/:activityId" component={ActivityDetailComponent} />
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
