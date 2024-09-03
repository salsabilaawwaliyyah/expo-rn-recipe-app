// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;









// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={
//       {
//         width: 100,
//         height: 100,
//         backgroundColor: 'pink'
//       }}/>
//       <View style={
//       {
//         width: 100,
//         height: 100,
//         backgroundColor: 'blue'
//       }}/>
//       <View style={
//       {
//         width: 100,
//         height: 100,
//         backgroundColor: 'red'
//       }}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, //consumsi semua bagian layar atau => width =100, dan height=100
//     backgroundColor: '#fff',
//     justifyContent: 'space-between',    //center: masih di kiri tapi di tengah , space between = dikasi jarang tengahnya, 
//     alignItems: 'center',
//     flexDirection: 'row',  //urutan, row=kanan ke kiri, column=atas ke bawah
//   },
// });
