import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Alert,
} from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Carousel from "pinar";

import { getMachines } from "../../redux/actions/machineActions";
import { selectMachines } from "../../redux/features/machine/machineSlice";

import CustomIndicator from "../CustomIndicator";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const machineState = useSelector((state) => state.machine);
  const machines = useSelector((state) => selectMachines(state));
  
  const [machineSelected, setMachineSelected] = useState({});
  const [visit, setVisit] = useState(false);

  useEffect(() => {
    dispatch(getMachines({}));
  }, []);

  const pressVisit = (machine) => {
    setVisit(!visit);
    setMachineSelected(machine);
  };

  const goToCheckList = () => {
    setVisit(!visit);
    navigation.navigate("CheckList", machineSelected);
  };

  const goToAbout = () => {
    setVisit(!visit);
    navigation.navigate("About", machineSelected);
  };

  const goToEPPS = () => {
    setVisit(!visit);
    navigation.navigate("Epps", machineSelected);
  };

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
          <Text className="font-bold text-xl text-white">MAQUINAS</Text>
        </View>
      </View>
      {/* Body */}
      {machineState.isLoading ? (
        <CustomIndicator />
      ) : machines.length == 0 ? (
        <Text className="text-center text-red-500 text-xl my-2">
          {" "}
          No hay maquinas{" "}
        </Text>
      ) : (
        <Carousel showsControls={false}>
          {machines.map((machine, index) => (
            <View className="flex-1" key={"m_" + String(index)}>
              <ImageBackground
                className="flex-1 justify-center"
                source={{ uri: machine.url_image }}
              />
              <View className="absolute left-0 right-0 top-0 bottom-0 justify-center">
                <TouchableOpacity
                  onPress={() => pressVisit(machine)}
                  className="w-full bg-white pb-2 mb-2"
                >
                  <Text className="text-black outline-white outline-2 font-bold text-3xl text-center mt-2">
                    {machine.title}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </Carousel>
      )}
      <Modal
        animationType="fade"
        transparent={true}
        visible={visit}
        onRequestClose={() => {
          setVisit(!visit);
        }}
      >
        <View
          className="flex-1 rounded-2xl bg-amber-400 mx-5 my-20"
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          {/* Header */}
          <View 
          className="flex-row rounded-t-2xl py-2 
                    items-center space-x-2 bg-gray-900">
            <View className="flex-1 items-center ml-4">
              <Text className="font-bold text-2xl text-white">OPCIONES</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setVisit(!visit);
              }}
              className="bg-slate-100 rounded-full p-2 ml-2 mr-2 items-end"
            >
              <MaterialCommunityIcons
                name="close"
                size={25}
              ></MaterialCommunityIcons>
            </TouchableOpacity>
          </View>
          <View className="flex-1 justify-center p-0 m-0">
            {
              machineSelected.url_epp && (
                <TouchableOpacity
                  onPress={goToEPPS}
                  className="rounded-xl border-solid border-4 
                            border-gray-800 bg-white
                            p-2 m-5"
                >
                  <Text className="text-black font-bold text-4xl text-center">
                    EPPS
                  </Text>
                </TouchableOpacity>
              )
            }
            {
              machineSelected.code_form && (
                <TouchableOpacity
                  onPress={goToCheckList}
                  className="rounded-xl border-solid border-4 
                          border-gray-800 bg-white
                          p-2 m-5"
                >
                  <Text className="text-black font-bold text-4xl text-center">
                    CheckList
                  </Text>
                </TouchableOpacity>
              )
            }
            <TouchableOpacity
              onPress={goToAbout}
              className="rounded-xl border-solid border-4 
                        border-gray-800 bg-white
                        p-2 m-5"
            >
              <Text className="text-black font-bold text-4xl text-center">
                Acerca de..
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
