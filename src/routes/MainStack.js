import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux"

import FilterScreen from "../components/screens/FilterScreen";
import VerifyReportScreen from "../components/screens/VerifyReportScreen";
import IndicadorScreen from "../components/screens/IndicatorScreen";

import AuthStackNavigator from "./AuthStackNavigator";
import FullStackNavigator from "./FullStackNavigator";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const renderScreens = () => {
    return authState.user ? (
      <Stack.Screen
        name="FullStackNavigator"
        component={FullStackNavigator}
      />
    ) : (
      authState.isLoading ? (
        <Stack.Screen
          name="Indicator"
          component={IndicadorScreen}
        />
      ) : (
        <Stack.Screen
          name="AuthStackNavigator"
          component={AuthStackNavigator}
        />
      )
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        { renderScreens() }
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default MainStack