import React from 'react';
import {View, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';

interface DashWrapperProps {
  height: number;
  width: number;
  borderRadius?: number;
  dashGap?: number;
  dashColor?: string;
  dashWidth?: number;
  dashHeight?: number;
  dashBorderRadius?: number;
  backgroundColor?: string;
  onPress?: () => void;
  children?: React.ReactNode;
}

export const DashWrapper: React.FC<DashWrapperProps> = ({
  height,
  width,
  borderRadius = 0,
  dashGap = 5,
  dashColor = '#000',
  dashWidth = 2,
  dashHeight = 10,
  dashBorderRadius = 0,
  backgroundColor = '#fff',
  onPress,
  children,
}) => {
  const dashStyles: ViewStyle[] = [];
  const dashCount = Math.floor(width / (dashWidth + dashGap));

  for (let i = 0; i < dashCount; i++) {
    dashStyles.push({
      width: dashWidth,
      height: dashHeight,
      backgroundColor: dashColor,
      borderRadius: dashBorderRadius,
      marginRight: dashGap,
    });
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, {height, width, borderRadius, backgroundColor}]}>
      <View style={styles.dashContainer}>
        {dashStyles.map((style, index) => (
          <>
            <View key={index} style={style} />
            <View style={styles.content}>{children}</View>
          </>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashContainer: {
    flexDirection: 'row',
    position: 'absolute',
  },
  content: {
    zIndex: 1,
  },
});

