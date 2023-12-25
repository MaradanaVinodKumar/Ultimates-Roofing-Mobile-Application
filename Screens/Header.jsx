import { StyleSheet, Image, SafeAreaView, Platform, View, TouchableNativeFeedback, Text } from "react-native";
import React from "react";
import logo from "../assets/UltimatesLogo.png";
import GifLogo from "../assets/UltimatesLogoGif2.gif"
import Icon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


export default function Header(props) {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.view}>

      <View style={{
        width: "60%",
        height: "100%",
        paddingLeft: 20,
        paddingTop: 9
      }}>
        <Image
          style={{
            width: "52%",
            height: "80%",
          }}

          source={logo}
        />
      </View>

      {

        props.button ? (
          <View style={{
            width: "40%",
            height: "100%",
            alignItems: 'center'
          }}>
            <View style={{
              width: "70%",
              height: "100%",
              paddingTop: 13,
              paddingLeft: '2%'
            }}>
              <TouchableNativeFeedback onPress={() => nav.navigate("quote")}>
                <View style={{ borderWidth: 1, padding: 10, alignItems: 'center', backgroundColor: '#3D3B6D', borderRadius: 3 }}>
                  <Text style={{ fontSize: 11, fontWeight: 400, letterSpacing: 0.22, color: '#F9F9F9' }}>
                    Instant Roof Quote
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>) : (<View style={{
            width: "40%",
            height: "100%",
            alignItems: 'center'
          }}></View>
        )
      }
      {/* <View style={{ justifyContent: 'center', width: '12.5%', paddingLeft: '3%', }}>
        <TouchableNativeFeedback onPress={() => { nav.openDrawer() }}>
          <View >
            <Icon name="md-menu" size={40} color="black" />
          </View>
        </TouchableNativeFeedback>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    height: 63,
    backgroundColor: "white",
    marginVertical: Platform.OS === "ios" ? 15 : 0,
    flexDirection: 'row'
  },
});
