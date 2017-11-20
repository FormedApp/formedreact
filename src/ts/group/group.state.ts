import * as _ from "lodash";
import { Action } from "../app/app.store";
import { FAIL_GROUPS, RECEIVE_GROUPS, REQUEST_GROUPS } from "./group.actions";

export interface Group {
    id: string;
    title: string;
    created_at: Date;
    updated_at: Date;
}

export interface GroupState {
    loading: boolean;
    groupEntries?: Group[];
}

const initialState: GroupState = {
    loading: false,
    groupEntries: [],
};

export const groups = (state: GroupState = initialState, action: Action): GroupState => {
    switch (action.type) {
        case REQUEST_GROUPS:
        return _.assign({}, state, {
            loading: false,
        });
        case RECEIVE_GROUPS:
        return _.assign({}, state, {
                loading: false,
                groupEntries: action.payload
            });
        case FAIL_GROUPS:
        return _.assign({}, state, {
            loading: false,
        });
        default:
            return state;
    }
};
