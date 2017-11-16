export const SUBMIT_JOURNAL = "SUBMIT_JOURNAL";

export const submitJournalEntry = (entry: any) => {
    return {
      type: SUBMIT_JOURNAL,
      payload: entry
    };
  };
