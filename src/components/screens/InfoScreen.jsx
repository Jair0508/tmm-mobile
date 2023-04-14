import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";

import { getInfo, getSections } from "../../redux/actions/machineActions";
import { selectInfo, selectSubSections } from "../../redux/features/machine/machineSlice";
import CustomIndicator from "../CustomIndicator";

const InfoScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRoute();

  const { type, idModel, titleInfo } = router.params;

  const listInfo = useSelector((state) => selectInfo(state))
  const machineState = useSelector((state) => state.machine)

  useEffect(() => {
    dispatch(getInfo({type, idModel}))
  },[])

  const goToDetail = (info) => {
    navigation.navigate('Detail',{ info })
  }

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
          <Text className="font-bold text-lg">{titleInfo}</Text>
        </View>
      </View>
      {
        machineState.isLoading ? (
          <CustomIndicator />
        ) : listInfo.length == 0 ? (
          <Text className="text-center text-red-500 text-xl my-2">
            {" "}
            No hay información{" "}
          </Text>
        ) : (
          <ScrollView>
            {
            listInfo.map((info, index) => 
            (
              <View key={"info_" + String(index)}>
                {
                  index%2 == 0 ? (
                  <View className="flex-row content-between">
                    <View 
                    className="py-2"
                    style={{ height: 119, width: '50%', borderWidth: 2, 
                    borderColor: 'black', borderLeftWidth: 0, borderTopWidth: 0 }}>
                      <Image 
                      style={{ width: 100, height: 100, 
                        marginHorizontal: '25%'}} 
                      source={{ uri: info.url_image }} />
                    </View>
                    <View 
                    className="py-2"
                    style={{width:'50%', borderWidth: 2, borderColor: 'black', 
                    borderRightWidth: 0, borderLeftWidth: 0, borderTopWidth: 0 }}>
                      <Text className="text-black font-bold text-xl text-center">
                      {info.title}
                      </Text>
                      <TouchableOpacity className="bg-slate-400 border-blue-600 p-2 m-auto" onPress={() => goToDetail(info)}>
                        <Text className="text-gray-50">Ver más info</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  ) : (
                  <View className="flex-row content-between">
                    <View 
                    className="py-2"
                    style={{width:'50%', borderWidth: 2, borderColor: 'black', 
                    borderLeftWidth: 0, borderTopWidth: 0 }}>
                      <Text className="text-black font-bold text-xl text-center">
                      {info.title}
                      </Text>
                      <TouchableOpacity className="bg-slate-400 border-blue-600 p-2 m-auto" onPress={() => goToDetail(info)}>
                        <Text className="text-gray-50">Ver más info</Text>
                      </TouchableOpacity>
                    </View>
                    <View 
                    className="py-2"
                    style={{ height: 119, width: '50%', borderWidth: 2, 
                    borderColor: 'black', borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}>
                      <Image 
                      style={{ width: 100, height: 100, 
                        marginHorizontal: '25%'}} 
                      source={{ uri: info.url_image }} />
                    </View>
                  </View>
                  )
                }
              </View>

            ))
          }
          </ScrollView>
        )
      }
    </View>
  );
};

export default InfoScreen;