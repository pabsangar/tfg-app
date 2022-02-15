import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import colors from "../config/colors";

function ImagesPromo(props) {
  var images = [
    "https://www.lemonvil.com/imagenes/150+5GB.jpg",
    "https://www.lemonvil.com/imagenes/ILIMITADAS-15.jpg",
    "https://www.lemonvil.com/imagenes/ILIMITADAS-20.jpg",
    "https://www.lemonvil.com/imagenes/ILIMITADAS-30.jpg",
    "https://www.lemonvil.com/imagenes/ILIMITADAS-30-PROMO-DOBLA-GIGAS.jpg",
    "https://www.lemonvil.com/imagenes/ILIMITADAS-70.jpg",
    "https://www.lemonvil.com/imagenes/ILIMITADAS-120.jpg",
  ];
  return (
    <Swiper
      showsButtons={false}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
    >
      <Image
        style={styles.imagePromo}
        source={{
          uri: images[0],
        }}
      />
      <Image
        style={styles.imagePromo}
        source={{
          uri: images[1],
        }}
      />
      <Image
        style={styles.imagePromo}
        source={{
          uri: images[2],
        }}
      />
      <Image
        style={styles.imagePromo}
        source={{
          uri: images[3],
        }}
      />
      <Image
        style={styles.imagePromo}
        source={{
          uri: images[4],
        }}
      />
      <Image
        style={styles.imagePromo}
        source={{
          uri: images[5],
        }}
      />
      <Image
        style={styles.imagePromo}
        source={{
          uri: images[6],
        }}
      />
    </Swiper>
  );
}

const styles = StyleSheet.create({
  imagePromo: {
    width: 340,
    height: 287,
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 10,
  },
  activeDot: {
    backgroundColor: colors.secondary,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  dot: {
    backgroundColor: colors.white,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
});

export default ImagesPromo;
