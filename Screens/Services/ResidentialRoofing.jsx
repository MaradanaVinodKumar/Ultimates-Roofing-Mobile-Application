import { View, Text, StyleSheet, Image,SafeAreaView } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import roof from "../../assets/AboutPageImages/roof.jpg";

export default function ResidentialRoofing() {
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Text style={styles.textAboveImage}>
          Ultimates ROOFING & SIDING
        </Text>
        <Text style={styles.textAboveImage2}>RESIDENTIAL ROOFING</Text>
        <Image source={roof} style={styles.roof} />
      </View>
    </ScrollView></SafeAreaView>
  );
}
const styles = StyleSheet.create({
  roof: {
    height: 200,
    backgroundColor: "rgba(30, 30, 42, 0.57)",
  },
  textAboveImage: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 50,
    marginLeft: 25,
  },
  textAboveImage2: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    fontSize: 25,
    textAlign: "justify",
    width: "100%",
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 75,
    marginLeft: 60,
  },
});
