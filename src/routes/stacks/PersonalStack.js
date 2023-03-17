import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PersonalInfoScreen from "../../components/screens/PersonalInfoScreen";

import PersonalScreen from "../../components/screens/PersonalScreen";

const PersonalStack = createNativeStackNavigator();

const PersonalStackNavigator = () => {
  return (
    <PersonalStack.Navigator>
      <PersonalStack.Screen
        name='PersonalList'
        component={PersonalScreen}
        options={{
          headerShown: false
        }}/>
      <PersonalStack.Screen
        name='PersonalInfo'
        component={PersonalInfoScreen}
        options={{
          headerShown: false
        }}/>
    </PersonalStack.Navigator>
  )
}

export default PersonalStackNavigator