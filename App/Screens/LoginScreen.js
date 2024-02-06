import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Entypo } from '@expo/vector-icons';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
    <View>
        <View style={styles.FormatImage}>
            <Image source={require('../../assets/images/background.jpg')}
                style={styles.MainImage}
            />  
        </View>
        <View style={styles.BottomBackground}>
            <View style={styles.FormatBackgroundBottom}>
                <View style={styles.SpaceIconText}>
                    <Entypo name="code" size={50} color="white" />
                    <Text style={{fontSize: 30, fontFamily: 'Bold', color: Colors.WHITE}}>CodeBox</Text>
                </View>
                <Text style={{fontSize: 22, textAlign: 'center', color: Colors.LIGHT_GRAY}}>Your Ultimate Programming Learning Box</Text>
                <TouchableOpacity onPress={onPress} style={styles.TouchableOpacityFormat} >
                    <Image source={require('../../assets/images/google.png')}
                    style={{height: 30, width: 30, borderRadius: 30}}/>
                    <Text style={{fontSize: 18, paddingHorizontal: 5, color: Colors.PRIMARY, fontFamily: 'Regular'}}>Login with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    FormatImage:{
        display: 'flex',
        alignItems: 'center',
        marginTop: 60, 
    },
    MainImage:{
        height: 520,
        width: 250,
        borderRadius: 30
    },
    BottomBackground:{
        backgroundColor: Colors.PRIMARY,
        height: '70%',
        width: '100%',
        marginTop: -210, 
    },
    FormatBackgroundBottom:{
        display: 'flex',
        alignItems: 'center'
    },
    SpaceIconText:{
        marginVertical: 30,
        alignItems: 'center'
    },
    TouchableOpacityFormat:{
        backgroundColor: Colors.WHITE,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop: 25,
        borderRadius: 30,
        padding: 15, 
        gap: 15,
    }
})