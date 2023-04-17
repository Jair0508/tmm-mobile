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

  const { id, title, subtitle, content, url_image, video_link } = info;

  const machineState = useSelector((state) => state.machine);
  const subSections = useSelector((state) => selectSubSections(state));
  

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
      {
        video_link ? (
          <View className="flex-1">
            <WebView source={{uri: video_link }} style={{ marginTop: 20 }}/>
          </View>
        ) : (
          <View className="flex-1">
            <Image 
              style={{ width: 'auto', height: '100%', aspectRatio: 1, alignSelf: 'center'}} 
                source={{ uri: url_image }} />
          </View>
        )
      }
      
      <ScrollView className="flex-1 p-5 bg-[#e8e8e8]">
        {/*<Text className="text-black font-bold text-3xl text-center">{title}</Text>*/}
        <Text className="font-semibold text-lg underline">{subtitle}</Text>
        <Text className="font-medium text-sm">{content}</Text>
      </ScrollView>
    </View>
  );
};



export default DetailScreen;