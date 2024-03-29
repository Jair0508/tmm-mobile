import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AboutScreen from "../../components/screens/AboutScreen";
import CheckListScreen from "../../components/screens/CheckListScreen";
import HomeScreen from "../../components/screens/HomeScreen";
import SectionScreen from "../../components/screens/SectionScreen";
import InfoScreen from "../../components/screens/InfoScreen";
import DetailScreen from "../../components/screens/DetailScreen";
import EppsScreen from "../../components/screens/EppsScreen";

const MachineStack = createNativeStackNavigator();

const MachineStackNavigator = () => {
  return (
    <MachineStack.Navigator
      screenOptions={{
        //headerTintColor: '#444',
        //headerStyle: { backgroundColor: '#eee', height: 60 }
        header: () => null,
        headerShown: false,
      }}
    >
      <MachineStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false
        }}/>
      <MachineStack.Screen
        name='CheckList'
        component={CheckListScreen}
        options={{
          headerShown: false
        }}/>
      <MachineStack.Screen
        name='About'
        component={AboutScreen}
        options={{
          title: 'Acerca de'
        }}/>
      <MachineStack.Screen
        name='Section'
        component={SectionScreen}
        options={{
          headerShown: false
        }}/>
      <MachineStack.Screen
        name='Info'
        component={InfoScreen}
        options={{
          headerShown: false
        }}/>
      <MachineStack.Screen
        name='Detail'
        component={DetailScreen}
        options={{
          headerShown: false
        }}/>
      <MachineStack.Screen
        name='Epps'
        component={EppsScreen}
        options={{
          headerShown: false
        }}/>
    </MachineStack.Navigator>
  )
}

export default MachineStackNavigator