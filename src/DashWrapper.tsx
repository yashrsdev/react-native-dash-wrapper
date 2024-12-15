import React from 'react';
import {View, TouchableOpacity, ViewProps} from 'react-native';
import Svg, {Line} from 'react-native-svg';

interface DashWrapperProps extends ViewProps {
  height: number;
  width: number;
  borderRadius: number;
  dashGap: number;
  dashColor: string;
  dashWidth: number;
  dashHeight: number;
  dashBorderRadius: number;
  onPress: () => void;
}

const DashWrapper: React.FC<DashWrapperProps> = ({
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
        <Line
          key={`line-${i}`}
          x1={i * (dashWidth + dashGap)}
          y1={0}
          x2={i * (dashWidth + dashGap) + dashWidth}
          y2={0}
          stroke={dashColor}
          strokeWidth={dashHeight}
          strokeLinecap="round" // Optional: makes the dash ends rounded
        />,
      );
    }

    return (
      <Svg
        height={height}
        width={width}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius,
        }}>
        {dashArray}
      </Svg>
    );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height,
          width,
          borderRadius,
          position: 'relative',
          overflow: 'hidden',
        }}>
        {renderDashedBorder()}
        {children}
      </View>
    </TouchableOpacity>
  );
};

export {DashWrapper};
