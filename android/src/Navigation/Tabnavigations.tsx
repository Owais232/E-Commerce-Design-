import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../components/Homescreen';
import Settingsscreen from '../Screens/Settingsscreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomTabNavigator from './Customtabnavigator';
import Products from '../components/Products';

const Tab = createBottomTabNavigator();

const Tabnavigation = () => {
    return (
        <Tab.Navigator tabBar={(props) => <CustomTabNavigator {...props} />}>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Settings" component={Settingsscreen} />
        <Tab.Screen name="Plus" component={Settingsscreen} />
        <Tab.Screen name="Circle" component={Products} />
        <Tab.Screen name="Compass" component={Settingsscreen} />
        
       
      </Tab.Navigator>
    );
};

export default Tabnavigation;