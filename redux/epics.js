import * as actions from "./actions";
import repos from "../data/repos";

export const initializeEpic = action$ => {
  return action$.ofType(actions.INITIALIZE).map(action => {
    return { type: actions.FETCH_USER_REPOS_SUCCESS, payload: repos };
  });
};
