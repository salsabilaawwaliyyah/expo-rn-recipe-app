import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { useNavigation} from '@react-navigation/native';
// import RecipeListScreen from './src/screens/RecipeListScreen';
// import SavedRecipesScreen from './src/screens/SavedRecipesScreen';
// import ScanRecipesScreen from './src/screens/ScanRecipeScreen';

import MainScreen from './src/screens/MainScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{
          headerShown:false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// function HomeScreen() {
//   const navigation = useNavigation();
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
//         <Text>Go to Detail Screen</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function DetailScreen() {
//   const navigation = useNavigation();
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <TouchableOpacity onPress={() => navigation.navigate('Acount')}>
//         <Text>go to account screen</Text>
//     </TouchableOpacity>
//     </View>
//   );
// }

// function AcountScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Acount Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();












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
