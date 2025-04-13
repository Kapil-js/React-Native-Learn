import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import SecondClass from './SecondClass';

class classCompoents extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>React Naitve App Developer</Text>
        <Text style={{fontSize: 30, color: 'red'}}>Kapil Kumawat</Text>
        <Button title="Press Here" />
        <SecondClass />
      </View>
    );
  }
}

export default classCompoents;
