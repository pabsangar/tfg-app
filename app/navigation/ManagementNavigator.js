import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MenuScreen from "../screens/MenuScreen";
import colors from "../config/colors";
import FacturaScreen from "../screens/FacturaScreen";
import LinesScreen from "../screens/LinesScreen";
import LinesManagementScreen from "../screens/LinesManagementScreen";
import DatosDetailScreen from "../screens/DatosDetailScreen";
import LlamadasDetailScreen from "../screens/LlamadasDetailScreen";
import LoginScreen from "../screens/LoginScreen";
import FacturaDetailScreen from "../screens/FacturaDetailScreen";
import FacturaStatsScreen from "../screens/FacturaStatsScreen";
import SmsDetailScreen from "../screens/SmsDetailScreen";
import DatosStatsScreen from "../screens/DatosStatsScreen";
import LlamadasStatsScreen from "../screens/LlamadasStatsScreen";

const Stack = createStackNavigator();

const ManagementNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Inicio"
      component={MenuScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Lineas"
      component={LinesScreen}
      options={{
        headerStyle: { backgroundColor: colors.appbackground },
        headerStatusBarHeight: 40,
        headerTintColor: colors.white,
        headerTitle: "Tus Lineas",
      }}
    />
    <Stack.Screen
      name="LinesManagement"
      component={LinesManagementScreen}
      options={{
        headerStyle: { backgroundColor: colors.appbackground },
        headerStatusBarHeight: 40,
        headerTintColor: colors.white,
        headerTitle: "Gestión de Línea",
      }}
    />
    <Stack.Screen
      name="Facturas"
      component={FacturaScreen}
      options={{
        headerStyle: { backgroundColor: colors.appbackground },
        headerStatusBarHeight: 40,
        headerTintColor: colors.white,
        headerTitle: "Tus Facturas",
      }}
    />
    <Stack.Screen
      name="FacturasDetail"
      component={FacturaDetailScreen}
      options={{
        headerStyle: { backgroundColor: colors.appbackground },
        headerStatusBarHeight: 40,
        headerTintColor: colors.white,
        headerTitle: "Detalle Factura",
      }}
    />
    <Stack.Screen
      name="FacturasStats"
      component={FacturaStatsScreen}
      options={{
        headerStyle: { backgroundColor: colors.appbackground },
        headerStatusBarHeight: 40,
        headerTintColor: colors.white,
        headerTitle: "Estadísticas Factura",
      }}
    />
    <Stack.Screen
      name="DatosDetailScreen"
      component={DatosDetailScreen}
      options={{
        headerStyle: { backgroundColor: colors.appbackground },
        headerStatusBarHeight: 40,
        headerTintColor: colors.white,
        headerTitle: "Consumo de Datos",
      }}
    />
    <Stack.Screen
      name="DatosStats"
      component={DatosStatsScreen}
      options={{
        headerStyle: { backgroundColor: colors.appbackground },
        headerStatusBarHeight: 40,
        headerTintColor: colors.white,
        headerTitle: "Estadísticas de tus datos",
      }}
    />
    <Stack.Screen
      name="LlamadasDetailScreen"
      component={LlamadasDetailScreen}
      options={{
        headerStyle: { backgroundColor: colors.appbackground },
        headerStatusBarHeight: 40,
        headerTintColor: colors.white,
        headerTitle: "Tus LLamadas",
      }}
    />
    <Stack.Screen
      name="LlamadasStats"
      component={LlamadasStatsScreen}
      options={{
        headerStyle: { backgroundColor: colors.appbackground },
        headerStatusBarHeight: 40,
        headerTintColor: colors.white,
        headerTitle: "Estadísticas de tus llamadas",
      }}
    />
    <Stack.Screen
      name="SmsDetailScreen"
      component={SmsDetailScreen}
      options={{
        headerStyle: { backgroundColor: colors.appbackground },
        headerStatusBarHeight: 40,
        headerTintColor: colors.white,
        headerTitle: "Tus SMS",
      }}
    />
  </Stack.Navigator>
);

export default ManagementNavigator;
