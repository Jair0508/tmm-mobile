import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Switch, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getSections } from "../../redux/actions/machineActions";
import { selectMachines, selectSections } from "../../redux/features/machine/machineSlice";
import CustomIndicator from "../CustomIndicator";

const AboutScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRoute();

  const { control, handleSubmit, formState: { errors } } = useForm();
  const { idMachine } = router.params;

  const machineState = useSelector((state) => state.machine)
  const sections = useSelector((state) => selectSections(state))

  useEffect(() => {
    const params = {
      idMachine: idMachine
    }
    dispatch(getSections(params))
  }, [])


  const goToSection = (section) =>{
    if (section.have_subsection) {
      let idSection = section.id
      navigation.navigate('Section',{ idSection })
    } else {
      let type = 'section'
      let idModel = section.id
      navigation.navigate('Info',{ type, idModel })
    }
  }
  
  return (
    <View className="flex-1">
      {
        machineState.isLoading ? (
          <CustomIndicator />
        ) : (
          sections.map((section,index) => 
          (
          <TouchableOpacity 
            key={"s_" + String(index)}
            onPress={() => goToSection(section)} 
            className="rounded-xl border-solid border-4 
                    border-gray-800 bg-white
                    p-2 m-5">
            <Text className="text-black font-bold text-5xl text-center">
              {section.name}
            </Text>
          </TouchableOpacity>
          ))
        )
      }
    </View>
  );
};

export default AboutScreen;