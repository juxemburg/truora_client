import { LoginResult } from '@/models/login.models';
import { Observable } from 'rxjs';
import { HttpClient } from './http-helper.service';

const httpClient = new HttpClient();

const postLogin: (
  email: string,
  password: string
) => Observable<LoginResult> = (email, password) =>
  httpClient.Post<{ login: string; password: string }, LoginResult>(
    'authentication/login',
    {
      login: email,
      password: password,
    },
    [200]
  );

export const loginService = {
  postLogin,
};
