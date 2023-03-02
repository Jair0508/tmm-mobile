import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, } from "@react-navigation/native";
import React from "react";
import { View, StatusBar } from "react-native";

import Calendario from "./Calendario";
import Maquinas from "./Maquinas";
import Personal from "./Personal";
import Solicitudes from "./Solicitudes";

const Menu = createDrawerNavigator();

const Main = () => {
  return (
    <View style={{ flex: 1, }}>
      <StatusBar translucent />
      <NavigationContainer theme={MyTheme}>
        <Menu.Navigator
          screenOptions={{
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: 'white',
            drawerLabelStyle: { color: 'white' },
            headerTintColor: 'white',
          }}
        >
          <Menu.Screen name="Maquinas" component={Maquinas} />
          <Menu.Screen name="Personal" component={Personal} />
          <Menu.Screen name="Calendario" component={Calendario} />
          <Menu.Screen name="Solicitudes" component={Solicitudes} />
        </Menu.Navigator>
      </NavigationContainer>
    </View>
  )
}

//Tema del SideBar

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(125, 157, 156)',
    card: 'rgba(50,59,68,255)',
  },
};

export default  Main
