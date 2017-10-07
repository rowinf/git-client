import { ajax } from "rxjs/observable/dom/ajax";

import * as actions from "./actions";

export const initializeEpic = action$ => {
  return action$.ofType(actions.INITIALIZE).mergeMap(action =>
    ajax.getJSON("https://api.github.com/users/rowinf/repos").map(response => ({
      type: actions.FETCH_USER_REPOS_SUCCESS,
      payload: response
    }))
  );
};
