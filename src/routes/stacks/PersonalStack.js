import { createNativeStackNavigator } from "@react-navigation/native-stack"

import PersonalScreen from "../../components/screens/PersonalScreen";

const PersonalStack = createNativeStackNavigator();

const PersonalStackNavigator = () => {
  return (
    <PersonalStack.Navigator>
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