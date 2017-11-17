import { createLogic } from "redux-logic";
import { SUBMIT_JOURNAL } from "./journal.actions";

const JOURNAL = "http://localhost:8081/api/journal";

const submitJournalLogic = createLogic<any>({
  type: SUBMIT_JOURNAL,

  async process({ httpClient, action }, dispatch, done) {
    const entry = action.payload.entry;
    const token = action.payload.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
    };

    try {
      const result = await httpClient.post(JOURNAL, JSON.stringify({entry}), config);
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
