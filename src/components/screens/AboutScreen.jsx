import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Switch, Button, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { getSections } from "../../redux/actions/machineActions";
import { selectMachines, selectSections } from "../../redux/features/machine/machineSlice";

import CustomIndicator from "../CustomIndicator";

const AboutScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRoute();

  const { control, handleSubmit, formState: { errors } } = useForm();
  const { id, title } = router.params;

  const machineState = useSelector((state) => state.machine)
  const sections = useSelector((state) => selectSections(state))

  useEffect(() => {
    const params = {
      idMachine: id
    }
    dispatch(getSections(params))
  }, [])


  const goToSection = (section) =>{
    if (section.have_subsection) {
      navigation.navigate('Section',section);
    } else {
      let type = 'section';
      let idModel = section.id;
      navigation.navigate('Info',{ type, idModel });
    }
  }

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
          <Text className="font-bold text-lg">{title}</Text>
        </View>
      </View>
      {
        machineState.isLoading ? (
          <CustomIndicator />
        ) : (
          <ScrollView className="my-auto">
            {
              sections.map((section,index) => 
              (
              <TouchableOpacity 
                key={"s_" + String(index)}
                onPress={() => goToSection(section)} 
                className="rounded-xl border-solid border-4 
                        border-gray-800 bg-white
                        pt-3 pb-1 m-5">
                <Text className="text-black font-bold text-5xl text-center">
                  {section.name}
                </Text>
              </TouchableOpacity>
              ))
            }
          </ScrollView>
        )
      }
    </View>
  );
};

export default AboutScreen;