import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const UseStateHook = () => {
  const [name, setName] = useState('Kapil');

  const updateName = () => {
    setName('Anurag');
  };
  return (
    <View>
      <Text style={{fontSize: 50}}>UseStateHook</Text>
      <Text style={{fontSize: 50}}> Name: {name}</Text>
      {/* <Button title="Press" onPress={() => setName('Anurag')} /> */}
      <Button title="Press" onPress={updateName} />
    </View>
  );
};

export default UseStateHook;
