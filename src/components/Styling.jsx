import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Styling = () => {
  return (
    <View>
      <Text style={style.text}>Styling</Text>
      <Text style={style.text1}>Styling</Text>
      <Text style={style.text2}>Styling</Text>
      <Text style={style.text3}>Styling</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 30,
    backgroundColor: 'green',
    color: 'white',
  },
  text1: {
    fontSize: 30,
    marginTop: 30,
    backgroundColor: 'red',
  },
  text2: {
    fontSize: 30,
    marginTop: 30,
    color: 'white',
    backgroundColor: 'blue',
  },
  text3: {
    fontSize: 30,
    marginTop: 30,
    backgroundColor: 'skyblue',
  },
});

export default Styling;
