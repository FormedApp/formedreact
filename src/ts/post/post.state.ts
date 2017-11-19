import * as _ from "lodash";
import { Action } from "../app/app.store";
import { FAIL_POSTS, RECEIVE_POSTS, REQUEST_POSTS } from "./post.actions";

export interface Post {
    id: string;
    content: string;
    user_id: string;
    group_id: string;
    created_at: Date;
    updated_at: Date;
}

export interface PostState {
    loading: boolean;
    postEntries?: Post[];
}

const initialState: PostState = {
    loading: false,
    postEntries: [],
};

export const posts = (state: PostState = initialState, action: Action): PostState => {
    switch (action.type) {
        case REQUEST_POSTS:
        return _.assign({}, state, {
            loading: false,
        });
        case RECEIVE_POSTS:
        return _.assign({}, state, {
                loading: false,
                postEntries: action.payload
            });
        case FAIL_POSTS:
        return _.assign({}, state, {
            loading: false,
        });
        default:
            return state;
    }
};
