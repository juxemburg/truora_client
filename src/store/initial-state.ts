import { RecentSearch } from '@/models/search.models';

export interface AppState {
  isUserLoggedIn: boolean;
  logginErrorStatus: string;
  recentSearches: RecentSearch[];
  loadingSearchList: boolean;
}

export const initialState: AppState = {
  isUserLoggedIn: false,
  logginErrorStatus: '',
  recentSearches: [],
  loadingSearchList: true,
};
