// // import {View, Text, Button} from 'react-native';
// // import React from 'react';
// // import {NavigationContainer} from '@react-navigation/native';
// // import {createNativeStackNavigator} from '@react-navigation/native-stack';
// // import Home from './src/navigation-screens/Home';
// // import About from './src/navigation-screens/About';
// // import Login from './src/navigation-screens/Login';
// // import MyHeader from './src/navigation-screens/MyHeader';

// // const Stack = createNativeStackNavigator();
// // const App = () => {
// //   const headerTitle = () => (
// //     <Button title="Go to Home" onPress={() => alert('Go to Home')} />
// //   );
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator
// //         screenOptions={{
// //           headerStyle: {backgroundColor: '#f4511e'},
// //           headerTintColor: '#fff',
// //           headerTitleStyle: {
// //             fontWeight: 'bold',
// //             fontSize: 20,
// //           },
// //           headerTitleAlign: 'center',
// //           headerShown: true,
// //           contentStyle: {
// //             backgroundColor: 'red',
// //           },
// //         }}>
// //         <Stack.Screen
// //           name="Header"
// //           component={MyHeader}
// //           options={{
// //             title: '',
// //             // headerTitle: () => (
// //             //   <Button title="Go to Home" onPress={() => alert('Go to Home')} />
// //             // ),
// //             // headerRight: () => (
// //             //   <Button title="Go to Home" onPress={() => alert('Go to Home')} />
// //             // ),
// //             headerTitle: headerTitle,
// //           }}
// //         />
// //         <Stack.Screen
// //           name="Login"
// //           component={Login}
// //           // options={{
// //           //   title: 'Login Screen',
// //           //   headerStyle: {backgroundColor: '#f4511e'},
// //           //   headerTintColor: '#fff',
// //           //   headerTitleStyle: {
// //           //     fontWeight: 'bold',
// //           //     fontSize: 20,
// //           //   },
// //           //   headerTitleAlign: 'center',
// //           // }}
// //         />
// //         <Stack.Screen
// //           name="Home"
// //           component={Home}
// //           options={{headerShown: false}}
// //         />
// //         <Stack.Screen name="About" component={About} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // export default App;
// import 'react-native-gesture-handler';
// import {View, Text, Button} from 'react-native';
// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
// import 'react-native-reanimated';

// const Drawer = createDrawerNavigator();

// const HomeScreen = ({navigation}) => {
//   <View>
//     <Text>Home Screen</Text>
//     <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
//   </View>;
// };
// const Profile = ({navigation}) => {
//   <View>
//     <Text>Profile Screen</Text>
//     <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
//   </View>;
// };
// const Setting = ({navigation}) => {
//   <View>
//     <Text>Setting Screen</Text>
//     <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
//   </View>;
// };
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{
//           drawerStyle: {
//             backgroundColor: '#e6e6e6',
//             width: 240,
//           },
//           drawerLabelStyle: {
//             fontSize: 25,
//             color: '#333',
//           },
//           headerStyle: {
//             backgroundColor: '#6200EE',
//           },
//           headerTintColor: '#fff',
//           headerTitleAlign: 'center',
//         }}>
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Profile" component={Profile} />
//         <Drawer.Screen name="Setting" component={Setting} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from './src/navigation-screens/Home';
// import Icon from 'react-native-vector-icons/Ionicons';

// const Tab = createBottomTabNavigator();

// const HomeScreen = () => {
//   return (
//     <View>
//       <Text>HomeScreen</Text>
//     </View>
//   );
// };
// const AboutScreen = () => {
//   return (
//     <View>
//       <Text>AboutScreen</Text>
//     </View>
//   );
// };
// const ProfileScreen = () => {
//   return (
//     <View>
//       <Text>ProfileScreen</Text>
//     </View>
//   );
// };

// const getTabBarIcon = (routeName, focused, color, size) => {
//   let iconName;

//   if (routeName === 'Home') {
//     iconName = focused ? 'home' : 'home-outline';
//   } else if (routeName === 'About') {
//     iconName = focused ? 'information-circle' : 'information-circle-outline';
//   } else if (routeName === 'Profile') {
//     iconName = focused ? 'person' : 'person-outline';
//   }

//   return <Icon name={iconName} size={size} color={color} />;
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           headerShown: false, // 👈 hide header
//           tabBarIcon: ({focused, color, size}) =>
//             getTabBarIcon(route.name, focused, color, size),
//           tabBarActiveTintColor: '#007bff',
//           tabBarInactiveTintColor: '#ccc',
//           tabBarStyle: {
//             paddingBottom: 5,
//             height: 60,
//           },
//         })}>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="About" component={AboutScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import {View, Text} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// const HomeScreen = () => {
//   return (
//     <View>
//       <Text>HomeScreen</Text>
//     </View>
//   );
// };
// const AboutScreen = () => {
//   return (
//     <View>
//       <Text>AboutScreen</Text>
//     </View>
//   );
// };
// const ProfileScreen = () => {
//   return (
//     <View>
//       <Text>ProfileScreen</Text>
//     </View>
//   );
// };
// const Tab = createMaterialTopTabNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import {View, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
