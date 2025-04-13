import {View, Text} from 'react-native';
import React from 'react';

const listItems = [
  {
    title: 'Fruits',
    data: [
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Mango'},
      {id: 3, name: 'Orange'},
    ],
  },
  {
    title: 'Vegetables',
    data: [
      {id: 1, name: 'Potato'},
      {id: 2, name: 'Tomato'},
      {id: 3, name: 'Onion'},
    ],
  },
  {
    title: 'Dairy',
    data: [
      {id: 1, name: 'Milk'},
      {id: 2, name: 'Butter'},
      {id: 3, name: 'Cheese'},
    ],
  },
  {
    title: 'Meat',
    data: [
      {id: 1, name: 'Chicken'},
      {id: 2, name: 'Fish'},
      {id: 3, name: 'Pork'},
    ],
  },
  {
    title: 'Grains',
    data: [
      {id: 1, name: 'Rice'},
      {id: 2, name: 'Wheat'},
      {id: 3, name: 'Oats'},
    ],
  },
  {
    title: 'Nuts',
    data: [
      {id: 1, name: 'Almonds'},
      {id: 2, name: 'Walnuts'},
      {id: 3, name: 'Pistachios'},
    ],
  },
  {
    title: 'Snacks',
    data: [
      {id: 1, name: 'Chips'},
      {id: 2, name: 'Cookies'},
      {id: 3, name: 'Candy'},
    ],
  },
];

const SectionList = () => {
  return (
    <View>
      {listItems.map((section, index) => (
        <View key={index} style={{marginBottom: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {section.title}
          </Text>
          {section.data.map(item => (
            <Text key={item.id} style={{paddingLeft: 10}}>
              {item.name}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

export default SectionList;
