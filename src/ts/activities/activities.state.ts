import * as _ from "lodash";
import { Action } from "../app/app.store";
import { User } from "../common/user.model";
import { Group } from "../group/group.state";
import { FAIL_ACTIVITIES, RECEIVE_ACTIVITIES, REQUEST_ACTIVITIES } from "./activities.actions";

export interface Activity {
    id: string;
    title: string;
    description: string;
    groups: Group[];
    created_by: User;
    created_at: Date;
    updated_at: Date;
}

export interface ActivitiesState {
    loading: boolean;
    activityEntries?: Activity[];
}

const initialState: ActivitiesState = {
    loading: false,
    activityEntries: [],
};

export const activities = (state: ActivitiesState = initialState, action: Action): ActivitiesState => {
    switch (action.type) {
        case REQUEST_ACTIVITIES:
        return _.assign({}, state, {
            loading: false,
        });
        case RECEIVE_ACTIVITIES:
        return _.assign({}, state, {
                loading: false,
                activityEntries: action.payload
            });
        case FAIL_ACTIVITIES:
        return _.assign({}, state, {
            loading: false,
        });
        default:
            return state;
    }
};
