import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const InputText = () => {
  const [name, setName] = useState();

  const changeName = (value) => {
    setName(value);
  };

  const clearName = () => {
    setName('');
  };
  return (
    <View>
      <Text style={{fontSize: 30, marginTop: 30}}>InputText</Text>
      <Text style={{fontSize: 30, marginTop: 30}}>Name: {name}</Text>
      <TextInput
        style={{borderColor: 'red', borderWidth: 2, margin: 10}}
        placeholder="Enter Your Name"
        onChangeText={changeName}
        value={name}
        keyboardType="default"
      />
      <Button title="CLEAR" onPress={clearName} />
    </View>
  );
};

export default InputText;
