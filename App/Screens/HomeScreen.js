import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Colors from '../../Utils/Colors';
import CourseList from '../Components/CourseList';

export default function HomeScreen() {
  return (
    <View>
      <View style={{backgroundColor: Colors.PRIMARY, height: 250, padding: 20, marginTop: 30}}>
        <Header/>
      </View>
      <View style={{padding: 20}}>
        <View style={{marginTop: -100}}>
          <CourseList level={'Basic'}/>
        </View>
          <CourseList level={'Advance'}/>
      </View>
    </View>
  )
}
