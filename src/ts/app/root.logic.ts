import journalLogic from "../journal/journal.logic";
import loginLogic from "../login/login.logic";
import tracksLogic from "../tracks/tracks.logic";

export default [
  ...loginLogic,
  ...journalLogic,
  ...tracksLogic
];
