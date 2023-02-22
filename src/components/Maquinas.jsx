import React from "react";
import { Text, View, ImageBackground } from "react-native";
import Carousel from "pinar";

const Maquinas = () => (
  <Carousel>
    <View style={styles.slide}>
      <ImageBackground style={styles.image} source={require('../assets/image1.jpg')} />
      <View style={styles.textContainer}>
        <Text style={styles.text1}>marilu</Text>
      </View>
    </View>
    <View style={styles.slide}>
      <ImageBackground style={styles.image} source={require('../assets/image2.jpg')} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>SEGUNDA IMG</Text>
      </View>
    </View>
    <View style={styles.slide}>
      <ImageBackground style={styles.image} source={require('../assets/image3.jpg')} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>TERCERA IMG</Text>
      </View>
    </View>
  </Carousel>
);

//Styles

const styles = {
  slide: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },

  textContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: '#08579240',
    textAlign: 'center',
  },

  text1: {
    color: 'black',
    fontSize: 100,
    fontWeight: 'bold',
    backgroundColor: 'red',
    // textAlign: 'center',
  },
  
};

export default Maquinas