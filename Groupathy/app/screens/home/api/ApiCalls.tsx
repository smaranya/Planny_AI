import ApiRequest from '../../../networking/ApiRequest';
import { GetEndpoints, PostEndpoints } from '../../../networking/constants';
import { HomeScreenResponse ,User,SignUp, UserData} from './Models';
import { baseWebUrl } from '../../../networking/ApiRequest';
export const fetchUserData = (): Promise<HomeScreenResponse> => {
  const getUsersEndpoint = GetEndpoints.DASHBOARD;

  return new Promise((resolve, reject) => {
    console.log("Fetching user data..."); 
    ApiRequest(getUsersEndpoint, 'GET')
      .then((response: any) => {
        console.log("API call successful!"); 
        // console.log("Results:", response.results);
        
        resolve(response as HomeScreenResponse); 
      })
      .catch((error: any) => {
        console.error("Error fetching user data:", error);
        reject(error);
      });
  });
};


const getUserEndpoint = PostEndpoints.LOGIN_POST; 
export const loginUser= (data: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      console.log("Sending user data... LOGIN"); 
      ApiRequest(getUserEndpoint, 'POST', data)
        .then((response: any) => {
          console.log("GET request successful!"); 
          // console.log("Response:", response);
          resolve(response as User); 
        })
        .catch((error: any) => {
          console.error("Error sending user data:", error);
          reject(error);
        });
    });
  };


const postUserDataEndpoint = PostEndpoints.SIGNUP_POST; 
export const signUpUser = (data: any): Promise<SignUp> => {
  return new Promise((resolve, reject) => {
    console.log("Sending user data... SIGNUP");

    ApiRequest(postUserDataEndpoint, 'POST', data)
      .then((response: any) => {
        console.log("POST request successful!");
        // console.log("Response:", response);
        resolve(response as SignUp);
      })
      .catch((error: any) => {
        console.error("Error sending user data:", error);
        reject(error);
      });
  });
};


 

    export const getOTP = (phoneNumber: string): Promise<JSON> => {
      // Construct the path with the phoneNumber parameter
      const path = `api/account/sendotp/${phoneNumber}/`;
    
      return new Promise((resolve, reject) => {
        console.log("Getting OTP....");
        
        ApiRequest(path, 'POST')
          .then((response: any) => {
            console.log("GET OTP Successful");
            // console.log("Response", response);
            resolve(response as JSON);
          })
          .catch((error: any) => {
            console.log("Error getting OTP", error);
            reject(error);
          });
      });
    }
  
    export const verifyOTP = (phoneNumber: string,otp:string): Promise<UserData> => {
      // Construct the path with the phoneNumber parameter
      const path = `api/account/verifyotp/${phoneNumber}/${otp}/`;
    
      return new Promise((resolve, reject) => {
        console.log("Checking OTP....");
        
        ApiRequest(path, 'GET')
          .then((response: any) => {
            console.log("Verify OTP Successful");
            // console.log("Response", response);
            resolve(response as UserData);
          })
          .catch((error: any) => {
            console.log("Error getting OTP", error);
            reject(error);
          });
      });
    }
  
