import { Post } from "./post.state";

export const SUBMIT_POST = "SUBMIT_POST";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const FAIL_POSTS = "FAIL_POSTS";

export const submitPostEntry = (entry: any) => {
    return {
      type: SUBMIT_POST,
      payload: entry
    };
  };

export const requestPosts = (token: string) => {
    return {
      type: REQUEST_POSTS,
      payload: token
    };
  };

export const receivePosts = (posts: Post[]) => {
    return {
      type: RECEIVE_POSTS,
      payload: posts
    };
  };

export const failPosts = (err: Error) => {
    return {
      type: FAIL_POSTS,
      payload: err
    };
  };
