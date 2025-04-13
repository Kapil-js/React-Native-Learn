import {View, Text, StatusBar} from 'react-native';
import React from 'react';

const StatusBarEx = () => {
  return (
    <View>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor="black"
      />
      <Text>StatusBarEx</Text>
    </View>
  );
};

export default StatusBarEx;
