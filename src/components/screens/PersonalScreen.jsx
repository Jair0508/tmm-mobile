import React from "react";
import { Text, View, Image } from "react-native";
import Carousel from "pinar";

const PersonalScreen = () => (
    <Carousel>
    <View style={styles.slide1}>
      <Image style={styles.image} source={require('../../assets/image1.jpg')} />
      <Text style={styles.text}>Primera IMG</Text>
    </View>
    <View style={styles.slide2}>
      <Image style={styles.image} source={require('../../assets/image2.jpg')} />
      <Text style={styles.text}>Segunda IMG</Text>
    </View>
    <View style={styles.slide3}>
      <Image style={styles.image} source={require('../../assets/image3.jpg')} />
      <Text style={styles.text}>TERCERA IMG</Text>
    </View>
  </Carousel>
);

//Styles

const styles = {
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  text: {
    color: "#1f2d3d",
    opacity: 0.7,
    fontSize: 48,
    fontWeight: "bold"
  }
};

export default PersonalScreen