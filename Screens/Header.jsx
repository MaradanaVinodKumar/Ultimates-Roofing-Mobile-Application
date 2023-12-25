import { StyleSheet, Image, SafeAreaView, Platform, View, TouchableNativeFeedback } from "react-native";
import React from "react";
import logo from "../assets/UltimatesLogo.png";
import GifLogo from "../assets/UltimatesLogoGif2.gif"
import Icon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


export default function Header() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.view}>
      <View style={{ justifyContent: 'center', width: '12.5%', paddingLeft: '3%', }}>
        <TouchableNativeFeedback onPress={() => { nav.openDrawer() }}>
          <View >
            <Icon name="md-menu" size={40} color="black" />
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={{
        width: "100%",
        height: "100%",

        paddingLeft: '10%'
      }}>
        <Image
          style={{
            width: "60%",
            height: "100%",
          }}

          source={GifLogo}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    height: 65,
    backgroundColor: "white",
    marginVertical: Platform.OS === "ios" ? 15 : 0,
    flexDirection: 'row'
  },
});
