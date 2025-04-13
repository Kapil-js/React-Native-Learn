import {View, Text, Button, Alert} from 'react-native';
import React from 'react';

const AlertExample = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View>
      <Text>AlertExample</Text>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

export default AlertExample;
