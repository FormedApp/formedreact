import axios from "axios";
import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import logger from "redux-logger";
import {createLogicMiddleware} from "redux-logic";
import loginLogics from "../login/login.logic";
import {session} from "../login/login.state";

const deps = { // injected dependencies for logic
    httpClient: axios
  };

// tslint:disable-next-line:no-empty-interface
export interface AppState {
    // TODO the various component state property types go in here
    session: any;
}

export interface Action {
    type: string;
    payload?: any;
}

const reducers = combineReducers({
    // TODO each components reducer goes in here
    session
});

const logicMiddle = createLogicMiddleware(loginLogics, deps);

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
