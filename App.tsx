import React from 'react';
import { DashWrapper } from 'react-native-dash-wrapper';
import { Text } from 'react-native';

const App = () => (
  <DashWrapper
    height={200}
    width={300}
    dashGap={10}
    dashColor="blue"
    dashWidth={4}
    dashHeight={20}
    dashBorderRadius={4}
    backgroundColor="yellow"
    onPress={() => alert('Pressed!')}
  >
    <Text>Hello, DashWrapper!</Text>
  </DashWrapper>
);

export default App;
