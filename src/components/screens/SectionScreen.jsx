import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Switch, Button, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { getSections, getSubSections } from "../../redux/actions/machineActions";
import { selectSubSections } from "../../redux/features/machine/machineSlice";
import CustomIndicator from "../CustomIndicator";

const SectionScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRoute();

  const { id, name } = router.params;

  const machineState = useSelector((state) => state.machine)
  const subSections = useSelector((state) => selectSubSections(state))

  useEffect(() => {
    const params = {
      idSection: id
    }
    dispatch(getSubSections(params))
  }, [])

  const goToInfo = (subSection) =>{
    let type = 'subsection';
    let idModel = subSection.id;
    let titleInfo = subSection.name;
    navigation.navigate('Info', { type, idModel, titleInfo })
  }

  const backPage = () => {
    navigation.goBack()
  }

  
  return (
    <View className="flex-1">
      {/* Header */}
      <View className="flex-row py-2 items-center space-x-2 bg-black">
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
          <Text className="font-bold text-lg text-white">{name}</Text>
        </View>
      </View>
      {
        machineState.isLoading ? (
          <CustomIndicator />
        ) : subSections.length == 0 ? (
          <Text className=" text-center text-red-500 text-xl my-2">
            {" "}
            No hay secciones{" "}
          </Text>
        ) : (
          <ScrollView 
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', backgroundColor: '#979ca0' }}>
            {
              subSections.map((subSection,index) => 
              (
              <TouchableOpacity 
                key={"s_" + String(index)}
                onPress={ () => goToInfo(subSection) } 
                className="rounded-xl border-solid border-4 
                        border-white bg-slate-900
                        p-2 m-5">
                <Text className="text-amber-400 font-bold text-5xl text-center">
                  {subSection.name}
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

export default SectionScreen;