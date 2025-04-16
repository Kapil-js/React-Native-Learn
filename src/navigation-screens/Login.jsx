import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('About', {username})}
      />
    </View>
  );
};

export default Login;
