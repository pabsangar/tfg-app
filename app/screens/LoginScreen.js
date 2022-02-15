import React, { useContext, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import colors from "../config/colors";
import authApi from "../api/laWifi/auth";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("El usuario es obligatorio").label("Usuario"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .label("Contraseña"),
});

function LoginScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordText, setPasswordText] = useState("Mostrar contraseña");

  const showPassword = () => {
    if (hidePassword) {
      setHidePassword(false);
      setPasswordText("Ocultar contraseña");
    } else {
      setHidePassword(true);
      setPasswordText("Mostrar contraseña");
    }
  };

  const handleSubmit = async ({ username, password }) => {
    const result = await authApi.login(username, password);
    if (result.data["error"]) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data["token"]);
    authContext.setUser(user);
    authStorage.storeToken(result.data["token"]);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/lemonvilWhite.png")}
      />
      <AppForm
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Usuario o contraseña incorrectos"
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="username"
          icon="user-alt"
          placeholder="Usuario"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Contraseña"
          secureTextEntry={hidePassword}
          textContentType="password"
        />

        <TouchableOpacity
          style={styles.textpasswordContainer}
          onPress={() => showPassword()}
        >
          <Text style={styles.textPassword}>{passwordText}</Text>
        </TouchableOpacity>

        <SubmitButton title="Iniciar Sesión" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.appbackground,
  },
  logo: {
    alignSelf: "center",
    marginTop: 80,
    marginBottom: 20,
  },
  textPassword: {
    paddingTop: 3,
    marginRight: 5,
    color: colors.white,
    fontSize: 15,
  },
  textpasswordContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    marginRight: 5,
    marginBottom: 10,
  },
});

export default LoginScreen;
