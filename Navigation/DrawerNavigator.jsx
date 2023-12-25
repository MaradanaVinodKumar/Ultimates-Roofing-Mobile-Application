import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from "react";
import TabNavigator from './TabNavigator';
import InstantQuote from '../Screens/InstantQuote';
import { Text, View } from 'react-native';



const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <>
            <Drawer.Navigator initialRouteName=" Home " screenOptions={{ headerShown: false, drawerPosition: 'right' }} >
                <Drawer.Screen name=" Home " component={TabNavigator} />
                <Drawer.Screen name=" Map" component={InstantQuote} />
            </Drawer.Navigator>
        </>
    );
};

export default DrawerNavigator;
