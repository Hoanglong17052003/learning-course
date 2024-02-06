import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../App/Screens/HomeScreen';
import CourseDetailScreen from '../App/Screens/CourseDetailScreen';

const Stack = createStackNavigator();
export default function HomeScreenNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='course-detail' component={CourseDetailScreen}/>
    </Stack.Navigator>
  )
}