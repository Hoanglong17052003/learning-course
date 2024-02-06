import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './App/Screens/LoginScreen';
import { ClerkProvider,SignedIn,SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigations/TabNavigation'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'Light': require('./assets/fonts/Outfit-Light.ttf'),
    'Regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'SemiBold': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });
  return (
    <ClerkProvider
      publishableKey={"pk_test_bGl2aW5nLWdhcmZpc2gtNzYuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
