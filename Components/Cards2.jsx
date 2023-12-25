import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import FlipCard from "react-native-flip-card";

import residential from "../assets/CardsImages/house.png";
import service from "../assets/CardsImages/economy-forecast.png";
import finance from "../assets/CardsImages/sales-enablement.png";

export default function Cards1() {
  return (
    <SafeAreaView>
      <FlipCard
        style={styles.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
      >
        <View style={styles.view}>
          <Image source={residential} style={styles.image} />
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
            Residential and Commercial Service
          </Text>
        </View>
        <View style={styles.view_black}>
          <Text style={styles.backText}>
            Our goal as well as primary source for new customers is to do a job
            so well that as a homeowner you would be proud and even compelled to
            recommend our service to those whom you know.
          </Text>
        </View>
      </FlipCard>

      <FlipCard
        style={styles.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
      >
        <View style={styles.view_white}>
          <Image source={service} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "black",
              fontWeight: "900",
              width: "50%",
              textAlign: "center",
              marginTop: 15,
            }}
          >
            Free Service Estimates Upon Request
          </Text>
        </View>
        <View style={styles.view_mission_black}>
          <Text style={styles.backText}>
            Most of our business comes from referrals. That would not be
            possible if we did not put the customer first. Check out our Better
            Business Bureau link which we proudly display on the primary
            navigation at the top of this page.
          </Text>
        </View>
      </FlipCard>
      <FlipCard
        style={styles.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
      >
        <View style={styles.view}>
          <Image source={finance} style={styles.image} />
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
            Financing Options With SFC
          </Text>
        </View>
        <View style={styles.view_black}>
          <Text style={styles.backText}>
            We take care of the small details as well as the large ones. We
            treat each and every home as if it were our own. By maintaining that
            standard, we assure our customers that quality is always the top
            priority.
          </Text>
        </View>
      </FlipCard>

    
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "crimson",
  },
  view_white: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "white",
  },
  view_mission_black: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "black",
    borderColor: "crimson",
    borderWidth: 3,
  },
  view_black: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "black",
    borderColor: "crimson",
    borderWidth: 3,
  },
  image: {
    width: 50, // set the width of the image as needed
    height: 50, // set the height of the image as needed
    resizeMode: "cover", // or 'contain' based on your preference
    marginRight: 10, // add margin for spacing between image and text
  },
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
});
