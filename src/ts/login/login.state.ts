import * as _ from "lodash";

import { Action } from "../app/app.store";

import { FAIL_SESSION, RECEIVE_SESSION } from "../login/login.actions";

export interface SessionState {
    /**
     * Flag indicating whether or not we have an authentication request in flight
     * NOTE: this will only be true when the user is explicitly logging in/verifying
     */
    authenticating: boolean;

    /**
     * The session we are operating with
     */
    user: any;
}

export const initialUser: any = {
    success: "",
    token: "",
};

const initialState: SessionState = {
    authenticating: false,
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
                user: action.payload,
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
