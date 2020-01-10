import { loginService, HttpClient } from '../shared';
import { LoginModel } from '@/models/login.models';
import { UPDATE_LOGIN_ERRMSG, UPDATE_LOGIN_STATUS } from './action-types';
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
};
