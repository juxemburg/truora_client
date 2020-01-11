import {
  UPDATE_LOGIN_STATUS,
  UPDATE_LOGIN_ERRMSG,
  SET_RECENT_SEARCHES,
  SET_LOADING_SEARCH_LIST,
} from './action-types';
import { AppState } from './initial-state';
import { RecentSearch } from '@/models/search.models';

export const mutations = {
  [UPDATE_LOGIN_STATUS](state: AppState, userLoggedIn: boolean) {
    state.isUserLoggedIn = userLoggedIn;
    state.logginErrorStatus = '';
  },
  [UPDATE_LOGIN_ERRMSG](state: AppState, errMsg: string) {
    state.logginErrorStatus = errMsg;
  },
  [SET_RECENT_SEARCHES](state: AppState, searches: RecentSearch[]) {
    state.recentSearches = searches;
    if (searches!.length > 0) {
      state.loadingSearchList = false;
    }
  },
  [SET_LOADING_SEARCH_LIST](state: AppState, loading: boolean) {
    state.loadingSearchList = loading;
  },
};
