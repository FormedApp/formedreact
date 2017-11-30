import { createLogic } from "redux-logic";
import { receiveGroups, REQUEST_GROUPS, SUBMIT_GROUP } from "./group.actions";

const GROUP = "http://localhost:8081/api/groups";

const submitGroupLogic = createLogic<any>({
  type: SUBMIT_GROUP,

  async process({ httpClient, action }, dispatch, done) {
    const title = action.payload.title;
    const token = action.payload.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
    };

    try {
      const result = await httpClient.post(GROUP, JSON.stringify({title}), config);
      dispatch(receiveGroups(result.data.groups));
    } catch (err) {
      console.log(
        "Error trying to create group entry",
        title,
        err,
      );
    }
    done();
  },
});

const getUserGroupsLogic = createLogic<any>({
  type: REQUEST_GROUPS,

  async process({ httpClient, action }, dispatch, done) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": action.payload,
      }
    };

    try {
      const result = await httpClient.get(GROUP, config);
      dispatch(receiveGroups(result.data.groups));
    } catch (err) {
      console.log(
        "Error trying to get group entries",
        err,
      );
    }
    done();
  },
});

export default [submitGroupLogic, getUserGroupsLogic];
