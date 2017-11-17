import * as _ from "lodash";
import { Action } from "../app/app.store";
import { Group } from "../group/group.model";
import { FAIL_JOURNALS, RECEIVE_JOURNALS, REQUEST_JOURNALS } from "./journal.actions";

export interface Journal {
    id: string;
    entry: string;
    user_id: string;
    groups: Group[];
    created_at: Date;
    updated_at: Date;
}

export interface JournalState {
    loading: boolean;
    journalEntries?: Journal[];
}

const initialState: JournalState = {
    loading: false,
    journalEntries: [],
};

export const journals = (state: JournalState = initialState, action: Action): JournalState => {
    switch (action.type) {
        case REQUEST_JOURNALS:
        return _.assign({}, state, {
            loading: false,
        });
        case RECEIVE_JOURNALS:
        return _.assign({}, state, {
                loading: false,
                journalEntries: action.payload
            });
        case FAIL_JOURNALS:
        return _.assign({}, state, {
            loading: false,
        });
        default:
            return state;
    }
};
