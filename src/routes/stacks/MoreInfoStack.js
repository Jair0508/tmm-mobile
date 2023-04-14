import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MoreInfoScreen from "../../components/screens/MoreInfoScreen";

const MoreInfoStack = createNativeStackNavigator();

const MoreInfoStackNavigator = () => {
  return (
    <MoreInfoStack.Navigator>
      <MoreInfoStack.Screen
        name='MoreInfo'
        component={MoreInfoScreen}
        options={{
          headerShown: false
        }}/>
    </MoreInfoStack.Navigator>
  )
}

export default MoreInfoStackNavigator