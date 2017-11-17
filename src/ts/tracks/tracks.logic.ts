import { createLogic } from "redux-logic";
import { DELETE_TRACK, receiveTracks, REQUEST_TRACKS, SUBMIT_TRACK } from "./tracks.actions";

const TRACKS = "http://localhost:8081/api/tracks";

const submitTrackLogic = createLogic<any>({
  type: SUBMIT_TRACK,

  async process({ httpClient, action }, dispatch, done) {
    const title = action.payload.title;
    const description = action.payload.description;
    const user = action.payload.user;
    const token = action.payload.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
    };

    try {
      const result = await httpClient.post(TRACKS, JSON.stringify({title, description, user }), config);
      dispatch(receiveTracks(result.data.tracks));
    } catch (err) {
      console.log(
        "Error trying to create track",
        err,
      );
    }
    done();
  },
});

const getUserTracksLogic = createLogic<any>({
  type: REQUEST_TRACKS,

  async process({ httpClient, action }, dispatch, done) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": action.payload,
      }
    };

    try {
      const result = await httpClient.get(TRACKS, config);
      dispatch(receiveTracks(result.data.tracks));
    } catch (err) {
      console.log(
        "Error trying to get tracks entries",
        err,
      );
    }
    done();
  },
});

const deleteTrackLogic = createLogic<any>({
  type: DELETE_TRACK,

  async process({ httpClient, action }, dispatch, done) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": action.payload.token,
      }
    };

    try {
      const result = await httpClient.delete(TRACKS + `/${action.payload.id}`, config);
      dispatch(receiveTracks(result.data.tracks));
    } catch (err) {
      console.log(
        "Error trying to get tracks entries",
        err,
      );
    }
    done();
  },
});

export default [submitTrackLogic, getUserTracksLogic, deleteTrackLogic];
