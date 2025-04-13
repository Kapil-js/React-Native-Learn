import {View, Text} from 'react-native';
import React from 'react';

export default function Jsx() {
  let name = 'Kapil Kumawat';

  const age = () => {
    return 21;
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>Jsx</Text>
      <Text style={{fontSize: 30}}>{name}</Text>
      <Text style={{fontSize: 30}}>{age()}</Text>
    </View>
  );
}
