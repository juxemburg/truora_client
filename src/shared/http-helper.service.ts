import { API } from './config';
import axios, { AxiosResponse } from 'axios';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

const defaultHeaders: { [key: string]: string } = {
  'Content-Type': 'application/json',
};

export class HttpClient {
  public static authToken = '';

  public static SetAuthToken(token: string) {
    this.authToken = token;
  }

  private static get headers(): { [key: string]: string } {
    return HttpClient.authToken
      ? { ...defaultHeaders, Authorization: `Bearer ${HttpClient.authToken}` }
      : { ...defaultHeaders };
  }

  public Post<T, U>(
    subURI: string,
    model: T,
    successStatuses = [200, 201]
  ): Observable<U> {
    return from(
      axios.post<T, AxiosResponse<U>>(`${API}/${subURI}`, model, {
        headers: HttpClient.headers,
      })
    ).pipe(map(r => this.parseResponse(r, successStatuses)));
  }

  private parseResponse<U>(
    response: AxiosResponse<U>,
    successStatuses: number[]
  ): U {
    if (!successStatuses.some(code => code === response.status)) {
      //This assumes that the api always will
      // return the error as a string in the response body
      throw Error(`${response.data}`);
    }
    return response.data;
  }
}
