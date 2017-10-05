import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import * as actions from "./actions";

const initialState = {
  initialized: false,
  repositories: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INITIALIZE:
      return Object.assign({}, state, { initialized: true });
    default:
      return state;
  }
};

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(logger));

export default store;
