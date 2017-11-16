import { createLogic } from "redux-logic";
import { RETRIEVE_POST } from "./community.actions";

const Posts = "../../assets/scripts/posts.js";

const retrievePosts = createLogic<any>({
  type: RETRIEVE_POST,

  async process({ httpClient, action }, dispatch, done) {
    const entry = action.payload;
    try {
      const result = await httpClient.get(Posts, entry);
    } catch (err) {
      console.log(
        "Error trying to create journal entry",
        entry,
        err,
      );
    }
    done();
  },
});

export default [retrievePosts];
