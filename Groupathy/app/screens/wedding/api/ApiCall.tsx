import ApiRequest from '../../../networking/ApiRequest';
import { PostEndpoints } from '../../../networking/constants';
import {WeddingPlanningResponse} from './Model';


const postUserDataEndpoint = PostEndpoints.GPT_POST; 



export const gptData = (data: any): Promise<WeddingPlanningResponse> => {
    return new Promise((resolve, reject) => {
      console.log("Sending user data..."); 
      
      ApiRequest(postUserDataEndpoint, 'POST', data)
        .then((response: any) => {
          console.log("POST request successful!"); 
          console.log("Response:", response);
          resolve(response as WeddingPlanningResponse); 
        })
        .catch((error: any) => {
          console.error("Error sending user data:", error);
          reject(error);
        });
    });
  };
  