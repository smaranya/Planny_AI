import React from 'react';
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  StyleProp,
  ViewStyle,
  TouchableHighlightProps,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Colors, ColorType, getColor } from '../../styles/colors';

export type Touchables =
  | 'nativeFeedBack'
  | 'highLight'
  | 'opacity'
  | 'withoutFeedBack';

const TouchablesMap: Record<Touchables, React.ComponentType<any>> = {
  nativeFeedBack: TouchableNativeFeedback,
  highLight: TouchableHighlight,
  opacity: TouchableOpacity,
  withoutFeedBack: TouchableWithoutFeedback,
};

type CommonProps = TouchableHighlightProps &
  TouchableNativeFeedbackProps &
  TouchableOpacity['props'] &
  TouchableWithoutFeedback['props'];

export type TouchableComponentProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  touchable?: Touchables;
  underlayColorType?: ColorType;
} & CommonProps;

const TouchableComponent: React.FC<TouchableComponentProps> = (props) => {
  const {
    style,
    touchable = Platform.OS === 'ios' ? 'highLight' : 'nativeFeedBack',
    underlayColorType = {
      color: Colors.white,
      opacity: 0,
    },
    children,
    ...rest
  } = props;

  const Touchable = TouchablesMap[touchable];
  const buttonUnderlayColor = getColor(underlayColorType);

  return (
    <Touchable
      style={style}
      underlayColor={buttonUnderlayColor}
      {...rest}
    >
      {children}
    </Touchable>
  );
};

export default TouchableComponent;