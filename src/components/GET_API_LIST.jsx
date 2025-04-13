import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const GET_API_LIST = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get('http://10.0.2.2:3000/users')
      .then(res => {
        console.log(res.data);
        setMyData(res.data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User List</Text>
      <FlatList
        data={myData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
};

export default GET_API_LIST;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e1e1e',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
});
