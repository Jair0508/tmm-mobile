import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Switch, Button } from "react-native";

const AboutScreen = () => {
  const navigation = useNavigation()
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const goToBack = () =>{
    navigation.goBack()
  }
  
  return (
    <View>
      <TouchableOpacity onPress={goToCheckList} 
                className="rounded-xl border-solid border-4 
                        border-gray-800 bg-white
                        p-2 m-5">
                  <Text className="text-black font-bold text-5xl text-center">
                    Tecnico
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToAbout}
                className="rounded-xl border-solid border-4 
                          border-gray-800 bg-white
                          p-2 m-5">
                  <Text className="text-black font-bold text-5xl text-center">
                    Cabina
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressVisit}
                className="rounded-xl border-solid border-4 
                          border-gray-800 bg-white
                          p-2 m-5">
                  <Text className="text-black font-bold text-5xl text-center">
                    NOE
                  </Text>
                </TouchableOpacity>
      <Button title="Salir" onPress={goToBack} />
    </View>
  );
};

export default AboutScreen;