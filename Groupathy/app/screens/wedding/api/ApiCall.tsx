import ApiRequest from '../../../networking/ApiRequest';
import { PostEndpoints } from '../../../networking/constants';



const postUserDataEndpoint = PostEndpoints.GPT_POST; 



export const postUserData = (data: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      console.log("Sending user data..."); 
      
      ApiRequest(postUserDataEndpoint, 'POST', data)
        .then((response: any) => {
          console.log("POST request successful!"); 
          console.log("Response:", response);
          resolve(response as JSON); 
        })
        .catch((error: any) => {
          console.error("Error sending user data:", error);
          reject(error);
        });
    });
  };
  