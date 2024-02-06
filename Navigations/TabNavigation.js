import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../App/Screens/HomeScreen';
import MyCourse from '../App/Screens/MyCourse';
import LeaderBoard from '../App/Screens/LeaderBoard';
import ProfileScreen from '../App/Screens/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import HomeScreenNavigation from './HomeScreenNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor: Colors.PRIMARY}}>
      <Tab.Screen name="home" component={HomeScreenNavigation} 
      options={{
        tabBarLabel: "Home",
        tabBarIcon:({color, size})=>(
          <FontAwesome name="home" size={size} color={color} style={{marginTop: 5}} />
        ),
      }}/>
      <Tab.Screen name="my-course" component={MyCourse} 
      options={{
        tabBarLabel: "My-Course",
        tabBarIcon:({color, size})=>(
          <FontAwesome5 name="book-open" size={size} color={color} style={{marginTop: 5}} />
        )
      }}/>
      <Tab.Screen name="leader-board" component={LeaderBoard} 
      options={{
        tabBarLabel: "LeaderBoard",
        tabBarIcon:({color, size})=>(
          <Foundation name="graph-bar" size={size} color={color} style={{marginTop: 5}}  />
        )
      }}/>
      <Tab.Screen name="profile" component={ProfileScreen} 
      options={{
        tabBarLabel: "Profile",
        tabBarIcon:({color, size})=>(
          <FontAwesome name="user-circle-o" size={size} color={color} style={{marginTop: 5}} />
        )
      }}/>
    </Tab.Navigator>
  )
}
