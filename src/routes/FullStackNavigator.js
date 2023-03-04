import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer, } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import MachineStackNavigator from "./stacks/MachineStack";
import PersonalStackNavigator from "./stacks/PersonalStack";

import { logoutUser } from "../redux/features/auth/authSlice"

const FullStack = createDrawerNavigator();

const FullStackNavigator = () => {

  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser())
    console.log("logout user",authState)
  }

  const CustomDrawerContent = () => {
    return (
      <DrawerContentScrollView>
        <DrawerItem label={() => <Text style={{ color: 'white' }}>Logout</Text>}
          style={{backgroundColor: 'red'}} 
          onPress={() => logOut()}
        />
      </DrawerContentScrollView>
    )
  }

  return (
    <FullStack.Navigator
      drawerContent={props => <CustomDrawerContent />}
      screenOptions={{
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: { color: 'black' },
        headerTintColor: 'black',
      }}
    >
      <FullStack.Screen 
        name="Maquinas" 
        component={MachineStackNavigator}/>
      <FullStack.Screen 
        name="Personal" 
        component={PersonalStackNavigator} />
    </FullStack.Navigator>
  )
}

//Tema del SideBar

const MyTheme = {
  colors: {
    primary: 'rgb(125, 157, 156)',
    card: 'rgba(50,59,68,255)',
  },
};

    {/*alert('Logged out')<View style={{ flex: 1, }}>
      <StatusBar translucent />
      <NavigationContainer theme={MyTheme}>
        <FullStack.Navigator
          screenOptions={{
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: 'white',
            drawerLabelStyle: { color: 'white' },
            headerTintColor: 'white',
          }}
        >
          <FullStack.Screen 
            name="Maquinas" 
            component={MachineStackNavigator}/>
          <FullStack.Screen 
            name="Personal" 
            component={PersonalStackNavigator} />
        </FullStack.Navigator>
      </NavigationContainer>
    </View>*/}
export default  FullStackNavigator