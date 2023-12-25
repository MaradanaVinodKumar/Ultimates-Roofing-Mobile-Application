import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import who from "../assets/AboutPageImages/about1.jpeg";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import roof from "../assets/AboutPageImages/roof.jpg";
import Footer from "../Components/Footer";
import SidePointNavigation from "../Components/SidePointNavigation";

import Header from "../Screens/Header";
export default function AboutPage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header button={true} />
      {/* <SidePointNavigation /> */}

      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text style={styles.textAboveImage}>Ultimates ROOFING & SIDING</Text>
          <Text style={styles.textAboveImage2}>ABOUT US</Text>
          <Image source={roof} style={styles.roof} />
        </View>
        <View
          style={{
            marginTop: 30,
            justifyContent: "center", // Centers vertically
            alignItems: "center",
            flex: 1,
          }}
        >
          <Image source={who} style={styles.ourImage} />
        </View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginHorizontal: "8%",
            marginTop: 20,
          }}
        >
          WHO WE ARE
        </Text>
        <Text
          style={{ fontSize: 15, marginHorizontal: "8%", marginVertical: "2%" }}
        >
          Ultimates Roofing and Siding offers a full range of services including
          the installation of new roofs, roof maintenance, roof repairs, and
          re-roofing services for both Residential and Commercial projects
          including homes, offices, warehouses, and multi-family dwellings.
        </Text>
        <Text
          style={{ fontSize: 15, marginHorizontal: "8%", marginVertical: "1%" }}
        >
          Since our start in 2003, our customers have come to know our
          knowledgeable and professional service. Ultimates Roofing and Siding
          is your premier
        </Text>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  ourImage: {
    width: "90%",
    height: "23%",
    paddingVertical: "35%",
  },
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
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 75,
    marginLeft: 105,
  },
});
