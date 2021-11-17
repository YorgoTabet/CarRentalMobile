import React from 'react';
import { StatusBar } from 'react-native';
import Navigator from './Navigator/Navigator';


export default function App() {
  StatusBar.setBarStyle('light');
  return (
    <Navigator />
  );
}

