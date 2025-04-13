import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';

const DialogBox = () => {
  const [modelVisible, setModelVisible] = useState(false);
  return (
    <View>
      <Text>DialogBox</Text>
      <TouchableOpacity>
        <Text
          onPress={() => setModelVisible(true)}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: 10,
            borderRadius: 5,
            marginTop: 50,
            textAlign: 'center',
          }}>
          Show Dialog Box
        </Text>
      </TouchableOpacity>
      <Modal visible={modelVisible} animationType='fade' onRequestClose={() => setModelVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',       
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              width: 300,
              height: 200,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text>Dialog Box</Text>
            <TouchableOpacity>
              <Text
                onPress={() => setModelVisible(false)}
                style={{
                  backgroundColor: 'blue',
                  color: 'white',
                  padding: 10,
                  borderRadius: 5,
                  marginTop: 20,
                  textAlign: 'center',
                }}>
                Close Dialog Box
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DialogBox;
