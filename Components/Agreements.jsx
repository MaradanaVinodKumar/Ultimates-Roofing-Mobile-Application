import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FlipCard from "react-native-flip-card";

export default function Agreements() {
  return (
    <View
      style={{
        backgroundColor: "grey",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
        alignItems: "center",
              justifyContent: "center",
        marginTop:35
      }}
      >
          
      <View style={{ backgroundColor: "orange", height: 300, marginTop: 20 }}>
        <Text style={styles.text_p}>Your Investment Is Safe</Text>
        <Text style={styles.text_head}>10-Year{"\n"}Warranty</Text>
        <Text style={styles.text_Subp}>
          Contact Ultimate Roofing WV LLC for more details.
        </Text>
        <Text style={styles.text_num}>(304) 212-2689</Text>
      </View>
      <View style={{ marginTop: 30 }}></View>
      <View style={{ backgroundColor: "orange", height: 300 }}>
        <Text style={styles.text_p}>Purchase a New Roof</Text>
        <Text style={styles.text_head}>Save 50% on{"\n"}New Gutters</Text>
        <Text style={styles.text_Subp}>
          Contact Ultimate Roofing WV LLC for more details.
        </Text>
        <Text style={styles.text_num}>(304) 212-2689</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text_p: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  text_head: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },
  text_Subp: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  text_num: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 35,
  },
});
