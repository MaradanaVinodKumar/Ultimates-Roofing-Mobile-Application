import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

// import ButtonNavigator from './Screens/ButtonNavigator';
import { StyleSheet, } from "react-native";
import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';


const Stack = createStackNavigator();
const MergeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{}} style={styles.nav}  >
            <Stack.Screen
                name='draw'
                component={DrawerNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="home"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default MergeNavigator;
const styles = StyleSheet.create({
    nav: {

    }
})