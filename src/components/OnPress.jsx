import {View, Text, Button} from 'react-native';
import React from 'react';

const OnPress = () => {
  let name = 'Kapil';
  const onPressHandler = () => {
    name = 'Kumawat';
    console.warn('Name changed to ', name);
  };
  return (
    <View>
      <Text style={{fontSize: 50}}>{name}</Text>
      {/* <Button title="PRESS" onPress={() => onPressHandler('Kapil')} /> */}
      <Button title="PRESS" onPress={onPressHandler} />
    </View>
  );
};

export default OnPress;
