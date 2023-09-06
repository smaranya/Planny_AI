import React, {FunctionComponent} from 'react';
import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {TextIconView, TextIconViewProps} from './TextIcon';
import TouchableComponent, {TouchableComponentProps} from './TouchableComponent';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/* TODO: if this component is standardised, fix buttonType */

type ButtonBaseProps = {
  style?: StyleProp<ViewStyle>;
  disabledStyle?: StyleProp<ViewStyle>;
  touchableProps?: Partial<TouchableComponentProps>;
};

export type ButtonProps = ButtonBaseProps & TextIconViewProps;
export const Button: FunctionComponent<ButtonProps> = (props) => {
  const {
    style,
    disabledStyle,
    touchableProps = {} as TouchableComponentProps,
    styleTextIcon,
    ...rest
  } = props;

  return (
    <TouchableComponent
      {...touchableProps}
      style={[
        styles.container,
        style,
        touchableProps.disabled ? disabledStyle : null,
        // Apply the desired background color to the TouchableComponent
      ]}
    >
      <TextIconView
        {...rest}
        // Apply the desired background color to the TextIconView
      />
    </TouchableComponent>
  );
};

