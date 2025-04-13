import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';

const PlatformEx = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>
          {Platform.OS === 'ios' ? 'Welcome to iOS!' : 'Welcome to Android!'}
        </Text>
        <Text style={styles.description}>
          {Platform.select({
            ios: 'This is an iOS device. Enjoy the smooth experience!',
            android: 'This is an Android device. Enjoy the flexibility!',
            default: 'This is a different platform. Enjoy exploring!',
          })}
        </Text>
      </View>
    </View>
  );
};

export default PlatformEx;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f4f7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Platform.OS === 'ios' ? '#007AFF' : '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: Platform.select({
      ios: '#333',
      android: 'red',
      default: '#777',
    }),
    lineHeight: 22,
  },
});
