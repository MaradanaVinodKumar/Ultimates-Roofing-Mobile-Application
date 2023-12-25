import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { Video } from "expo-av";

import { MaterialIcons } from "@expo/vector-icons";
import ourService1 from "../assets/ServicePageImages/our-service1.jpg";
import ourService2 from "../assets/ServicePageImages/our-service2.jpg";
import ourService3 from "../assets/ServicePageImages/our-service3.jpg";
import ourService4 from "../assets/ServicePageImages/our-service4.jpg";
import ourService5 from "../assets/ServicePageImages/our-service5.jpg";
import Welcome from "../Components/Welcome";
import PromiseText from "../Components/PromiseText";
import { useNavigation } from "@react-navigation/native";
import Cards1 from "../Components/Cards1";
import Cards2 from "../Components/Cards2";
import MyCarousel from "../Components/MyCarousel";
import Footer from "../Components/Footer";
import Agreements from "../Components/Agreements";
import Icon from "@expo/vector-icons/Ionicons";
// import TextCarousal from "../Components/TextCarousal";



// import { Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const navigation = useNavigation();

  const sample = require("../assets/final.gif");
  // const videoRef = useRef(null);
  // const navigation = useNavigation();
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("beforeRemove", (e) => {
  //     // Pause or stop the video when navigating away
  //     if (videoRef.current) {
  //       videoRef.current.pauseAsync(); // or use videoRef.current.stopAsync();
  //     }
  //   });

  //   const playVideo = async () => {
  //     if (videoRef.current) {
  //       try {
  //         if (Platform.OS === "ios") {
  //           // On iOS, autoplay is not allowed, so play manually
  //           await videoRef.current.playAsync();
  //         } else {
  //           // On Android, use shouldPlay prop for autoplay
  //           // Ensure shouldPlay is true for Android
  //           videoRef.current.playAsync();
  //         }
  //       } catch (error) {
  //         or("Error playing video:", error);
  //       }
  //     }
  //   };

  //   playVideo(); // Play the video when component mounts

  //   return unsubscribe;
  // }, [navigation]);
  // const handlePlaybackStatusUpdate = (status) => {
  //   if (status.didJustFinish) {
  //     // Check if videoRef is available
  //     if (videoRef.current) {
  //       videoRef.current.replayAsync();
  //     }
  //   }
  // };
  return (
    <SafeAreaView>
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

      <ScrollView style={{ height: 'auto' }}>
        <SafeAreaView>
          <View>
            <Image source={sample} style={styles.backgroundVideoContainer} />
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>
                Elevate  {"\n"}Every Horizon{"\n"}With Our Roofing{"\n"}Expertise
              </Text>

              <Text style={styles.sub_text}>
                A symphony of strength resonating{"\n"}through every project
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: "#B22335",
                  padding: 6,
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                  marginRight: '29%',
                  paddingVertical: '3%'
                }}
                onPress={() => navigation.navigate("FreeEstimate")}
              >
                <Text style={styles.buttonText}>GET A FREE ESTIMATE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        {/* <Cards1 /> */}

        <View style={styles.ourServiceBackground}>
          <Text style={{ fontSize: 30, fontWeight: "500", textAlign: "left" }}>
            Our Services
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "left",
              paddingVertical: "2%",

            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "400",
                fontSize: 15,
                textAlign: "justify",
              }}
            >
              From Home and Commercial Roofing to Siding, Gutters, and Windows, our services redefine precision and style. Elevate your property with our commitment to unparalleled craftsmanship.
            </Text>
          </View>
        </View>

        {/*first card */}
        <View style={styles.servicesCards}>
          <View
          // style={{
          //   // flex: 1,
          //   // justifyContent: "center", // Centers vertically
          //   // alignItems: "center", // Centers horizontally
          // }}
          >
            <Image source={ourService1} style={styles.ourImage} />
          </View>
          <Text
            style={styles.servicesCardsHeading}
          >
            Home Roofing
          </Text>
          <Text
            style={styles.servicesCardsText}
          >Enhance your home's protection with expert residential roofing solutions, blending durability and aesthetic appeal seamlessly.
          </Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Residential")}
          >
            <Text style={styles.buttonContainerText}>Learn More</Text>
          </TouchableOpacity>

        </View>
        {/*second card */}
        <View style={styles.servicesCards}>
          <View
          // style={{
          //   flex: 1,
          //   justifyContent: "center", // Centers vertically
          //   alignItems: "center", // Centers horizontally
          // }}
          >
            <Image source={ourService2} style={styles.ourImage} />
          </View>
          <Text
            style={styles.servicesCardsHeading}
          >
            Commercial Roofing
          </Text>
          <Text
            style={styles.servicesCardsText}
          >
            Elevate your business infrastructure with our top-tier commercial roofing services, combining reliability and performance for lasting excellence.
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Commercial")}
          >
            <Text style={styles.buttonContainerText}>Learn More</Text>
          </TouchableOpacity>
        </View>
        {/*3rd card */}
        <View style={styles.servicesCards}>
          <View
          // style={{
          //   flex: 1,
          //   justifyContent: "center", // Centers vertically
          //   alignItems: "center", // Centers horizontally
          // }}
          >
            <Image source={ourService3} style={styles.ourImage} />
          </View>
          <Text
            style={styles.servicesCardsHeading}
          >
            Siding Enhancements
          </Text>
          <Text
            style={styles.servicesCardsText}
          >
            Transform your property's exterior with our premium siding options, offering a perfect fusion of style, durability, and low maintenance.
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Siding")}
          >
            <Text style={styles.buttonContainerText}>Learn More</Text>
          </TouchableOpacity>
        </View>
        {/*4th card*/}
        <View style={styles.servicesCards}>
          <View
          // style={{
          //   // flex: 1,
          //   // justifyContent: "center", // Centers vertically
          //   // alignItems: "center", // Centers horizontally
          // }}
          >
            <Image source={ourService4} style={styles.ourImage} />
          </View>
          <Text
            style={styles.servicesCardsHeading}
          >
            Gutter Systems
          </Text>
          <Text
            style={styles.servicesCardsText}
          >Transform your property's exterior with our premium siding options, offering a perfect fusion of style, durability, and low maintenance.
          </Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Gutters")}
          >
            <Text style={styles.buttonContainerText}>Learn More</Text>
          </TouchableOpacity>

        </View>
        {/*5th card */}
        <View style={styles.servicesCards}>
          <View
          // style={{
          //   // flex: 1,
          //   // justifyContent: "center", // Centers vertically
          //   // alignItems: "center", // Centers horizontally
          // }}
          >
            <Image source={ourService5} style={styles.ourImage} />
          </View>
          <Text
            style={styles.servicesCardsHeading}
          >
            Window Services
          </Text>
          <Text
            style={styles.servicesCardsText}
          >Immerse your spaces in natural light and energy efficiency with our high-quality windows, designed for both beauty and functional brilliance.
          </Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Windows")}
          >
            <Text style={styles.buttonContainerText}>Learn More</Text>
          </TouchableOpacity>

        </View>
        {/* <TouchableOpacity
          style={{
            backgroundColor: "#B22335",
            width: "55%",
            padding: 6,
            alignItems: "center",
            marginHorizontal: "23%",
            marginTop: 40,
          }}
        >
          <Text
            style={styles.buttonText}
            onPress={() => {
              navigation.navigate("Services");
            }}
          >
            VIEW ALL SERVICES
          </Text>
        </TouchableOpacity> */}
        <Welcome />

        <PromiseText />
        <Cards2 />
        {/* <MyCarousel /> */}
        {/* <TextCarousal /> */}
        <Agreements />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundVideoContainer: {
    flex: 1,
    height: Platform.OS === "ios" ? 480 : 450,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    resizeMode: "stretch",
    width: "100%",
  },
  // view: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flex: 1,
  //   height: 200,
  //   backgroundColor: "#B22335",
  // },
  // view_white: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flex: 1,
  //   height: 200,
  //   backgroundColor: "white",
  // },
  // view_mission_black: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flex: 1,
  //   height: 200,
  //   backgroundColor: "black",
  //   borderColor: "#B22335",
  //   borderWidth: 3,
  // },
  // view_black: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flex: 1,
  //   height: 200,
  //   backgroundColor: "black",
  //   borderColor: "#B22335",
  //   borderWidth: 3,
  // },
  // image: {
  //   width: 50, // set the width of the image as needed
  //   height: 50, // set the height of the image as needed
  //   resizeMode: "cover", // or 'contain' based on your preference
  //   marginRight: 10, // add margin for spacing between image and text
  // },
  backText: {
    color: "white",
    fontSize: 15,
    width: "80%",
    textAlign: "center",
  },
  backText_black: {
    color: "black",
    fontSize: 15,
    width: "80%",
    textAlign: "center",
  },
  ourImage: {
    width: "100%",
    height: "26%",
    paddingVertical: "35%",
  },
  buttonContainer: {

    width: '25%',
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "6%",
    marginBottom: '20%',
  },
  buttonContainerText: {
    color: "#B22335",
    fontSize: 15
  },
  buttonText: {
    color: "#F9F9F9",
    fontSize: 16,
    fontWeight: "400",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  headerContainer: {
    padding: 16,
    backgroundColor: "transparent",
    position: "absolute", // Set the desired background color
  },
  headerText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(30, 30, 42, 0.57)", // Set the desired transparency here
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    fontSize: 35,
    textAlign: "justify",
    fontWeight: "bold",
    color: "white",
    width: "84%",

  },
  sub_text: {
    fontSize: 20,
    color: "white",
    width: "79%",
    textAlign: "justify",
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
  servicesCards: {
    marginVertical: '3%',
    marginHorizontal: '5%',
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: '#ffffff',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: '6.5%'
  },
  servicesCardsHeading: {
    fontWeight: "500", fontSize: 22, paddingHorizontal: "6%", marginVertical: 10
  },
  servicesCardsText: {
    textAlign: "justify",
    width: "100%",
    fontSize: 15,
    paddingHorizontal: "7%",
    marginBottom: '3%',
    fontWeight: '400',
    color: '#323539'
  },
  ourServiceBackground: {

    marginHorizontal: '6%',

  }

  // rotateText: {
  //   transform: [{ rotate: '0deg' }], // Adjust the angle as needed
  //   fontSize: 10,
  //    textAlignVertical: 'center',
  //   fontWeight: '500',
  // },
});
