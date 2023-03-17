import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native";

const PersonalInfoScreen = () => {
  const navigation = useNavigation();
  const router = useRoute();

  const personalInfo  = router.params;

  const backPage = () => {
    navigation.goBack()
  }


  return (
    <View className="flex-1">
      {/* Header */}
      <View className="flex-row py-2 items-center space-x-2 bg-slate-200">
        <TouchableOpacity
          onPress={backPage}
          className="bg-slate-100 rounded-full p-2 ml-2 mr-2"
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={25}
          ></MaterialCommunityIcons>
        </TouchableOpacity>
        <View className="flex-1 items-start">
          <Text className="font-bold text-lg">{personalInfo.data_user.full_name}</Text>
        </View>
      </View>
      {/* Body */}
      <View className="flex-1">
        <View className="m-2 flex-1">
          {
            personalInfo.url_image && (
              <ImageBackground
                className="flex-1"
                source={{ uri: personalInfo.url_image }}
              />
            )
          }
        </View>
        <ScrollView className="m-2 flex-1" centerContent={true}>
          <View className="flex-row">
            <Text className="text-lg uppercase font-bold">
              Edad: { }
            </Text>
            <Text className="text-lg uppercase">
              {personalInfo.age} ({personalInfo.date_of_birth})
            </Text>
          </View>
          <View className="flex-row">
            <Text className="text-lg uppercase font-bold">
            Codigo: { }
            </Text>
            <Text className="text-lg uppercase">
            {personalInfo.code}
            </Text>
          </View>
          <View className="flex-row">
            <Text className="text-lg uppercase font-bold">
            Nivel: { }
            </Text>
            <Text className="text-lg uppercase">
            {personalInfo.level}
            </Text>
          </View>
          <View className="flex-row">
            <Text className="text-lg uppercase font-bold">
            Especialidad: { }
            </Text>
            <Text className="text-lg uppercase">
            {personalInfo.specialist}
            </Text>
          </View>
          <View className="flex-row">
            <Text className="text-lg uppercase font-bold">
            Fecha de Ingreso: { }
            </Text>
            <Text className="text-lg uppercase">
            {personalInfo.date_of_admission}
            </Text>
          </View>
          {
            personalInfo.machines.length > 0 && (
              <View>
                <Text className="text-lg uppercase font-bold">
                  Dominio:
                </Text>
                <Text className="text-lg uppercase ml-5">
                  {
                    personalInfo.machines.map((machine,index)=>(
                      <Text key={'ma_'+String(index)}>
                        - {machine.title} 
                          { index + 1 < personalInfo.machines.length && (
                            '\n'
                          )
                        }
                      </Text>
                    ))
                  }
                </Text>
              </View>
            )
          }
          {
            personalInfo.achievements.length > 0 && (
              <View>
                <Text className="text-lg uppercase font-bold">
                Logros:
                </Text>
                <Text className="text-lg uppercase ml-5">
                  {
                    personalInfo.achievements.map((machine,index)=>(
                      <Text key={'ach_'+String(index)}>
                        - {achievement.name} 
                          { index + 1 < personalInfo.achievements.length && (
                            '\n'
                          )
                        }
                      </Text>
                    ))
                  }
                </Text>
              </View>
            )
          }
          <View>
            <Text className="text-lg uppercase font-bold">
            Objetivos: { }
            </Text>
            <Text className="text-lg uppercase">
            {personalInfo.objectives}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PersonalInfoScreen;
