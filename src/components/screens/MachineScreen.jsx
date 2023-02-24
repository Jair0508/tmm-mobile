import React, { useState } from "react";
import { Text, View, ImageBackground, TouchableHighlight, TouchableOpacity } from "react-native";
import Carousel from "pinar";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MachineScreen = () => {

  const navigation = useNavigation()

  const [visit,setVisit] = useState(true)

  const pressMachine = () => {
    setVisit(!visit)
  }

  const goToCheckList = () => {
    navigation.navigate('CheckList')
  }

  const goToAbout = () => {
    navigation.navigate('About')
  }

  const infoObjects = [
    {
      id:1,
      title:'izaje',
      content: ['puente grua','izar componenete pesados'],
      image: '../../assets/image1.jpg'
    },
    {
      id:2,
      title:'alambre',
      content: ['monblock', 'otro definicion'],
      image: '../../assets/image2.jpg'
    }
  ]

  return (
    <Carousel>
      <View className="flex-1">
        <ImageBackground className="flex-1 justify-center" source={require('../../assets/image1.jpg')} />
        <View className="absolute left-0 right-0 top-0 bottom-0 justify-center">
          {
            visit ? (
              <TouchableOpacity onPress={pressMachine}>
                <Text className="text-black font-bold text-5xl text-center">
                  Metalizado
                </Text>
              </TouchableOpacity>
            ) : (
              <View>
                <TouchableOpacity onPress={goToCheckList} 
                className="rounded-xl border-solid border-4 
                        border-gray-800 bg-white
                        p-2 m-5">
                  <Text className="text-black font-bold text-5xl text-center">
                    Checklist
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToAbout}
                className="rounded-xl border-solid border-4 
                          border-gray-800 bg-white
                          p-2 m-5">
                  <Text className="text-black font-bold text-5xl text-center">
                    Acerca De..
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressMachine}
                className="rounded-xl border-solid border-4 
                          border-gray-800 bg-white
                          p-2 m-5">
                  <Text className="text-black font-bold text-5xl text-center">
                    NOE
                  </Text>
                </TouchableOpacity>
              </View>
            )
          }
        </View>
      </View>
      <View style={styles.slide}>
        <ImageBackground style={styles.image} source={require('../../assets/image2.jpg')} resizeMode="cover" />
        <View style={styles.textContainer}>
          <Text style={styles.text}>SEGUNDA IMG</Text>
        </View>
      </View>
      <View style={styles.slide}>
        <ImageBackground style={styles.image} source={require('../../assets/image3.jpg')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>TERCERA IMG</Text>
        </View>
      </View>
    </Carousel>
  )
};

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

export default MachineScreen