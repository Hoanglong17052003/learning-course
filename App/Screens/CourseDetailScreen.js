import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../Components/DetailSection';
import ChapterSection from '../Components/ChapterSection';
import { useUser } from '@clerk/clerk-expo';
import { enrollCourse } from '../Services';

export default function CourseDetailScreen() {
    const navigation = useNavigation();
    const params = useRoute().params;
    const {user} = useUser();
    useEffect(()=>{
        console.log(params.course)
    },[params.course])
    
    const UserEnrollCourse=()=>{
      enrollCourse(params.course.id,user.primaryEmailAddress.emailAddress).then(resp=>{
        console.log('--',resp);
      })
    }

  return params.course&&(
    <ScrollView style={{padding: 15,paddingTop: 30}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
      </TouchableOpacity>
      <DetailSection course={params.course} enrollCourse={()=>UserEnrollCourse()}/>
      <ChapterSection chapterList={params.course.chapters}/>
    </ScrollView>
  )
}