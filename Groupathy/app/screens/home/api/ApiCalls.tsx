import ApiRequest, { baseWebUrl } from '../../../networking/ApiRequest';
import { GetEndpoints } from '../../../networking/constants';
import { HomeScreenResponse } from './Models';

export const fetchUserData = (): Promise<HomeScreenResponse> => {
  const getUsersEndpoint = GetEndpoints.DASHBOARD;

  return new Promise((resolve, reject) => {
    console.log("Fetching user data..."); // Add a log to indicate the start of the API call
    ApiRequest(getUsersEndpoint, 'GET')
      .then((response: any) => {
        console.log("API call successful!"); // Add a log for a successful API call
        //console.log(response);
        console.log("Results:", response.results);
        resolve(response as HomeScreenResponse); // Resolve with the response
      })
      .catch((error: any) => {
        console.error("Error fetching user data:", error);
        reject(error);
      });
  });
};
