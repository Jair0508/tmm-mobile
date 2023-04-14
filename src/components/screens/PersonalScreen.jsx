import React, { useEffect } from "react";
import { Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { DrawerActions, useNavigation, useRoute } from "@react-navigation/native";
import Carousel from "pinar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import CustomIndicator from "../CustomIndicator";

import { getProfiles } from "../../redux/actions/personalActions";
import { selectProfiles } from "../../redux/features/personal/personalSlice";
import { ScrollView } from "react-native";
import { Dimensions } from "react-native";

const PersonalScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const personalState = useSelector((state) => state.personal)
  const profiles = useSelector((state) => selectProfiles(state))

  useEffect(() => {
    dispatch(getProfiles({}))
  },[])

  const goToBack = () =>{
    navigation.goBack()
  }

  const backPage = () => {
    navigation.goBack()
  }

  const openMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  const pressVisit = (profile) => {
    navigation.navigate('PersonalInfo', profile)
  }

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
          <Text className="font-bold text-xl">Lista de Personal</Text>
        </View>
      </View>
      {/* Body */}
      {personalState.isLoading ? (
        <CustomIndicator />
      ) : profiles.length == 0 ? (
        <Text className="text-center text-red-500 text-xl my-2">
          {" "}
          No hay personal{" "}
        </Text>
      ) : (
        <Carousel
          showsControls={false}
        >
          {profiles.map((profile, index) => (
            <View className="flex-1" key={"profile_" + String(index)}>
              {
                profile.url_image && (
                  <ImageBackground
                    className="flex-1 justify-center"
                    source={{ uri: profile.url_image }}
                  />
                )
              }
              <View className="absolute left-0 right-0 top-0 bottom-0 justify-center">
                <TouchableOpacity
                  onPress={() => pressVisit(profile)}
                  className="w-full bg-opacity-30 bg-white pb-2 mb-2"
                >
                  <Text 
                  className="text-black outline-white outline-2 font-bold 
                              text-3xl text-center mt-2">
                    { profile.data_user.full_name }
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </Carousel>
      )}
    </View>
  );
};

export default PersonalScreen
