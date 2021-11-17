import React from 'react';
import { StatusBar } from 'react-native';
import Navigator from './Navigator/Navigator';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';


export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular
  })

  StatusBar.setBarStyle('light');
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Navigator />
    );
  }
}

