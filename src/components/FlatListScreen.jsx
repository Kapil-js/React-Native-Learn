import {View, Text, FlatList} from 'react-native';
import React from 'react';

const data = [
  {id: 1, title: 'Item 1'},
  {id: 2, title: 'Item 2'},
  {id: 3, title: 'Item 3'},
  {id: 4, title: 'Item 4'},
  {id: 5, title: 'Item 5'},
  {id: 6, title: 'Item 6'},
  {id: 7, title: 'Item 7'},
  {id: 8, title: 'Item 8'},
  {id: 9, title: 'Item 9'},
  {id: 10, title: 'Item 10'},
  {id: 11, title: 'Item 11'},
  {id: 12, title: 'Item 12'},
  {id: 13, title: 'Item 13'},
  {id: 14, title: 'Item 14'},
  {id: 15, title: 'Item 15'},
  {id: 16, title: 'Item 16'},
  {id: 17, title: 'Item 17'},
  {id: 18, title: 'Item 18'},
];
const FlatListScreen = () => {
  const renderItem = ({item}) => (
    <View
      style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
      <Text style={{fontSize: 18}}>{item.title}</Text>
    </View>
  );
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FlatListScreen;
