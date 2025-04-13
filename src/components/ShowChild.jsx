import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Useeffect from './Useeffect';

const ShowChild = () => {
  Useeffect(() => {
 return () => {
      console.log('Child Component Unmounted');
    };
}, []);
  return (
    <View>
      <Text style={{fontSize: 50}}>Child Component</Text>
    </View>
  );
};

export default ShowChild;
