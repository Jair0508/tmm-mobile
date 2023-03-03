import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, TouchableHighlight } from "react-native";


const AboutScreen = () => {
  const navigation = useNavigation()

  const goToBack = () => {
    navigation.goBack()
  }

  return (
    <View className="flex-1 ">
      <View>
        <TouchableHighlight>
          <Text>TECNICO</Text>
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