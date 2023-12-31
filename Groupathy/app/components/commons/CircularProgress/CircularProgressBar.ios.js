/* eslint-disable */

/**
 * MIT License. © Joel Arvidsson 2015
 * https://github.com/oblador/react-native-progress
 **/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, Easing} from 'react-native';
import {Surface} from '@react-native-community/art';

import Arc from './Shapes/Arc';

const AnimatedArc = Animated.createAnimatedComponent(Arc);

const MIN_ARC_ANGLE = 0.1;
const MAX_ARC_ANGLE = 1.5 * Math.PI;

export default class CircleSnail extends Component {
  static propTypes = {
    animating: PropTypes.bool,
    color: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    direction: PropTypes.oneOf(['clockwise', 'counter-clockwise']),
    hidesWhenStopped: PropTypes.bool,
    size: PropTypes.number,
    thickness: PropTypes.number,
    rotationDuration: PropTypes.number,
    sweepDuration: PropTypes.number,
    spin: PropTypes.bool,
    minArcAngle: PropTypes.number,
    maxArcAngle: PropTypes.number,
  };

  static defaultProps = {
    animating: true,
    color: 'rgba(0, 122, 255, 1)',
    direction: 'clockwise',
    hidesWhenStopped: false,
    size: 40,
    thickness: 3,
    rotationDuration: 5000,
    sweepDuration: 1000,
    spin: true,
    minArcAngle: MIN_ARC_ANGLE,
    maxArcAngle: MAX_ARC_ANGLE,
  };

  constructor(props) {
    super(props);

    this.state = {
      startAngle: new Animated.Value(-this.props.minArcAngle),
      endAngle: new Animated.Value(0),
      rotation: new Animated.Value(0),
      colorIndex: 0,
    };
  }

  componentDidMount() {
    if (this.props.animating) {
      this.animate();
      this.spin(this.props);
    }
  }

  componentWillReceiveProps(props) {
    if (props.animating !== this.props.animating) {
      if (props.animating) {
        this.animate();
        this.spin(props);
      } else {
        this.stopAnimations();
      }
    }
  }

  animate(iteration = 1) {
    Animated.sequence([
      Animated.timing(this.state.startAngle, {
        toValue: -this.props.maxArcAngle * iteration - this.props.minArcAngle,
        duration: this.props.sweepDuration,
        isInteraction: false,
        easing: Easing.inOut(Easing.quad),
      }),
      Animated.timing(this.state.endAngle, {
        toValue: -this.props.maxArcAngle * iteration,
        duration: this.props.sweepDuration,
        isInteraction: false,
        easing: Easing.inOut(Easing.quad),
      }),
    ]).start((endState) => {
      if (endState.finished) {
        if (Array.isArray(this.props.color)) {
          this.setState({
            colorIndex: iteration % this.props.color.length,
          });
        }
        this.animate(iteration + 1);
      }
    });
  }

  spin(props) {
    if (!this.props.spin) return;

    Animated.timing(this.state.rotation, {
      toValue: 1,
      duration: props.rotationDuration,
      easing: Easing.linear,
      isInteraction: false,
    }).start((endState) => {
      if (endState.finished) {
        this.state.rotation.setValue(0);
        this.spin(props);
      }
    });
  }

  stopAnimations() {
    this.state.startAngle.stopAnimation();
    this.state.endAngle.stopAnimation();
    this.state.rotation.stopAnimation();
  }

  render() {
    const {
      animating,
      hidesWhenStopped,
      size,
      thickness,
      color,
      style,
      children,
      direction,
      ...restProps
    } = this.props;

    if (!animating && hidesWhenStopped) {
      return null;
    }

    const radius = size / 2 - thickness;
    const offset = {
      top: thickness,
      left: thickness,
    };

    const directionFactor = direction === 'counter-clockwise' ? -1 : 1;

    return (
      <Animated.View
        {...restProps}
        style={[
          style,
          {
            backgroundColor: 'transparent',
            overflow: 'hidden',
            transform: [
              {
                rotate: this.state.rotation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', directionFactor * 360 + 'deg'],
                }),
              },
            ],
          },
        ]}>
        <Surface width={size} height={size}>
          <AnimatedArc
            direction={
              direction === 'counter-clockwise'
                ? 'clockwise'
                : 'counter-clockwise'
            }
            radius={radius}
            stroke={Array.isArray(color) ? color[this.state.colorIndex] : color}
            offset={offset}
            startAngle={this.state.startAngle}
            endAngle={this.state.endAngle}
            strokeCap="round"
            strokeWidth={thickness}
          />
        </Surface>
        {children}
      </Animated.View>
    );
  }
}