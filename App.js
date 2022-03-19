import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './src/routes/app.routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <AppRoutes/>
    </NavigationContainer>
  );
}
