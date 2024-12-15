import React from 'react';
import {Text} from 'react-native';
import {DashWrapper} from 'react-native-dash-wrapper';

const App = () => {
  return (
    <DashWrapper
      height={150}
      width={200}
      borderRadius={15}
      dashGap={5}
      dashColor="red"
      dashWidth={10}
      dashHeight={2}
      dashBorderRadius={5}
      onPress={() => console.log('Clicked')}>
      <Text>Content inside the dashed wrapper</Text>
    </DashWrapper>
  );
};

export default App;
