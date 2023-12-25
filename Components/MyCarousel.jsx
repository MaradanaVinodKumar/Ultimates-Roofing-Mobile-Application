import React from "react";
import { View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default function MyCarousel() {
  const images = [
    require("../assets/CarouselImages/c1.jpeg"),
    require("../assets/CarouselImages/c2.jpeg"),
    require("../assets/CarouselImages/c3.jpeg"),
    require("../assets/CarouselImages/c4.jpeg"),
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
