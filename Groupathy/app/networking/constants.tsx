export enum GetEndpoints {
    ILLNESS_GROUP = 'patient/groups/',
    ILLNESS_SUBGROUP = 'groupsubtype/',
    GROUP_QUESTIONNAIRE = 'group/questionnaire',
    USER_ANALYTICS = 'user/analytics',
    ONBOARDING_QUESTIONS = 'intialtnc/',
    SUICIDE_CHECK = 'suicidechecknote/',
    DASHBOARD = "api/plan/categories/",
    GET_USER ="",
    GET_OTP ="api/account/sendotp/"
    
}

export enum PostEndpoints {
  TOKEN = 'token/',
  TOKEN_REFRESH = 'token/refresh/',
  GROUP_QUESTIONNAIRE_RESULT = 'user/questionnaire/analytics/',
  SEND_EMAIL = 'user/sendemail/',
  CREATE_USER = 'create/user/',
  GPT_POST = "api/plan/gpt-response/",
  SIGNUP_POST = "api/account/register/",
  LOGIN_POST = "api/account/login/",
  VERIFY_OTP = "verifyotp/<str:phone>/<str:otp>/"
}

export enum HTTP_CODES {
  HTTP_STATUS_OK = 200,
  HTTP_UNAUTHORIZED = 401,
  HTTP_NOT_FOUND = 404,
  HTTP_GENERIC_ERROR = 500,
  HTTP_NO_NETWORK = 1001,
}

export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
}

export enum Headers {
  DEVICE_ID = 'device-id',
  IP_ADDRESS = '127.0.0.1',
  PORT_NUMBER= '8000'
}

export enum QueryParams {
  SUBGRUP_GROUP_TYPE_ID = 'group_sub_type_id',
}
