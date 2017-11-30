import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ActivitiesListComponent from "../../activities/ui/activities.list.component";
import { SessionState } from "../../login/login.state";
import { Track, TracksState } from "../../tracks/tracks.state";

class TracksEntryDetailComponent extends React.Component<
  any,
  {}
> {
  constructor(props) {
    super(props);
  }

  public render() {
    console.log(this.props);
    if (!this.props.tracks) {
      return null;
    }
    console.log("this.props", this.props);
    console.log("this.props.tracks", this.props.tracks);
    console.log("this.props.tracks.trackEntries", this.props.tracks.trackEntries);
    const track: Track = this.props.tracks.trackEntries.find((t) => t.id === this.props.match.params.trackId);
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2" />
          <div>{track.title}</div>
          <ActivitiesListComponent track={track}/>
        </div>
        <div>
          <Link to={`/tracks/${track.id}/activities/new`}>New Activity</Link>
        </div>
      </div>
    );
  }
}

interface StateFromProps {
  session: SessionState;
  tracks: TracksState;
}

const mapStateToProps = (state: any) => ({
  session: state.session,
  tracks: state.tracks
});

export default connect<StateFromProps, null, any>(mapStateToProps)(
  TracksEntryDetailComponent
);
