import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';

const UseRefHook = () => {
  const myRef = useRef();

  function handleRef() {
    // Focus the TextInput when the button is pressed
    myRef.current.setNativeProps({
      text: 'Hello World',
    });
    myRef.current.focus();
  }

  return (
    <View>
      <Text>UseRefHook 231</Text>
      <TextInput
        placeholder="Enter your name"
        ref={myRef}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          marginHorizontal: 10,
          marginTop: 50,
        }}
      />
      <TouchableOpacity onPress={handleRef}>
        <Text
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: 10,
            textAlign: 'center',
            marginHorizontal: 10,
            marginTop: 20,
          }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseRefHook;
