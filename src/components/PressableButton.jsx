import {View, Text, Pressable} from 'react-native';
import React from 'react';

const PressableButton = () => {
  return (
    <View>
      <Pressable>
        {({pressed}) => (
          <Text 
            style={{
              fontSize: 30,
              color: pressed ? 'red' : 'black',
              padding: 10,
              backgroundColor: pressed ? 'yellow' : 'white',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: pressed ? 'blue' : 'black',
              textAlign: 'center',
              margin: 10,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: 2,
              shadowColor: pressed ? 'black' : 'gray',
              shadowOffset: {width: 0, height: 2},
              marginTop: 50,
            }}>
            Press Me
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default PressableButton;
