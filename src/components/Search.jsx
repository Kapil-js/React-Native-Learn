import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const contacts = [
    {name: 'Kapil Kumawat', phone: '1234567890'},
    {name: 'John Doe', phone: '0987654321'},
    {name: 'Jane Smith', phone: '1122334455'},
    {name: 'Alice Johnson', phone: '5566778899'},
    {name: 'Bob Brown', phone: '9988776655'},
    {name: 'Charlie White', phone: '2233445566'},
    {name: 'David Black', phone: '3344556677'},
    {name: 'Eva Green', phone: '4455667788'},
    {name: 'Frank Blue', phone: '5566778899'},
    {name: 'Grace Yellow', phone: '6677889900'},
    {name: 'Hannah Pink', phone: '7788990011'},
    {name: 'Ian Purple', phone: '8899001122'},
    {name: 'Jack Orange', phone: '9900112233'},
    {name: 'Kate Red', phone: '1011121314'},
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.phone}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact List</Text>
      <TextInput
        placeholder="🔍 Search contacts"
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f1f4f9',
    padding: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 25,
    fontSize: 16,
    marginBottom: 20,
    elevation: 2,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  phone: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  listContent: {
    paddingBottom: 30,
  },
});
