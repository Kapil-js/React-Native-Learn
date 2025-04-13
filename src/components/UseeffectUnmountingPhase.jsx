import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import ShowChild from './ShowChild';

const UseeffectUnmountingPhase = () => {
  const [showChild, setShowChild] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 50}}>Parent Component</Text>
      {showChild ? <ShowChild /> : null}
      <Button title="Toggle" onPress={() => setShowChild(false)} />
    </View>
  );
};

export default UseeffectUnmountingPhase;
