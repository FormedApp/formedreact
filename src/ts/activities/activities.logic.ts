import { createLogic } from "redux-logic";
import { DELETE_ACTIVITY, receiveActivities, SUBMIT_ACTIVITY } from "./activities.actions";

const ACTIVITIES = "http://localhost:8081/api/activities";

const submitActivityLogic = createLogic<any>({
  type: SUBMIT_ACTIVITY,

  async process({ httpClient, action }, dispatch, done) {
    const title = action.payload.title;
    const receive = action.payload.receive;
    const respond = action.payload.respond;
    const user = action.payload.user;
    const track_id = action.payload.track_id;
    const token = action.payload.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
    };

    try {
      const result = await httpClient.post(ACTIVITIES, JSON.stringify({title, receive, respond, track_id, user }), config);
      dispatch(receiveActivities(result.data.activities));
    } catch (err) {
      console.log(
        "Error trying to create activity",
        err,
      );
    }
    done();
  },
});

const deleteActivityLogic = createLogic<any>({
  type: DELETE_ACTIVITY,

  async process({ httpClient, action }, dispatch, done) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": action.payload.token,
      }
    };

    try {
      const result = await httpClient.delete(ACTIVITIES + `/${action.payload.id}`, config);
      dispatch(receiveActivities(result.data.activities));
    } catch (err) {
      console.log(
        "Error trying to get activities entries",
        err,
      );
    }
    done();
  },
});

export default [submitActivityLogic, deleteActivityLogic];
