import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
import ImageInput from "./ImageInput";

function UserProfile({ title, subTitle }) {
  const [imageUri, setImageUri] = useState();

  return (
    <View style={styles.container}>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    marginBottom: 50,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    marginLeft: 20,
    marginTop: 10,
  },
  subTitle: {
    fontSize: 15,
    color: colors.darkWhite,
    marginTop: 5,
    marginLeft: 20,
  },
});

export default UserProfile;
