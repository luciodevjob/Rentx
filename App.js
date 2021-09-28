import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AppLoading from  'expo-app-loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {
    useFonts, 
    Inter_400Regular, 
    Inter_500Medium, 
    
} from '@expo-google-fonts/inter'
import { 
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold

} from '@expo-google-fonts/archivo'

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { Home } from './src/screens/Home';
import { CarDetail } from './src/screens/CarDetail';
import { Scheduling } from './src/screens/Scheduling';
import { SchedulingDetail } from './src/screens/SchedulingDetail';
import { SchedulingComplete } from './src/screens/SchedulingComplete';
import { Routes } from './src/routes';

export default function App() {

    const [fontsLoaded] = useFonts({
        Inter_400Regular, 
        Inter_500Medium, 
        Archivo_400Regular,
        Archivo_500Medium,
        Archivo_600SemiBold
    });

    if(!fontsLoaded){
        return <AppLoading/>
    }
    return (
      <ThemeProvider theme={theme}>
        <Routes/>
    </ThemeProvider>
    );
  }

