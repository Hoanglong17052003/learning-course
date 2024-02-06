import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function ChapterSection({chapterList}) {
  return chapterList&&(
    <View style={{padding: 10,paddingBottom: 50, backgroundColor: Colors.WHITE, marginTop: 10, borderRadius: 15}}>
      <Text style={{fontFamily: 'SemiBold', fontSize: 22}}>Chapters</Text>
      {chapterList.map((item,index)=>(
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between', 
        padding: 15, borderWidth: 1, borderRadius: 10, marginTop: 10, borderColor: Colors.DARK_GRAY}}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Text style={{fontFamily: 'SemiBold', fontSize: 16, color: Colors.DARK_GRAY}}>{index+1}</Text>
            <Text style={{fontFamily: 'Bold', fontSize: 14, color: Colors.DARK_GRAY}}>{item.title }</Text>
          </View>
          <FontAwesome5 name="play-circle" size={25} color={Colors.DARK_GRAY} />
        </View>
      ))}
    </View>
  )
}