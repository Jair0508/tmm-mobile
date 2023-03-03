import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground, TouchableHighlight, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "pinar";

import { getMachines } from "../../redux/actions/machineActions";
import { selectMachines } from "../../redux/features/machine/machineSlice";
import CustomIndicator from "../CustomIndicator";

const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const machineState = useSelector((state) => state.machine)
  const machines = useSelector((state) => selectMachines(state));
  const [machineSetelected,setMachineSelected] = useState({})
  const [visit, setVisit] = useState(false)

  useEffect(() => {
    dispatch(getMachines({}))
  }, [])

  const pressVisit = (machine) => {
    setVisit(!visit)
    setMachineSelected(machine)
  }

  const goToCheckList = () => {
    console.log("gotocheck")
    let idMachine = machineSetelected.id
    navigation.navigate('CheckList', { idMachine })
  }

  const goToAbout = () => {
    console.log("asdasd")
    let idMachine = machineSetelected.id
    navigation.navigate('About', { idMachine })
  }

  return (
    <View className="flex-1">
      {
        machineState.isLoading ? (
          <CustomIndicator />
        ) : machines.length == 0 ? (
          <Text 
            className="text-center text-red-500 text-xl my-2">
              {" "}No hay maquinas{" "}
          </Text>
        ) : ( 
          <Carousel showsControls={false}>
          {
            machines.map((machine, index) => 
              (
                <View className="flex-1" key={"m_" + String(index)}>
                  <ImageBackground 
                    className="flex-1 justify-center" 
                    source={{uri: machine.url_image}} />
                  <View 
                    className="absolute left-0 right-0 top-0 bottom-0 justify-center">
                    {
                      visit ? (
                        <TouchableOpacity onPress={() => pressVisit(machine)}
                        className="w-full bg-white pb-2 mb-2">
                          <Text 
                          className="text-black outline-white outline-2 font-bold text-3xl text-center mt-2">
                            {machine.title}
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <View>
                          <TouchableOpacity onPress={goToCheckList} 
                          className="rounded-xl border-solid border-4 
                                  border-gray-800 bg-white
                                  p-2 m-5">
                            <Text className="text-black font-bold text-5xl text-center">
                              Checklist
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={goToAbout}
                          className="rounded-xl border-solid border-4 
                                    border-gray-800 bg-white
                                    p-2 m-5">
                            <Text className="text-black font-bold text-5xl text-center">
                              Acerca De..
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => pressVisit(machine)}
                          className="rounded-xl border-solid border-4 
                                    border-gray-800 bg-white
                                    p-2 m-5">
                            <Text className="text-black font-bold text-5xl text-center">
                              NOE
                            </Text>
                          </TouchableOpacity>
                        </View>
                      )
                    }
                  </View>
                </View>
              )
            )
          }
          </Carousel>
        )
      }
    </View>
  )
};

export default HomeScreen