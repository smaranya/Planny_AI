import {ApiMethod, ApiHeader} from './types';
import {getUniqueId} from 'react-native-device-info';

export class APIService {
  private _method: ApiMethod = 'GET';
  private _headers: string[][] = [];

  constructor() {
    this.addDefaultHeader();
  }

  get headers(): string[][] {
    return this._headers;
  }

  set method(newMethod: ApiMethod) {
    this._method = newMethod;
  }

  get method(): ApiMethod {
    return this._method;
  }

  public addDefaultHeader() {
    this.resetHeaders();
    this.addHeaders([
      {
        key: 'deviceId',
        value: getUniqueId(),
      },
      {
        key: 'content-type',
        value: 'application/json',
      },
    ]);
  }

  public addHeaders(headers: ApiHeader[]): APIService {
    for (const i in headers) {
      if (
        headers[i].hasOwnProperty('key') &&
        headers[i].hasOwnProperty('value')
      ) {
        this._headers.push([headers[i].key, headers[i].value]);
      }
    }
    return this;
  }

  public resetHeaders(): void {
    this._headers = [];
  }

  public setMethod(newMethod: ApiMethod): APIService {
    this._method = newMethod;
    return this;
  }

  public postOrPut<T>(body: T): RequestInit {
    return {
      headers: this._headers,
      method: this._method,
      body: JSON.stringify(body),
    };
  }

  public get<T>(): RequestInit {
    return {
      headers: this._headers,
      method: this._method,
    };
  }
}

export class RequestBody<T> {
  constructor(private _requestBody: T) {}

  get requestBody(): T {
    return this._requestBody;
  }

  set requestBody(newRequestBody: T) {
    this._requestBody = newRequestBody;
  }
}

export default APIService;
