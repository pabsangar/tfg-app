import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";

import colors from "../config/colors";
import ManagementNavigator from "./ManagementNavigator";
import PerfilNavigator from "./PerfilNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.getPermissionsAsync();
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      //console.log(token);
    } catch (error) {
      console.log("Error obteniendo el push token", error);
    }
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.appbackground,
        activeTintColor: colors.white,
        inactiveBackgroundColor: colors.appbackground,
        inactiveTintColor: colors.gray,
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={ManagementNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
