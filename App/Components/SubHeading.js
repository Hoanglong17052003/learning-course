import { View, Text } from 'react-native'
import React from 'react'

export default function SubHeading({text}) {
  return (
    <View>
      <Text style={{fontFamily: 'Bold', fontSize: 24}}>{text}</Text>
    </View>
  )
}