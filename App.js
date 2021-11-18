import React from 'react';
import { StatusBar } from 'react-native';
import Navigator from './Navigator/Navigator';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import uiReducer from './store/reducers/UI'

const reducer = createStore(uiReducer)

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular
  })



  StatusBar.setBarStyle('light');
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={reducer}>
        <Navigator />
      </Provider>
    );
  }
}

