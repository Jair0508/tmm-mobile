import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { getSections } from "../../redux/actions/machineActions";
import { selectSections } from "../../redux/features/machine/machineSlice";

import CustomIndicator from "../CustomIndicator";

const AboutScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRoute();

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
      let titleInfo = section.name;
      navigation.navigate('Info',{ type, idModel, titleInfo });
    }
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
          <Text className="font-bold text-lg text-white">{title}</Text>
        </View>
      </View>
      {
        machineState.isLoading ? (
          <CustomIndicator />
        ) : sections.length == 0 ? (
          <Text className="text-center text-red-500 text-xl my-2">
            {" "}
            No tiene secciones {" "}
          </Text>
        ) : (
          <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', backgroundColor: '#979ca0' }}>
            {
              sections.map((section,index) => 
              (
              <TouchableOpacity 
                key={"s_" + String(index)}
                onPress={() => goToSection(section)} 
                className="rounded-xl border-solid border-4 
                        border-white bg-slate-900
                        pt-3 pb-1 m-5">
                <Text className="text-amber-400 font-bold text-5xl text-center">
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