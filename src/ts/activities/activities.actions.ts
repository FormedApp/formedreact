import { Activity } from "./activities.state";

export const SUBMIT_ACTIVITY = "SUBMIT_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const REQUEST_ACTIVITIES = "REQUEST_ACTIVITIES";
export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const FAIL_ACTIVITIES = "FAIL_ACTIVITIES";

export const submitActivityEntry = (entry: any) => {
  return {
    type: SUBMIT_ACTIVITY,
    payload: entry
  };
};

export const deleteActivity = (entry: any) => {
  return {
    type: DELETE_ACTIVITY,
    payload: entry
  };
};

export const requestActivities = (token: string, trackId: string) => {
  return {
    type: REQUEST_ACTIVITIES,
    payload: {token, trackId}
  };
};

export const receiveActivities = (activities: Activity[]) => {
  return {
    type: RECEIVE_ACTIVITIES,
    payload: activities
  };
};

export const failActivities = (err: Error) => {
  return {
    type: FAIL_ACTIVITIES,
    payload: err
  };
};
