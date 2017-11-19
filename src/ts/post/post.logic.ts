import { createLogic } from "redux-logic";
import { receivePosts, REQUEST_POSTS, SUBMIT_POST } from "./post.actions";

const POST = "http://localhost:8081/api/post";

const submitPostLogic = createLogic<any>({
  type: SUBMIT_POST,

  async process({ httpClient, action }, dispatch, done) {
    const content = action.payload.content;
    const token = action.payload.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
    };

    try {
      const result = await httpClient.post(POST, JSON.stringify({content}), config);
      dispatch(receivePosts(result.data.posts));
    } catch (err) {
      console.log(
        "Error trying to create post entry",
        content,
        err,
      );
    }
    done();
  },
});

const getUserPostsLogic = createLogic<any>({
  type: REQUEST_POSTS,

  async process({ httpClient, action }, dispatch, done) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": action.payload,
      }
    };

    try {
      const result = await httpClient.get(POST, config);
      dispatch(receivePosts(result.data.posts));
    } catch (err) {
      console.log(
        "Error trying to get post entries",
        err,
      );
    }
    done();
  },
});

export default [submitPostLogic, getUserPostsLogic];
