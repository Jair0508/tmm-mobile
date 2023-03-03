import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Switch, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getSections } from "../../redux/actions/machineActions";
import { selectSubSections } from "../../redux/features/machine/machineSlice";
import CustomIndicator from "../CustomIndicator";

const DetailScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRoute();

  const { idSection } = router.params;

  const machineState = useSelector((state) => state.machine)
  const subSections = useSelector((state) => selectSubSections(state))
  
  return (
    <View className="flex-1">
      <Text>Detail</Text>
    </View>
  );
};

export default DetailScreen;