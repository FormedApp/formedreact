import { Group } from "./group.state";

export const SUBMIT_GROUP = "SUBMIT_GROUP";
export const REQUEST_GROUPS = "REQUEST_GROUPS";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const FAIL_GROUPS = "FAIL_GROUPS";

export const submitGroupEntry = (entry: any) => {
    return {
      type: SUBMIT_GROUP,
      payload: entry
    };
  };

export const requestGroups = (token: string) => {
    return {
      type: REQUEST_GROUPS,
      payload: token
    };
  };

export const receiveGroups = (groups: Group[]) => {
    return {
      type: RECEIVE_GROUPS,
      payload: groups
    };
  };

export const failGroups = (err: Error) => {
    return {
      type: FAIL_GROUPS,
      payload: err
    };
  };
