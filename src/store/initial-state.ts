export interface AppState {
  isUserLoggedIn: boolean;
  logginErrorStatus: string;
}

export const initialState: AppState = {
  isUserLoggedIn: false,
  logginErrorStatus: '',
};
