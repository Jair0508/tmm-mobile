import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";

const CalendarScreen = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

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
          <Text className="font-bold text-xl text-white">CALENDARIO</Text>
        </View>
      </View>
      <View className="flex-1 justify-center items-center">
        <View className="rounded-full w-72 h-72 bg-slate-400 justify-center">
          <Text className="text-center text-amber-400 text-9xl font-extrabold">29</Text>
          <Text className="text-center text-amber-400 text-5xl font-bold">MARZO</Text>
          <Text className="text-center text-amber-400 text-xl font-bold">11:30 AM</Text>
        </View>
        <View className="mt-5">
          <Text className="text-center text-amber-400 text-5xl font-extrabold">CHARLA DE SEGURIDAD</Text>
          <Text className="text-center text-amber-400 text-xl font-black">SALA 1° PISO</Text>
          <Text className="text-center text-red-600 text-xl font-black">OBLIGATORIO</Text>
        </View>
      </View>
    </View >
  )
}

export default CalendarScreen