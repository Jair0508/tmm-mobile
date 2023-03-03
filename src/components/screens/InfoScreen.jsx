import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Switch, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getInfo, getSections } from "../../redux/actions/machineActions";
import { selectInfo, selectSubSections } from "../../redux/features/machine/machineSlice";
import CustomIndicator from "../CustomIndicator";

const InfoScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRoute();

  const { type, idModel } = router.params;

  const listInfo = useSelector((state) => selectInfo(state))
  const machineState = useSelector((state) => state.machine)

  useEffect(() => {
    dispatch(getInfo({type, idModel}))
  },[])

  const goToDetail = (info) => {
    navigation.navigate('Detail',{ info })
  }
  
  return (
    <View className="flex-1">
      <Text>Info Model: {idModel}</Text>
      {
        machineState.isLoading ? (
          <CustomIndicator />
        ) : (
          listInfo.map((info,index) => 
          (
          <Text 
          key={"info_" + String(index)}
          className="text-black font-bold text-5xl text-center">
            { info.title }
          </Text>
          ))
        )
      }
    </View>
  );
};

export default InfoScreen;