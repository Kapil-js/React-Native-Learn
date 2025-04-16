import {View, Text, Button} from 'react-native';
import React from 'react';

const About = props => {
  console.log(props.route.params.username);
  //   const {username , age} = props.route.params;
  const {username} = props.route.params;
  return (
    <View>
      <Text>Welcome {username}!</Text>
      <Button title="go back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export default About;
