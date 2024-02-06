import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const {user} =useUser();
  return (
    <View>
      <View style={styles.firstHeader}>
        <View style={styles.formatHeader}>
            <Image source={{uri: user?.imageUrl}}
            style={{height: 40, width: 40, borderRadius: 30, borderColor: Colors.BLACK, borderWidth: 0.2}}/>
            <View>
                <Text style={{fontFamily: 'Light', color: Colors.DARK_GRAY, fontSize: 12}}>Welcome,</Text>
                <Text style={{fontFamily: 'Regular', color: Colors.WHITE, fontSize: 15}}>{user.fullName}</Text>
            </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', alignItems:'center', gap: 10}}>
            <Image source={require('../../assets/images/hhh.webp')}
            style={{height: 30, width: 30, borderRadius: 30}}/>
            <Text style={{color: Colors.WHITE, fontFamily: 'SemiBold'}}>3500</Text>
        </View>
      </View>
      <View style={styles.formatTextInput}>
        <TextInput placeholder='Search Projects' style={{marginLeft: 30}}/>
        <TouchableOpacity style={{backgroundColor: Colors.LIGHTSKYBLUE, borderRadius: 30, padding: 10}}>
            <FontAwesome name="search" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    firstHeader:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    formatHeader:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    },
    formatTextInput:{
        backgroundColor: Colors.WHITE,
        padding: 5,
        borderRadius: 50,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    }
})