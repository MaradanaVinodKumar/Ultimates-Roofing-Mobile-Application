import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
import welcome from "../assets/WelcomeBackground.png";
import welcomeHome from "../assets/welcomeHouse.png";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(10)).current; // Initial value for opacity: 0
    const slideAnim = useRef(new Animated.Value(1000)).current; // Initial value for slide: 100

    useEffect(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 10000,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }, [fadeAnim, slideAnim]);

    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
          transform: [{ translateX: slideAnim }],
        }}
      >
        {props.children}
      </Animated.View>
    );
  };
  const navigation = useNavigation();
  return (
    <>
      <View style={{ marginTop: 50 }}></View>
      <FadeInView style={styles.container}>
        {/* Background Image */}
        <Image
          source={welcome} // Update with your image URL //1st updated by figma image
          style={styles.backgroundImage}
        />
        <Image source={welcomeHome} style={{ position: 'absolute', bottom: 0, right: 0 }} />

        {/* Transparent White Background View */}
        <View style={styles.overlay}>
          {/* Text */}

          <Text style={styles.heading}>Welcome to Ultimates{"\n"}Roofing, Where Excellence{"\n"}Meets Innovation</Text>
          {/* <Text style={styles.redText}>
            A Long History of Roofing Excellenece
          </Text> */}
          <Text style={styles.para}>
            Ultimates Roofing LLC presents a comprehensive array of services, encompassing new roof installations, meticulous roof maintenance, expert roof repairs, and cutting-edge re-roofing solutions for Residential and Commercial ventures. Our expertise extends to homes, offices, warehouses, and multi-family dwellings. Over the years, clients have recognized and valued the adept and professional service synonymous with us.
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                navigation.navigate("About");
              }}
            >
              More About Us
            </Text>
          </TouchableOpacity>
        </View>
      </FadeInView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    flex: 1,
    // backgroundColor: "rgba(255, 255, 255, 0.8)", // Transparent white background (adjust the last value for transparency)
    marginHorizontal: "7%",
    marginVertical: "3%",
    paddingTop: '10%'
  },
  text: {
    fontSize: 20,
    color: "#333", // Text color
    fontWeight: "900",
    textAlign: "justify",
    marginHorizontal: "5%",
    width: "50%",
  },
  heading: {
    textAlign: 'justify',
    fontSize: 22,
    fontWeight: "500",
    marginTop: 15,
    marginHorizontal: "5%",
    width: '100%'
  },
  redText: {
    color: "#B22335",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center",
  },
  para: {
    fontSize: 18,
    marginTop: 0,
    marginHorizontal: "6%",
    color: "#323539"
  },
  buttonContainer: {
    backgroundColor: "#B22335",
    width: "50%",
    padding: 10,

    alignItems: "center",
    marginHorizontal: "6%",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
