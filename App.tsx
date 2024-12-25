import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { 
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';

import { Loading } from '@components/Loading';

import { Routes } from 'src/routes';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  useEffect(() => {
    if (fontsLoaded)
      SplashScreen.hideAsync();
  }, [fontsLoaded]);

  return (
    <ThemeProvider theme={theme}>
        <StatusBar
        barStyle={'light-content'}
        backgroundColor={"transparent"}
        translucent
        />
      {fontsLoaded ? <Routes/> : <Loading />}
    </ThemeProvider>
  );
}