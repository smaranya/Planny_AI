import {ComponentClass, FunctionComponent} from 'react';
import RouteName from './RouteName';
import {pathToRegexp} from 'path-to-regexp';
import Questionairre from '../screens/questionnaire/Questionairre';
import IllnessGroups from '../screens/illness/IllnessGroups';
import ResultView from '../screens/results/ResultView';
import ResultListView from '../screens/result-list/ResultListView';
//import AppWebView from '../screens/webview/WebView';
import IllnessDetail from '../screens/illnessDetail';
import HomeScreen from '../screens/home/HomeScreen';
import { useRoute } from '@react-navigation/native';
//import Onboarding from '../screens/onboarding/Onboarding';
import TestConsentScreen from '../screens/info/TestConsentScreen';
import InfoScreen from '../screens/info/InfoScreen';
import WeddingPlan from '../screens/wedding/WeddingPlan';
import WeddingRole from '../screens/wedding/WeddingRole';
import WeddingDate from '../screens/wedding/WeddingDate';
import WeddingCity from '../screens/wedding/WeddingCity';
import WeddingBudget from '../screens/wedding/WeddingBudget';
import Login from '../screens/home/Login';
import SignUp from '../screens/home/SignUp';
import OTP from '../screens/home/OTP';
import Plans from '../screens/plans/Plans';
import Details from '../screens/plans/Details';


export type Route = {
  name: string;
  regexs: Array<{
    regex: any;
    keys: Array<string>;
  }>;
  screen: ComponentClass<any, any> | FunctionComponent<any>;
  params?: Object;
  options?: any;
};

export type AppRoutes = Array<Route>;

export const processRoutes = (
  routes: Array<{
    name: string;
    regexs: Array<string>;
    screen: any;
    params?: Object;
  }>,
) =>
  routes.map(({regexs = [], ...rest}) => ({
    regexs: regexs.map((regex) => {
      const keys: any = [];
      return {
        regex: pathToRegexp(regex, keys),
        keys,
      };
    }),
    ...rest,
  }));

const appRoutes = [
  {
    name: RouteName.ILLNESS_GROUP,
    regexs: ['/illness/groups'],
    screen: IllnessGroups,
  },
  {
    name: RouteName.LOGIN,
    regexs:['/login'],
    screen: Login
  },
  {
    name: RouteName.SIGNUP,
    regexs:['/signup'],
    screen: SignUp
  },
  {
    name: RouteName.OTP,
    regexs:['/signup/otp'],
    screen: OTP
  },
  {
    name: RouteName.HOME,
    regexs:['/home'],
    screen: HomeScreen,
  },
  {
    name: RouteName.WEDDING_PLAN,
    regexs:['/wedding'],
    screen: WeddingPlan,
  },
  {
    name: RouteName.WEDDING_ROLE,
    regexs:['/wedding/role'],
    screen: WeddingRole
  },
  {
    name: RouteName.WEDDING_DATE,
    regexs:['/wedding/date'],
    screen: WeddingDate
  },
  {
    name: RouteName.WEDDING_CITY,
    regexs:['/wedding/city'],
    screen: WeddingCity
  },
  {
    name: RouteName.WEDDING_BUDGET,
    regexs:['/wedding/budget'],
    screen: WeddingBudget
  },
  {
    name: RouteName.PLANS,
    regexs:['/plans'],
    screen: Plans
  },
  {
    name: RouteName.DETAILS,
    regexs:['/plans/details'],
    screen: Details
  },
  {
    name: RouteName.ILLNESS_DETAIL,
    regexs: ['/illness/detail'],
    screen: IllnessDetail,
    options: {headerTransparent: true},
  },
  {
    name: RouteName.QUESTIONNAIRE_SCREEN,
    regexs: ['/questionnaire/groups'],
    screen: Questionairre,
    options: {headerTransparent: true},
  },
  {
    name: RouteName.RESULT_DETAIL,
    regexs: ['/questionnaire/result'],
    screen: ResultView,
    options: {headerTransparent: true},
  },
  {
    name: RouteName.RESULT_LIST,
    regexs: ['/group/result-list'],
    screen: ResultListView,
    options: {headerTransparent: true},
  },
  // {
  //   name: RouteName.WEBVIEW,
  //   regexs: ['/webview'],
  //   screen: AppWebView,
  //   options: {headerShown: false},
  // },
  // {
  //   name: RouteName.ONBOARDING,
  //   regexs: ['/onboarding'],
  //   screen: Onboarding,
  //   options: {headerShown: false},
  // },
  {
    name: RouteName.TEST_CONSENT_SCREEN,
    regexs: ['/test/consent'],
    screen: TestConsentScreen,
    options: {headerTransparent: true},
  },
  {
    name: RouteName.INFO_SCREEN,
    regexs: ['/info'],
    screen: InfoScreen,
    options: {headerShown: false},
  },
];

const routes: AppRoutes = processRoutes(appRoutes);
export default routes;