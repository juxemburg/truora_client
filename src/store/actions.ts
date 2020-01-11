import { loginService, searchService, HttpClient } from '../shared';
import { LoginModel } from '@/models/login.models';
import {
  UPDATE_LOGIN_ERRMSG,
  UPDATE_LOGIN_STATUS,
  SET_RECENT_SEARCHES,
  SET_LOADING_SEARCH_LIST,
} from './action-types';
import { ActionContext } from 'vuex';
import { AppState } from './initial-state';

export const actions = {
  updateLoginStatusAction(
    { commit }: ActionContext<AppState, AppState>,
    model: LoginModel
  ) {
    loginService.postLogin(model.login, model.password).subscribe(
      result => {
        HttpClient.SetAuthToken(result.authToken);
        commit(UPDATE_LOGIN_STATUS, true);
      },
      errMsg => commit(UPDATE_LOGIN_ERRMSG, errMsg)
    );
  },
  logoutAction({ commit }: ActionContext<AppState, AppState>) {
    commit(UPDATE_LOGIN_STATUS, false);
  },
  retrieveRecentSearchesAction({ commit }: ActionContext<AppState, AppState>) {
    commit(SET_LOADING_SEARCH_LIST, true);
    searchService.getRecentSearches().subscribe(
      recentSearches => {
        commit(SET_RECENT_SEARCHES, recentSearches);
      },
      err => console.log
    );
  },
};
