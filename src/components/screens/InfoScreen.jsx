import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Switch, Button, TouchableOpacity, Image } from "react-native";
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

  console.log(listInfo)

  const goToDetail = (info) => {
    navigation.navigate('Detail',{ info })
  }
  
  return (
    <View className="flex-1">
      {/* <Text>Info Model: {idModel}</Text> */}
      {
        machineState.isLoading ? (
          <CustomIndicator />
        ) : (
          listInfo.map((info, index) =>
          (
            <View key={"info_" + String(index)}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ height: 119, width: '50%', borderWidth: 2, borderColor: 'black', borderLeftWidth: 0, borderTopWidth: 0 }}>
                  <Image style={{ width: 100, height: 100, margin: 5, marginHorizontal: '25%'}} source={{ uri: info.url_image }} />
                </View>
                <View style={{width:'50%', borderWidth: 2, borderColor: 'black', borderRightWidth: 0, borderLeftWidth: 0, borderTopWidth: 0 }}>
                  <Text className="text-black font-bold text-xl" style={{ paddingStart: 20}  }>
                    {info.title}
                  </Text>
                </View>
              </View>
            </View>

          )
          )
        )
      }
    </View>
  );
};

export default InfoScreen;