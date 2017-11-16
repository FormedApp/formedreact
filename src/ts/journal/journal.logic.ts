import { createLogic } from "redux-logic";
import { SUBMIT_JOURNAL } from "./journal.actions";

const JOURNAL = "http://localhost:8081/api/journal";

const submitJournalLogic = createLogic<any>({
  type: SUBMIT_JOURNAL,

  async process({ httpClient, action }, dispatch, done) {
    const entry = action.payload;
    try {
      const result = await httpClient.post(JOURNAL, entry);
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

export default [submitJournalLogic];
