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

const DetailScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRoute();

  const { info } = router.params;

  console.log(info)

  const { id, title, subtitle, content, url_image, video_link } = info;

  const machineState = useSelector((state) => state.machine);
  const subSections = useSelector((state) => selectSubSections(state));
  

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
      {/* Body */}
      <View className="flex-1">
        <WebView source={{uri: video_link }} style={{ marginTop: 20 }}/>
      </View>
      <ScrollView className="flex-1 p-5">
        <Text className="font-bold text-2xl">{title}</Text>
        <Text className="font-semibold text-lg">{subtitle}</Text>
        <Text className="font-medium text-sm">{content}</Text>
      </ScrollView>
    </View>
  );
};



export default DetailScreen;