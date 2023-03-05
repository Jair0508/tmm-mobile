import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer, } from "@react-navigation/native";
import React from "react";
import { Text, Touchable } from "react-native";
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
    dispatch(logoutUser());
  }

  const CustomDrawerContent = props => {
    return (
      <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
          {/*
          Profile ROW
          <View className="flex-row justify-between items-center p-3 mb-2">
            <View>
              <Text>John Doe</Text>
              <Text>example@email.com</Text>
            </View>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
              }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
          </View>*/}
          <DrawerItemList {...props} />
          
        </DrawerContentScrollView>
        <TouchableOpacity 
            style={{
              position: 'absolute',
              right: 0,
              left: 0,
              bottom: 50,
              backgroundColor: '#f6f6f6',
              padding: 20,
            }}
            onPress={() => logOut()}>
            <Text style={{ color: 'red' }}>Log Out</Text>
          </TouchableOpacity>
      </View>
    )
  }

  return (
    <FullStack.Navigator
      drawerContent={props => <CustomDrawerContent {...props}/>}
      screenOptions={{
        headerShown: false
        //drawerActiveTintColor: 'white',
        //drawerInactiveTintColor: 'black',
        //drawerLabelStyle: { color: 'black' },
        //headerTintColor: 'black',
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