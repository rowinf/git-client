import * as actions from "./actions";

export const initializeEpic = action$ => {
  return action$
    .filter(action => action.type === actions.INITIALIZE)
    .mapTo(action => {
      return { type: actions.FETCH_USER_REPOS_SUCCESS };
    });
};
