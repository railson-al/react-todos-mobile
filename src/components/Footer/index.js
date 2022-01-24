import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

import add_img from "../../assets/add.png";
import save_img from "../../assets/save.png"

export default function Footer({ typeIcon, onPress }) {
  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={typeIcon === 'add' ? add_img : save_img} style={styles.image}/>
     </TouchableOpacity>
    </View>
  );
}
