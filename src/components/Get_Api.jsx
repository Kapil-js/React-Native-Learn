import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Get_Api = () => {
  const [myData, setMyData] = useState();

  useEffect(() => {
    // fetch('http://10.0.2.2:3000/users')
    //   .then(response => response.json())
    //   .then(result => console.log(result));

    axios
      .get('http://10.0.2.2:3000/users')
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setMyData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <View>
      <Text>Get_Api</Text>
      {myData.map(user => (
        <View key={user.id}>
          <Text>{user.id}</Text>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
          <Text>{user.phone}</Text>
        </View>
      ))}
    </View>
  );
};

export default Get_Api;
