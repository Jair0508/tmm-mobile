import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Switch, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getSections, getSubSections } from "../../redux/actions/machineActions";
import { selectSubSections } from "../../redux/features/machine/machineSlice";
import CustomIndicator from "../CustomIndicator";

const SectionScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRoute();

  const { idSection } = router.params;

  const machineState = useSelector((state) => state.machine)
  const subSections = useSelector((state) => selectSubSections(state))

  useEffect(() => {
    const params = {
      idSection: idSection
    }
    dispatch(getSubSections(params))
  }, [])


  const goToInfo = (subSection) =>{
    let type = 'seubsection'
    let idModel = subSection.id
    navigation.navigate('Info', { type, idModel })
  }

  
  return (
    <View className="flex-1">
      {
        machineState.isLoading ? (
          <CustomIndicator />
        ) : (
          subSections.map((subSection,index) => 
          (
          <TouchableOpacity 
            key={"s_" + String(index)}
            onPress={ () => goToInfo(subSection) } 
            className="rounded-xl border-solid border-4 
                    border-gray-800 bg-white
                    p-2 m-5">
            <Text className="text-black font-bold text-5xl text-center">
              {subSection.name}
            </Text>
          </TouchableOpacity>
          ))
        )
      }
    </View>
  );
};

export default SectionScreen;