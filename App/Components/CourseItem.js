import { View, Text, Image  } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function CourseItem({item}) {
  return (
    <View style={{padding: 10,  backgroundColor: Colors.WHITE, marginRight: 15, borderRadius: 15}}>
        <Image source={{uri: item?.banner?.url}}
        style={{width: 210, height: 120, borderRadius: 15}}/>
        <View style={{padding: 7}}>
            <Text style={{fontFamily: 'SemiBold', fontSize: 17}}>{item.name}</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                <View style={{display: 'flex', flexDirection:'row', alignItems:'center', gap: 5, marginTop: 5}}>
                    <Ionicons name="book-outline" size={18} color="black" />
                    <Text>{item?.chapters?.length} Chapters</Text>
                </View>
                <View style={{display: 'flex', flexDirection:'row', alignItems:'center', gap: 2, marginTop: 5}}>
                    <EvilIcons name="clock" size={20} color="black" />
                    <Text>{item?.time}</Text>
                </View>
            </View>
            <Text style={{marginTop: 5, color: Colors.PRIMARY, fontFamily: 'Regular'}}>{item.price==0?'Free':item.price}</Text>
        </View>
    </View>
  )
}