import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Provider} from 'react-redux'
import Store from './store/configStore'

import ListClubs from './Screens/ListClubs';
import InfoDeClubScreen from './Screens/InfoDeClubScreen'
import AddNewClub from './Screens/AddNewClub';

const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={Store}>
        <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name ="ListClubs" component={ListClubs}/>  
           <Stack.Screen name ="InfoDeClubScreen" component={InfoDeClubScreen}/> 
           <Stack.Screen name ="AddNewClub" component={AddNewClub}/>   
        </Stack.Navigator>
      </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
