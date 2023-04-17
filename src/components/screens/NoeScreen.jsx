import React, { useEffect } from "react";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import Carousel from "pinar";
import { useDispatch, useSelector } from "react-redux";

import { getIncidents } from "../../redux/actions/machineActions";
import { selectIncidents } from "../../redux/features/machine/machineSlice";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import CustomIndicator from "../CustomIndicator";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const NoeScreen = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const machineState = useSelector((state) => state.machine);
  const listIncidents = useSelector((state) => selectIncidents(state))

  useEffect(()=> {
    dispatch(getIncidents({}))
  },[])

  const openMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  
  return (
    <View className="flex-1">
      {/* Header */}
      <View className="flex-row py-2 items-center space-x-2 bg-black">
        <TouchableOpacity
          onPress={openMenu}
          className="bg-slate-100 rounded-full p-2 ml-2 mr-2"
        >
          <MaterialCommunityIcons
            name="menu"
            size={25}
          ></MaterialCommunityIcons>
        </TouchableOpacity>
        <View className="flex-1 items-start">
          <Text className="font-bold text-xl text-white">NOE</Text>
        </View>
      </View>
      {/* Body */}
      {
        machineState.isLoading ? (
          <CustomIndicator />
        ) : listIncidents.length == 0 ? (
          <Text className="text-center text-red-500 text-xl my-2">
            {" "}
            No hay incidentes{" "}
          </Text>
        ) : (
          <Carousel showsControls={false}>
            <View className="flex-1 bg-yellow-500 text-center justify-center">
              <Text className="text-center text-red-500 text-5xl font-extrabold">
                NOTIFICACION DE OCURRENCIA DE EVENTO
              </Text>
              <View className="px-4 pt-4 text-center">
                <Text className="bg-red-500 text-black text-2xl font-bold text-center">
                  ¡Hagamos de la seguridad un estilo de vida!
                </Text>
              </View>
            </View>
            {
              listIncidents.map((incident, index) => (
                <View className="flex-1" key={"inc_" + String(index)}>
                  <View className="flex-1">
                    <Image 
                      style={{ width: 'auto', height: '100%', aspectRatio: 1, alignSelf: 'center'}}
                      source={{ uri: incident.url_image }} />
                  </View>
                  <View className="flex-1 mb-10">
                    <ScrollView className="p-5 bg-[#e8e8e8]">
                      <Text className="font-bold text-2xl">{incident.title}</Text>
                      <Text className="font-semibold text-lg">{incident.subtitle}</Text>
                      <Text className="font-medium text-sm">{incident.content}</Text>
                    </ScrollView>
                  </View>
                </View>
              ))
            }
          </Carousel>
        )
      }
    </View >
  )
}

export default NoeScreen