import activitiesLogic from "../activities/activities.logic";
import groupLogic from "../group/group.logic";
import loginLogic from "../login/login.logic";
import postLogic from "../post/post.logic";
import tracksLogic from "../tracks/tracks.logic";

export default [
  ...loginLogic,
  ...postLogic,
  ...tracksLogic,
  ...activitiesLogic,
  ...groupLogic
];
