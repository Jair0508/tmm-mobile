import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CalendarScreen from "../../components/screens/CalendarScreen";

const CalendarStack = createNativeStackNavigator();

const CalendarStackNavigator = () => {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen
        name='CalendarInfo'
        component={CalendarScreen}
        options={{
          headerShown: false
        }}/>
    </CalendarStack.Navigator>
  )
}

export default CalendarStackNavigator