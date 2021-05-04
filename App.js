//search and add button

import React ,{useEffect}from 'react'
import { View, Button, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons,Foundation,AntDesign} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import CardScreen from './CardLayout'
import MessengerScreen from './Dummy'
import ProfileScreen from './Profile'
import {StatusBar} from 'expo-status-bar';
import SearchScreen from './Search';

const Tab = createMaterialBottomTabNavigator();

const App=()=>{
   
  
  
  return(
   
  
   <View style={styles.screen}>

    
      <NavigationContainer independent={true}>
        <StatusBar style="dark"/>
        <Tab.Navigator
         initialRouteName="Cards" 
         labeled={false} 
         barStyle={{backgroundColor: '#0241ff'}}
         tabBarOptions={{showIcon:true, showLabel:false}}
       >
        <Tab.Screen name="Profile" component={ProfileScreen}
            options={{
                tabBarIcon: () => (
                  <Ionicons name="person-circle-outline" size={24} color="white" />
                )
            }} 
        />
         <Tab.Screen name="Search" component={SearchScreen}
            options={{
                tabBarIcon: () => (
                  <Ionicons name="search1" size={24} color="white" />
                )
            }} 
        />

        <Tab.Screen name="Cards" component={CardScreen}
            options={{
                tabBarIcon: () => (
                  <Foundation name="page-multiple" size={24} color="white" />
                )
            }} 
            />
        
        <Tab.Screen name="Messenger" component={MessengerScreen}
            options={{
                tabBarIcon: () => (
                  <AntDesign name="message1" size={24} color="white" />
                )
            }} 
        />
        </Tab.Navigator>
        </NavigationContainer> 
        </View> 
      
   )
          }

const styles=StyleSheet.create({
  screen:{
    flex:1,
    marginTop:20,
    
  }

})
       /*Cards*/
        /*Swipe-buttons*/ 
export default App






