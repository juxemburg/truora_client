import { UPDATE_LOGIN_STATUS, UPDATE_LOGIN_ERRMSG } from './action-types';
import { AppState } from './initial-state';

export const mutations = {
  [UPDATE_LOGIN_STATUS](state: AppState, userLoggedIn: boolean) {
    state.isUserLoggedIn = userLoggedIn;
    state.logginErrorStatus = '';
  },
  [UPDATE_LOGIN_ERRMSG](state: AppState, errMsg: string) {
    state.logginErrorStatus = errMsg;
  },
};
