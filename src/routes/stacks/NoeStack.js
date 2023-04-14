import { createNativeStackNavigator } from "@react-navigation/native-stack"

import NoeScreen from "../../components/screens/NoeScreen";

const NoeStack = createNativeStackNavigator();

const NoeStackNavigator = () => {
  return (
    <NoeStack.Navigator>
      <NoeStack.Screen
        name='NoeInfo'
        component={NoeScreen}
        options={{
          headerShown: false
        }}/>
    </NoeStack.Navigator>
  )
}

export default NoeStackNavigator