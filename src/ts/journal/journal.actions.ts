import { Journal } from "./journal.state";

export const SUBMIT_JOURNAL = "SUBMIT_JOURNAL";
export const REQUEST_JOURNALS = "REQUEST_JOURNALS";
export const RECEIVE_JOURNALS = "RECEIVE_JOURNALS";
export const FAIL_JOURNALS = "FAIL_JOURNALS";

export const submitJournalEntry = (entry: any) => {
    return {
      type: SUBMIT_JOURNAL,
      payload: entry
    };
  };

export const requestJournals = (token: string) => {
    return {
      type: REQUEST_JOURNALS,
      payload: token
    };
  };

export const receiveJournals = (journals: Journal[]) => {
    return {
      type: RECEIVE_JOURNALS,
      payload: journals
    };
  };

export const failJournals = (err: Error) => {
    return {
      type: FAIL_JOURNALS,
      payload: err
    };
  };
