import {View, Text, ScrollView, StyleSheet} from 'react-native';
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
  {id: 19, title: 'Item 19'},
  {id: 20, title: 'Item 20'},
];
const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Grid</Text>
      <ScrollView>
        {data.map(item => (
          <View
            key={item.id}
            style={{margin: 10, padding: 20, backgroundColor: '#f0f0f0'}}>
            <Text>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f8f9f8',  
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default Grid;
