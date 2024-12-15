import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Svg, {Line} from 'react-native-svg';
const DashWrapper = ({
  height,
  width,
  borderRadius,
  dashGap,
  dashColor,
  dashWidth,
  dashHeight,
  dashBorderRadius,
  onPress,
  children,
}) => {
  const renderDashedBorder = () => {
    // Create an array of dashed lines based on the width and height, applying gap
    const dashArray = [];
    const lineCount = Math.floor(width / (dashWidth + dashGap)); // Number of dashes in horizontal direction
    for (let i = 0; i < lineCount; i++) {
      dashArray.push(
        React.createElement(Line, {
          key: `line-${i}`,
          x1: i * (dashWidth + dashGap),
          y1: 0,
          x2: i * (dashWidth + dashGap) + dashWidth,
          y2: 0,
          stroke: dashColor,
          strokeWidth: dashHeight,
          strokeLinecap: 'round', // Optional: makes the dash ends rounded
        }),
      );
    }
    return React.createElement(
      Svg,
      {
        height: height,
        width: width,
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius,
        },
      },
      dashArray,
    );
  };
  return React.createElement(
    TouchableOpacity,
    {onPress: onPress},
    React.createElement(
      View,
      {
        style: {
          height,
          width,
          borderRadius,
          position: 'relative',
          overflow: 'hidden',
        },
      },
      renderDashedBorder(),
      children,
    ),
  );
};
export {DashWrapper};
