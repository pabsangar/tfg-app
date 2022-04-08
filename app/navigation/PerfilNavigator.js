import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import PersonalDataScreen from "../screens/PersonalDataScreen";
import colors from "../config/colors";
import AboutAppScreen from "../screens/AboutAppScreen";
import SupportTechScreen from "../screens/SupportTechScreen";

const Stack = createStackNavigator();

const PerfilNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Perfil"
      component={AccountScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="PersonalDataScreen"
      component={PersonalDataScreen}
      options={{
        headerStyle: { backgroundColor: colors.appbackground },
        headerStatusBarHeight: 40,
        headerTintColor: colors.white,
        headerTitle: "Tus Datos Personales",
      }}
    />
    <Stack.Screen
      name="AboutAppScreen"
      component={AboutAppScreen}
      options={{
        headerStyle: { backgroundColor: colors.appbackground },
        headerStatusBarHeight: 40,
        headerTintColor: colors.white,
        headerTitle: "Sobre la App",
      }}
    />
    <Stack.Screen
      name="SupportTechScreen"
      component={SupportTechScreen}
      options={{
        headerStyle: { backgroundColor: colors.appbackground },
        headerStatusBarHeight: 40,
        headerTintColor: colors.white,
        headerTitle: "Soporte Técnico",
      }}
    />
  </Stack.Navigator>
);

export default PerfilNavigator;
