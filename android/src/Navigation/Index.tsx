import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "../components/Homescreen";
import Products from "../components/Products";
import Tabnavigation from './Tabnavigations';

const Stack = createNativeStackNavigator();

const Mainnavigation = () => {
  return (
   
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="allproducts" component={Products} options={{ headerShown: false }}/>
        <Stack.Screen name="Tabs" component={Tabnavigation} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
};

export default Mainnavigation;
