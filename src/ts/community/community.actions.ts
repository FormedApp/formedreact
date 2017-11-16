export const RETRIEVE_POST = "RETRIEVE_POST";

export const submitJournalEntry = (entry: any) => {
  return {
    type: RETRIEVE_POST,
    payload: entry
  };
};
