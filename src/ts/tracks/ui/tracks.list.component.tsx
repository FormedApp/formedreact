import * as React from "react";
import { connect } from "react-redux";
import { SessionState } from "../../login/login.state";
import { TracksState } from "../../tracks/tracks.state";
import { deleteTrack, requestTracks } from "../tracks.actions";
import { Track } from "../tracks.state";

interface TracksComponentProps {
  dispatch: any;
  session: SessionState;
  tracks: TracksState;
}

class TracksEntryListComponent extends React.Component<TracksComponentProps, {}> {
  constructor(props){
    super(props);

    this.deleteTrack = this.deleteTrack.bind(this);
  }
  public componentDidMount() {
    this.props.dispatch(requestTracks(this.props.session.token));
  }

  public deleteTrack(id: string){
    const entry = {
      id,
      token: this.props.session.token
    };
    this.props.dispatch(deleteTrack(entry));
  }

  public renderTracksEntry(track: Track) {
    return <div key={track.id}>{track.title} <button type="button" onClick={() => this.deleteTrack(track.id)}>Delete</button></div>;
  }

  public render() {
    console.log(this.props);
    if (!this.props.tracks) { return null; }
    const { trackEntries } = this.props.tracks;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2" />
          {trackEntries && trackEntries.length > 0 ? (
            trackEntries.map((track: Track) => {
              return this.renderTracksEntry(track);
            })
          ) : (
            <div>No Tracks</div>
          )}
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
  TracksEntryListComponent
);
