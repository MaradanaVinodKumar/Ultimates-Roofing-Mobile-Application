import { View, Text, StyleSheet, Image,SafeAreaView } from "react-native";
import React from "react";
import location from "../assets/ContactPageImages/location.png";
import call from "../assets/ContactPageImages/call.png";
import time from "../assets/ContactPageImages/clock.png";

export default function Cards3() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.view}>
        <Image source={call} style={styles.image} />
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "900",
            width: "50%",
            textAlign: "center",
            marginTop: 15,
          }}
        >
          CALL US TODAY{"\n"} (614) 766-8100
        </Text>
      </View>
      <View style={styles.view}>
        <Image source={time} style={styles.image} />
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "900",
            width: "50%",
            textAlign: "center",
            marginTop: 15,
          }}
        >
          BUSINESS HOURS{"\n"} MON - SUN {"\n"} 8:00am - 6:00pm
        </Text>
      </View>
      <View style={styles.view}>
        <Image source={location} style={styles.image} />
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "900",
            width: "50%",
            textAlign: "center",
            marginTop: 15,
          }}
        >
          ADDRESS{"\n"}Columbus, OH{"\n"} 43235
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "black",
    borderColor: "crimson",
    borderWidth: 5,
    marginTop: 20,
    flexDirection: "row",
  },
  image: {
    height: "25%",
    width: "10%",
    resizeMode: "contain",
  },
});
