import React from 'react';
import { View, StyleSheet } from 'react-native';
import Mainnavigation from './android/src/Navigation/Index.tsx';
import Tabnavigation from './android/src/Navigation/tabnavigations.tsx';
import { NavigationContainer } from '@react-navigation/native';
import Customtabnavigator from './android/src/Navigation/Customtabnavigator.tsx';


const App = () => {
  return (
    <NavigationContainer>
      <Mainnavigation />
    </NavigationContainer>
   

  );
};



export default App;
