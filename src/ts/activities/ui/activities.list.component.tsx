import * as React from "react";
import { connect } from "react-redux";
import { ActivitiesState } from "../../activities/activities.state";
import { SessionState } from "../../login/login.state";
import { deleteActivity } from "../activities.actions";
import { Activity } from "../activities.state";

class ActivitiesEntryListComponent extends React.Component<any, {}> {
  constructor(props){
    super(props);

    this.deleteActivity = this.deleteActivity.bind(this);
  }

  public deleteActivity(id: string){
    const entry = {
      id,
      token: this.props.session.token
    };
    this.props.dispatch(deleteActivity(entry));
  }

  public renderActivitiesEntry(activity: Activity) {
    return <div key={activity.id}>{activity.title} <button type="button" onClick={() => this.deleteActivity(activity.id)}>Delete</button></div>;
  }

  public render() {
    if (!this.props.track.activities) { return null; }
    const { activities } = this.props.track;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2" />
          {activities && activities.length > 0 ? (
            activities.map((activity: Activity) => {
              return this.renderActivitiesEntry(activity);
            })
          ) : (
            <div>No Activities</div>
          )}
        </div>
      </div>
    );
  }
}

interface StateFromProps {
  session: SessionState;
  activities: ActivitiesState;
}

const mapStateToProps = (state: any) => ({
  session: state.session,
  activities: state.activities
});

export default connect<StateFromProps, null, any>(mapStateToProps)(
  ActivitiesEntryListComponent
);
