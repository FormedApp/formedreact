import * as _ from "lodash";
import { Action } from "../app/app.store";
import { User } from "../common/user.model";
import { Group } from "../group/group.model";
import { FAIL_TRACKS, RECEIVE_TRACKS, REQUEST_TRACKS } from "./tracks.actions";

export interface Track {
    id: string;
    title: string;
    description: string;
    groups: Group[];
    created_by: User;
    created_at: Date;
    updated_at: Date;
}

export interface TracksState {
    loading: boolean;
    trackEntries?: Track[];
}

const initialState: TracksState = {
    loading: false,
    trackEntries: [],
};

export const tracks = (state: TracksState = initialState, action: Action): TracksState => {
    switch (action.type) {
        case REQUEST_TRACKS:
        return _.assign({}, state, {
            loading: false,
        });
        case RECEIVE_TRACKS:
        return _.assign({}, state, {
                loading: false,
                trackEntries: action.payload
            });
        case FAIL_TRACKS:
        return _.assign({}, state, {
            loading: false,
        });
        default:
            return state;
    }
};
