import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
const DashWrapper = ({ height, width, borderRadius = 0, dashGap = 5, dashColor = '#000', dashWidth = 2, dashHeight = 10, dashBorderRadius = 0, backgroundColor = '#fff', onPress, children, }) => {
    const dashStyles = [];
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
    return (React.createElement(TouchableOpacity, { onPress: onPress, style: [styles.wrapper, { height, width, borderRadius, backgroundColor }] },
        React.createElement(View, { style: styles.dashContainer }, dashStyles.map((style, index) => (React.createElement(React.Fragment, null,
            React.createElement(View, { key: index, style: style }),
            React.createElement(View, { style: styles.content }, children)))))));
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
export default DashWrapper;
