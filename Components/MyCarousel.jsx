import React from "react";
import { View, Text } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
// import { SliderBox } from "react-native-view-slider";

export default function MyCarousel() {
  const images = [
    require("../assets/CarouselImages/c1.jpeg"),
    require("../assets/CarouselImages/c2.jpeg"),
    require("../assets/CarouselImages/c3.jpeg"),
    require("../assets/CarouselImages/c4.jpeg"),
  ];
  const texts = ["vinod", "kumar", "uday", "adithya"];
  const views = [
    <View style={{ flex: 1, backgroundColor: "lightblue" }} />,
    <View style={{ flex: 1, backgroundColor: "lightgreen" }} />,
    <View style={{ flex: 1, backgroundColor: "lightcoral" }} />,
    <View style={{ flex: 1, backgroundColor: "lightgoldenrodyellow" }} />,
  ];



  return (
    <View style={{ marginTop: "10%", width: "100%" }}>
      <SliderBox
        images={images}
        sliderBoxHeight={200}
        SliderBoxWidth={"100%"}
        dotColor="crimson"
        inactiveDotColor="black"
        paginationBoxVerticalPadding={10}
        autoplayInterval={1500}
        circleLoop
      />
    </View>
  );
}
