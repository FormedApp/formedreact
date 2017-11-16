import * as _ from "lodash";

import { Action } from "../app/app.store";

import { User } from "../common/user.model";
import { FAIL_SESSION, RECEIVE_SESSION } from "../login/login.actions";

export interface SessionState {
    authenticating: boolean;
    token: string;
    user: User;
}

export const initialUser: User = {
    id: "",
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    groups: [],
    roles: [],
    password: "",
    created_at: new Date(),
    updated_at: new Date()
};

const initialState: SessionState = {
    authenticating: false,
    token: "",
    user: initialUser,
};

export const session = (state: SessionState = initialState, action: Action): SessionState => {
    switch (action.type) {
        // case INIT_SESSION:
        // return _.assign({}, state, {
        //     authenticating: true,
        // });
        case RECEIVE_SESSION:
        return _.assign({}, state, {
                user: action.payload.user,
                token: action.payload.token,
                authenticating: false,
            });
        case FAIL_SESSION:
        return _.assign({}, state, {
            authenticating: false,
        });
        default:
            return state;
    }
};
