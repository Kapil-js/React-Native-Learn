import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const DELETE_API = () => {
  const [id, setId] = useState();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://10.0.2.2:3000/users/${id}`);
      Alert.alert('Success', 'Data deleted successfully!');
      console.log('Response:', response.data);
      setId('');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete data!');
      console.error('Error:', error);
    }
  };
  return (
    <View>
      <Text>DELETE_API</Text>
      <TextInput
        placeholder="Enter ID to delete"
        onChangeText={value => setId(value)}
        value={id}
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
      <Button title="DELETE" onPress={handleDelete} />
    </View>
  );
};

export default DELETE_API;
