import journalLogic from "../journal/journal.logic";
import loginLogic from "../login/login.logic";

export default [
  ...loginLogic,
  ...journalLogic
];
