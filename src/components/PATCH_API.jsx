import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const PATCH_API = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
  });
  const handleInput = (filed, value) => {
    setFormData({...formData, [filed]: value});
  };
  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        `http://10.0.2.2:3000/users/${formData.id}`,
        {
          ...(formData.name && {name: formData.name}),
          ...(formData.email && {email: formData.email}),
        },
      );
      Alert.alert('Success', 'Data updated successfully!');
      console.log('Response:', response.data);
      setFormData({id: '', name: '', email: ''});
    } catch (error) {
      Alert.alert('Error', 'Failed to update data!');
      console.error('Error:', error);
    }
  };
  return (
    <View>
      <Text>PATCH_API</Text>
      <TextInput
        placeholder="Enter Your ID"
        onChangeText={value => handleInput('id', value)}
        value={formData.id}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '90%',
          height: 40,
          marginTop: 30,
          marginHorizontal: 20,
          paddingLeft: 10,
        }}
      />
      <TextInput
        placeholder="Enter Your Name"
        onChangeText={value => handleInput('name', value)}
        value={formData.name}
        style={{
          marginHorizontal: 20,
          borderWidth: 1,
          borderColor: 'black',
          width: '90%',
          height: 40,
          marginTop: 20,
          paddingLeft: 10,
        }}
      />
      <TextInput
        placeholder="Enter Your Email"
        onChangeText={value => handleInput('email', value)}
        value={formData.email}
        style={{
          borderWidth: 1,
          marginHorizontal: 20,
          borderColor: 'black',
          width: '90%',
          height: 40,
          marginTop: 20,
          paddingLeft: 10,
          marginBottom: 20,
        }}
      />
      <Button title="UPDATE" onPress={handleUpdate} />
    </View>
  );
};

export default PATCH_API;
