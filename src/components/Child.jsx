import {View, Text} from 'react-native';
import React from 'react';

const Child = data => {
  //   console.warn(count.count);
  let item = data.item;
  return (
    <View>
      <Text style={{fontSize: 50}}>Child</Text>
      <Text style={{fontSize: 50}}>{data.data}</Text>
      <Text style={{fontSize: 50}}>{item}</Text>
    </View>
  );
};

export default Child;
