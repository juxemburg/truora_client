import { Observable } from 'rxjs';
import { RecentSearch } from '@/models/search.models';
import { HttpClient } from '.';

const httpClient = new HttpClient();

const getRecentSearches: () => Observable<RecentSearch[]> = () =>
  httpClient.Get('recentsearch/');

export const searchService = {
  getRecentSearches,
};
