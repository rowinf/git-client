import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import * as actions from "./actions";
import repos from "../data/repos";

const initialState = {
  initialized: false,
  repositories: repos
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INITIALIZE:
      return Object.assign({}, state, { initialized: true });
    case actions.FETCH_USER_REPOS_SUCCESS:
      return Object.assign({}, state, { repositories: action.payload });
    default:
      return state;
  }
};

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(logger));

export default store;
