import ApiRequest, { baseWebUrl } from '../../../networking/ApiRequest';
import { GetEndpoints } from '../../../networking/constants';
import { HomeScreenResponse } from './Models';


export const fetchUserData = (): Promise<HomeScreenResponse> => {
  const getUsersEndpoint = GetEndpoints.DASHBOARD;

  return new Promise((resolve, reject) => {
    ApiRequest(getUsersEndpoint, 'GET')
      .then((response: any) => {
        resolve(response as HomeScreenResponse); 
      })
      .catch((error: any) => {
        console.error("Error fetching user data:", error);
        reject(error);
      });
  });
};