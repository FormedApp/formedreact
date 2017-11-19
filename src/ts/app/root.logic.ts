import loginLogic from "../login/login.logic";
import postLogic from "../post/post.logic";
import tracksLogic from "../tracks/tracks.logic";

export default [
  ...loginLogic,
  ...postLogic,
  ...tracksLogic
];
