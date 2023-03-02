import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, } from "@react-navigation/native";
import React from "react";
import { View, StatusBar } from "react-native";

import MachineStackNavigator from "./stacks/MachineStack";
import PersonalStackNavigator from "./stacks/PersonalStack";

const FullStack = createDrawerNavigator();

const FullStackNavigator = () => {
  return (
    <View style={{ flex: 1, }}>
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
          <FullStack.Screen name="Maquinas" component={MachineStackNavigator}/>
          <FullStack.Screen name="Personal" component={PersonalStackNavigator} />
        </FullStack.Navigator>
      </NavigationContainer>
    </View>
  )
}

//Tema del SideBar

const MyTheme = {
  colors: {
    primary: 'rgb(125, 157, 156)',
    card: 'rgba(50,59,68,255)',
  },
};

export default  FullStackNavigator