import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackView, {StackViewProps} from './StackView';
import RouteName from './RouteName';
import routes from './routes';
import {screenForPath} from './navigateTo';
import { Colors, getColor } from '../styles/colors';
import { StatusBar } from 'react-native';

type NavigatorProps = {
  initialUrl?: string;
  initialParams?: any;
};

const statusBarColor = getColor({color: Colors.red});

const AppNavigator = (props: NavigatorProps) => {
  const {name = RouteName.HOME, params = {}} =
    (props.initialUrl && screenForPath(props.initialUrl, routes)) || {};
  const initialParamsFromApp = props.initialParams || {};
  const stackViewProps: StackViewProps = {
    initialRouteName: name,
    initialParams: {...initialParamsFromApp, ...params},
  };
  const NavigationComponent = AppStackView(stackViewProps);
  return <NavigationContainer>
    <StatusBar backgroundColor = {statusBarColor} barStyle="light-content" />
    {NavigationComponent}
    </NavigationContainer>;
};

export default AppNavigator;