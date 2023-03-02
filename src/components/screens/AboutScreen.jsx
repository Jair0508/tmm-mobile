import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, TouchableHighlight } from "react-native";
import tailwind from 'tailwind-rn';


const AboutScreen = () => {
  const navigation = useNavigation()

  const goToBack = () => {
    navigation.goBack()
  }

  return (
    <View className="flex-1 ">
      <View>
        <TouchableHighlight>
          <Text style={tailwind('text-lg font-bold text-red-500')} >TECNICO</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text>CABINA</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text>TRABAJOS</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text>UTILLAJE</Text>
        </TouchableHighlight>
        <Button title="Salir" onPress={goToBack} />
      </View>
    </View>
  );
};

export default AboutScreen;