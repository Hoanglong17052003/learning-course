import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import OptionItem from './OptionItem'
import { enrollCourse } from '../Services';

export default function DetailSection({course, enrollCourse}) {
  return (
    <View style={{padding: 10, borderRadius: 15, backgroundColor: Colors.WHITE}}>
      <Image source={{uri: course?.banner?.url}}
      style={{width:Dimensions.get('screen').width*0.88,height: 190, borderRadius: 15}}
      />
      <View style={{padding: 10}}>
        <Text style={{fontSize: 22, fontFamily: 'Bold', marginTop: 10}}>{course.name}</Text>
        <View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginBottom: 10}}>
                <OptionItem icon={'book-outline'} value={course.chapters?.length+ ' Chapters'}/>
                <OptionItem icon={'time-outline'} value={course.time}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginBottom: 10}}>
                <OptionItem icon={'person-circle-outline'} value={course?.author}/>
                <OptionItem icon={'cellular-outline'} value={course.level}/>
            </View>
        </View>
        <View>
            <Text style={{fontFamily:'Regular',fontSize: 20}}>Description</Text>
            <Text style={{fontFamily: 'Bold', color:Colors.DARK_GRAY, lineHeight: 21}}>{course?.description?.markdown}</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly', gap: 20}}>
          <TouchableOpacity onPress={()=>enrollCourse()} style={{padding: 15, backgroundColor: Colors.PRIMARY, borderRadius: 10}}>
            <Text style={{fontFamily: 'Bold', color:Colors.WHITE, textAlign:'center', fontSize: 13}}>Enroll For Free</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 15, backgroundColor: Colors.LIGHTSKYBLUE, borderRadius: 10}}>
            <Text style={{fontFamily: 'Bold', color:Colors.WHITE, textAlign:'center', fontSize: 13}}>Membership $2.99/month</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}