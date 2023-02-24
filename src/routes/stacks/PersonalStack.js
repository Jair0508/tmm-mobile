import { createNativeStackNavigator } from "@react-navigation/native-stack"

import PersonalScreen from "../../components/screens/PersonalScreen";

const PersonalStack = createNativeStackNavigator();

const PersonalStackNavigator = () => {
  return (
    <PersonalStack.Navigator
      screenOptions={{
        //headerTintColor: '#444',
        //headerStyle: { backgroundColor: '#eee', height: 60 }
      }}
    >
      <PersonalStack.Screen
        name='Personal'
        component={PersonalScreen}
        options={{
          headerShown: false
        }}/>
    </PersonalStack.Navigator>
  )
}

export default PersonalStackNavigator