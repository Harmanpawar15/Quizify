import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Component/Home';
import Main from './Component/Main';
import Result from './Component/Result';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen name="Home"
   component={Home}/>
   <Stack.Screen name="Main"
    component={Main}
   />
  
   <Stack.Screen name="Result"
   component={Result} />
   </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
