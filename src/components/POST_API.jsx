import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const POST_API = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/users', formData);

      Alert.alert('Success', 'Data submitted successfully!');
      console.log('Response:', response.data);
      setFormData({id: '', name: '', email: ''});
    } catch (error) {
      Alert.alert('Error', 'Failed to submit data!');
      console.error('Error:', error);
    }
  };
  return (
    <View>
      <Text>POST_API</Text>

      <TextInput
        placeholder="Enter Your ID"
        onChangeText={value => handleInputChange('id', value)}
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
        onChangeText={value => handleInputChange('name', value)}
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
        onChangeText={value => handleInputChange('email', value)}
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
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default POST_API;
