import { StyleSheet, StatusBar, Text, Image } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "@expo/vector-icons/Ionicons";
// import Icon from "react-native-vector-icons";
// react-native-vector-icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InstantQuote from "../Screens/InstantQuote";
import Header from "../Screens/Header";
import ServicePage from "../Screens/ServicePage";
import AboutPage from "../Screens/AboutPage";
import HomePage from "../Screens/HomePage";
import ResidentialRoofing from "../Screens/Services/ResidentialRoofing";
import CommercialRoofing from "../Screens/Services/CommercialRoofing";
import SidingInstallation from "../Screens/Services/SidingInstallation";
import Gutters from "../Screens/Services/Gutters";
import Windows from "../Screens/Services/Windows";
import FreeEstimate from "../Screens/FreeEstimate";
import ContactPage from "../Screens/ContactPage";
import FAQ from "../Screens/FAQ";
import { View } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomIcon = (props) => {
    return (<>
        <View>
            <Image source={"../assets/homeIconActive.png"} />
            <Text>
                {props.iconName}
            </Text>
            <View>
                <View>
                </View>
            </View>
        </View>
    </>);
}

const TabNavigator = () => {
    // const navigation = useNavigation();
    return (
        <>
            <StatusBar color="black" />
            {/* <Header button={true} /> */}
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    // tabBarActiveBackgroundColor: "crimson",
                    headerShown: false,
                    // tabBarActiveTintColor: "white",
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "#6d6d6d",
                    //tabBarLabelStyle: { fontSize: 15, fontWeight: 400, padding: "2%", position: 'relative', top: -15, borderBottomWidth: 3, borderColor: "#ffffff" },
                    tabBarItemStyle: { borderRadius: 100, borderWidth: 0 },
                    tabBarStyle: { height: 80, },
                }}
            >
                <Tab.Screen
                    name="Home"
                    options={{
                        tabBarIcon: ({ focused }) => (

                            <Icon name="home" size={focused ? 35 : 25} color={focused ? "red" : "black"} />
                            // <BottomIcon iconName="home" />
                        ),
                        // tabBarLabelStyle: { fontSize: 15, fontWeight: 400, padding: "2%", position: 'relative', top: -15, borderBottomWidth: 3, borderColor: "#ff0000" },
                    }}
                >
                    {() => (
                        <Stack.Navigator>
                            <Stack.Screen
                                name="HomeScreen"
                                component={HomePage}
                                options={{
                                    headerShown: false,
                                    // tabBarIcon: () => (
                                    //     <Icon name="home-sharp" size={25} color="black" />
                                    // ),
                                }}
                            />
                            <Stack.Screen
                                name="quote"
                                component={InstantQuote}
                                options={{
                                    headerShown: false,
                                    // headerLeft: () => (
                                    //   <TouchableOpacity
                                    //     style={styles.backButton}
                                    //     onPress={() => navigation.navigate("HomeScreen")}
                                    //   >
                                    //     <Icon name="arrow-back" size={25} color="black" />
                                    //   </TouchableOpacity>
                                    // ),
                                }}
                            />
                            <Stack.Screen
                                name="Residential"
                                component={ResidentialRoofing}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Commercial"
                                component={CommercialRoofing}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Siding"
                                component={SidingInstallation}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Gutters"
                                component={Gutters}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Windows"
                                component={Windows}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="FreeEstimate"
                                component={FreeEstimate}
                                options={{ headerShown: false }}
                            />
                        </Stack.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="About"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name="rocket-sharp" size={focused ? 35 : 25} style={{ color: focused ? "red" : "black" }} />
                        ),
                    }}
                >
                    {() => (
                        <Stack.Navigator>
                            <Stack.Screen
                                name="Abouts"
                                component={AboutPage}
                                options={{
                                    headerShown: false,
                                    tabBarIcon: () => (
                                        <Icon name="home-sharp" size={focused ? 35 : 25} color="black" />
                                    ),
                                }}
                            />
                            <Stack.Screen
                                name="quote"
                                component={InstantQuote}
                                options={{ headerShown: false }}
                            />
                        </Stack.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="Services"
                    options={{
                        tabBarIcon: ({ focused }) => (

                            <View>
                                <Icon name="briefcase-sharp" size={focused ? 35 : 25} style={{ color: focused ? "red" : "black" }} />

                            </View>

                        ),
                    }}
                >
                    {() => (
                        <Stack.Navigator>
                            <Stack.Screen
                                name="Service"
                                component={ServicePage}
                                options={{
                                    headerShown: false,
                                    tabBarIcon: () => (
                                        <Icon name="home-sharp" size={focused ? 35 : 25} color="black" />
                                    ),
                                }}
                            />
                            <Stack.Screen
                                name="quote"
                                component={InstantQuote}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Residential"
                                component={ResidentialRoofing}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Commercial"
                                component={CommercialRoofing}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Siding"
                                component={SidingInstallation}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Gutters"
                                component={Gutters}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Windows"
                                component={Windows}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="FreeEstimate"
                                component={FreeEstimate}
                                options={{ headerShown: false }}
                            />
                        </Stack.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="Contact"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons
                                name="contacts"
                                size={focused ? 35 : 25}
                                style={{ color: focused ? "red" : "black" }}
                            />
                        ),
                    }}
                >
                    {() => (
                        <Stack.Navigator>
                            <Stack.Screen
                                name="Contacts"
                                component={ContactPage}
                                options={{
                                    headerShown: false,
                                    tabBarIcon: () => (
                                        <MaterialCommunityIcons
                                            name="contacts"
                                            size={24}
                                            color="black"
                                        />
                                    ),
                                }}
                            />
                            <Stack.Screen
                                name="quote"
                                component={InstantQuote}
                                options={{ headerShown: false }}
                            />
                        </Stack.Navigator>
                    )}
                </Tab.Screen>

                <Tab.Screen
                    name="FAQ's"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name="information-circle" size={focused ? 35 : 25} style={{ color: focused ? "red" : "black" }} />
                        ),
                    }}
                >
                    {() => (
                        <Stack.Navigator>
                            <Stack.Screen
                                name="Infos"
                                component={FAQ}
                                options={{
                                    headerShown: false,
                                    tabBarIcon: () => (
                                        <Icon
                                            name="information-circle-sharp"
                                            size={25}
                                            color="black"
                                        />
                                    ),
                                }}
                            />
                            <Stack.Screen
                                name="quote"
                                component={InstantQuote}
                                options={{ headerShown: false }}
                            />
                        </Stack.Navigator>
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({
    sidePoint: {
        height: 50,
        width: 50,
        backgroundColor: "red",
        top: 900,
        right: 0,
        position: "absolute",
        zIndex: 1,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        padding: 11,
    },
    backButton: {
        marginLeft: 10,
        padding: 10,
    },
});
