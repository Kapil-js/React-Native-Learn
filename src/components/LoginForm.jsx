import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    console.warn('Email:', email);
    console.warn('Password:', password);

    setEmail('');
    setPassword('');
  };

  return (
    <View style={{justifyContent: 'center'}}>
      <Text style={{fontSize: 20, marginTop: 120, textAlign: 'center'}}>
        Login Form
      </Text>
      <Text style={{fontSize: 20, marginHorizontal: 10}}>Email:</Text>
      <TextInput
        placeholder="Enter your email"
        style={{borderWidth: 1, margin: 10, padding: 8}}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <Text style={{fontSize: 20, marginHorizontal: 10}}>Password:</Text>
      <TextInput
        placeholder="Enter your password"
        style={{borderWidth: 1, margin: 10, padding: 8}}
        value={password}
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={setPassword}
      />
      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Login</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 20, marginTop: 50, textAlign: 'center'}}>
        Name: {email}
      </Text>
      <Text style={{fontSize: 20, marginTop: 10, textAlign: 'center'}}>
        Password: {password}
      </Text>
    </View>
  );
};

export default LoginForm;
