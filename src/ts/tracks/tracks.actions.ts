import { Track } from "./tracks.state";

export const SUBMIT_TRACK = "SUBMIT_TRACK";
export const DELETE_TRACK = "DELETE_TRACK";
export const REQUEST_TRACKS = "REQUEST_TRACKS";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const FAIL_TRACKS = "FAIL_TRACKS";

export const submitTrackEntry = (entry: any) => {
  return {
    type: SUBMIT_TRACK,
    payload: entry
  };
};

export const deleteTrack = (entry: any) => {
  return {
    type: DELETE_TRACK,
    payload: entry
  };
};

export const requestTracks = (token: string) => {
  return {
    type: REQUEST_TRACKS,
    payload: token
  };
};

export const receiveTracks = (tracks: Track[]) => {
  return {
    type: RECEIVE_TRACKS,
    payload: tracks
  };
};

export const failTracks = (err: Error) => {
  return {
    type: FAIL_TRACKS,
    payload: err
  };
};
