import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";

const MoreInfoScreen = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const openMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  
  return (
    <View className="flex-1">
      {/* Header */}
      <View className="flex-row py-2 items-center space-x-2 bg-slate-200">
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
          <Text className="font-bold text-xl">Más..</Text>
        </View>
      </View>
      <Text>Más Información</Text>
    </View >
  )
}

export default MoreInfoScreen