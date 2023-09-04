import APIService from './ApiService';
import {ApiMethod, ApiHeader, QueryParam} from './types';
import {HTTP_CODES,Headers} from './constants';
import {getErrorData, createQueryParamsString} from './utils';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';

export const baseWebUrl = "http://10.0.2.2:8000/";

const baseUrl = "http://192.168.0.101:8000/";

const apiService = new APIService();
const TRANSFORM_RESPONSE = '_transform=true';

const getApiEndpoint = (
  path: string,
  queryParams?: string,
  shouldTransform?: boolean,
) => {
  let endpoint: string = `${baseWebUrl}${path}`;
  if (queryParams) {
    endpoint = `${endpoint}?${queryParams}`;
  }
  if (shouldTransform) {
    endpoint = `${endpoint}${queryParams ? '&' : '?'}${TRANSFORM_RESPONSE}`;
  }
  return endpoint;
};

const ApiRequest = (
  path: string,
  method?: ApiMethod,
  requestBody?: any,
  headers?: ApiHeader[],
  queryParams?: Array<QueryParam>,
  transform?: boolean,
) => {
  return new Promise((resolve, reject) => {
    NetInfo.fetch()
      .then((state: NetInfoState) => {
        if (state.isConnected) {
          method = method || 'GET';
          const apiEndpoint = getApiEndpoint(
            path,
            createQueryParamsString(queryParams),
            transform || method === 'GET',
          );
          apiService.setMethod(method);
          apiService.addDefaultHeader();
          if (headers) {
            apiService.addHeaders(headers);
          }
          requestBody = requestBody || {};
          fetch(
            apiEndpoint,
            method === 'GET'
              ? apiService.get()
              : apiService.postOrPut(requestBody),
          )
            .then((response) => {
              if (response.status === HTTP_CODES.HTTP_STATUS_OK && response) {
                console.log("API CALLED")
                console.log(response.status)
                console.log(response)
                console.log("Response Headers:", response.headers);
                resolve(response.json());
              } else {
                console.log("Rejected")
                console.log(response.headers);
                reject(getErrorData(response.status));
              }
            })
            .catch((err) => {
              console.log("Api requested but error",err);
              console.log(apiEndpoint);
            
              console.log(method);
              reject(getErrorData(HTTP_CODES.HTTP_GENERIC_ERROR));
            });
        } else {
          reject(getErrorData(HTTP_CODES.HTTP_NO_NETWORK));
        }
      })
      .catch(() => {
        reject(getErrorData(HTTP_CODES.HTTP_NO_NETWORK));
      });
  });
};

export default ApiRequest;
