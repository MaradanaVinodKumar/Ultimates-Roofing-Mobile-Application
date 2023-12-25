import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import service1 from "../assets/ServicePageImages/our-service1.jpg";
import service2 from "../assets/ServicePageImages/our-service2.jpg";
import service3 from "../assets/ServicePageImages/our-service3.jpg";
import service4 from "../assets/ServicePageImages/our-service4.jpg";
import service5 from "../assets/ServicePageImages/our-service5.jpg";
import { useNavigation } from "@react-navigation/native";
import roof from "../assets/AboutPageImages/roof.jpg";
import MyCarousel from "../Components/MyCarousel";
import Footer from "../Components/Footer";

export default function ServicePage() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.sidePoint}>
        <TouchableOpacity>
          <MaterialIcons
            name="request-quote"
            size={34}
            color="white"
            onPress={() => {
              navigation.navigate("quote");
            }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.viewStyle}>
        <View style={{ flex: 1 }}>
          <Text style={styles.textAboveImage}>Ultimates ROOFING & SIDING</Text>
          <Text style={styles.textAboveImage2}>SERVICES</Text>
          <Image source={roof} style={styles.roof} />
        </View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginHorizontal: "8%",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          WHAT WE DO
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginHorizontal: "12%",
            marginVertical: "2%",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Ultimates Roofing and Siding offers a full range of services including
          the installation of new roofs, roof maintenance, roof repairs, and
          re-roofing services for both Residential and Commercial projects
          including homes, offices, warehouses, and multi-family dwellings.
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: "center", // Centers vertically
            alignItems: "center",
            marginTop: 20, // Centers horizontally
          }}
        >
          <Image source={service1} style={styles.ourImage} />
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Residential")}
        >
          <Text style={styles.buttonText}>RESIDENTIAL ROOFING</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Centers vertically
            alignItems: "center",
            marginTop: 50, // Centers horizontally
          }}
        >
          <Image source={service2} style={styles.ourImage} />
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Commercial")}
        >
          <Text style={styles.buttonText}>COMMERCIAL ROOFING</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Centers vertically
            alignItems: "center",
            marginTop: 50, // Centers horizontally
          }}
        >
          <Image source={service3} style={styles.ourImage} />
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Siding")}
        >
          <Text style={styles.buttonText}>SIDING INSTALLATION</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Centers vertically
            alignItems: "center",
            marginTop: 50, // Centers horizontally
          }}
        >
          <Image source={service4} style={styles.ourImage} />
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Gutters")}
        >
          <Text style={styles.buttonText}>GUTTERS</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Centers vertically
            alignItems: "center",
            marginTop: 50, // Centers horizontally
          }}
        >
          <Image source={service5} style={styles.ourImage} />
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Windows")}
        >
          <Text style={styles.buttonText}>WINDOWS</Text>
        </TouchableOpacity>
        <MyCarousel />
        <View style={{ backgroundColor: "red", height: 170, marginTop: 40 }}>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            GET A FREE ESTIMATE
          </Text>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 20,
              fontSize: 16,
              marginHorizontal: 10,
            }}
          >
            Have a question about any of our service? Give us a call at (614)
            766-8100 or email us for a Free Estimate
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: "55%",
            padding: 8,
            left: 60,
            bottom: 20,
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            marginHorizontal: "6%",
          }}
          onPress={() => navigation.navigate("FreeEstimate")}
        >
          <Text
            style={{
              color: "red",
              fontSize: 16,
              fontWeight: "bold",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            GET A FREE ESTIMATE
          </Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  img: {
    padding: 10,
  },

  viewStyle: { flex: 1 },
  ourImage: {
    width: "90%",
    height: "23%",
    paddingVertical: "35%",
  },
  buttonContainer: {
    backgroundColor: "red",
    width: "90%",
    padding: 6,

    alignItems: "center",
    marginHorizontal: "5%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  sidePoint: {
    height: 60,
    width: 50,
    backgroundColor: "black",
    top: 380,
    right: 0,
    position: "absolute",
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 11,
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
