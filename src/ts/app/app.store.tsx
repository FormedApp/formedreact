import axios from "axios";
import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import logger from "redux-logger";
import {createLogicMiddleware} from "redux-logic";
import { journals, JournalState } from "../journal/journal.state";
import {session, SessionState} from "../login/login.state";
import { tracks, TracksState } from "../tracks/tracks.state";
import logic from "./root.logic";

const deps = { // injected dependencies for logic
    httpClient: axios
  };

// tslint:disable-next-line:no-empty-interface
export interface AppState {
    // TODO the various component state property types go in here
    session: SessionState;
    journals: JournalState;
    tracks: TracksState;
}

export interface Action {
    type: string;
    payload?: any;
}

const reducers = combineReducers({
    // TODO each components reducer goes in here
    session,
    journals,
    tracks
});

const logicMiddle = createLogicMiddleware(logic, deps);

export const configureStore = (): Store<AppState> => {
    /*
     * Apply the middleware we always use
     */

    const prodMiddleware = applyMiddleware(logicMiddle, logger);

    /*
     * When running in dev mode, and the browser as the tools extension, make sure to add
     * the middleware for it
     */
    const middleware = compose(prodMiddleware,
        (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f,
    );

    const store = createStore(reducers, middleware) as Store<AppState>;
    return store;
};
