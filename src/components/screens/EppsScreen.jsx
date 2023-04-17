import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Switch, Button, TouchableOpacity, Image, StyleSheet,Web } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

import { getSections } from "../../redux/actions/machineActions";
import { selectSubSections } from "../../redux/features/machine/machineSlice";
import CustomIndicator from "../CustomIndicator";
import Video from "react-native-video";
import WebView from "react-native-webview";
import { ScrollView } from "react-native";

const EppsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRoute();

  const { title, url_epp } = router.params;

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
      {/* Body */}
      <View className="flex-1">
        <Image 
          style={{ width: '100%', height: '100%' }} 
          source={{uri: url_epp}}
        />
      </View>
    </View>
  );
};



export default EppsScreen;