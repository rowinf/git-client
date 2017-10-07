import "rxjs";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "remote-redux-devtools";

import * as actions from "./actions";
import * as epics from "./epics";

const initialState = {
  initialized: false,
  repositories: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INITIALIZE:
      return { initialized: true, ...state };
    case actions.FETCH_USER_REPOS_SUCCESS:
      return { repositories: action.payload, ...state };
    default:
      return state;
  }
};

const logger = createLogger();
const rootEpic = combineEpics(epics.initializeEpic);
const middleware = applyMiddleware(logger, createEpicMiddleware(rootEpic));

const enhancer = __DEV__ ? composeWithDevTools(middleware) : middleware;

const store = createStore(reducer, enhancer);

export default store;
