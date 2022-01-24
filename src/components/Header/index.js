import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

//Icons
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";
import qrcode_img from "../../assets/qrcode.png";
import arrow_back from "../../assets/back.png";

export default function Header({ showNotification, showBack, pressNotification, overCount, navigation }) {
  
  function handdleBack() {
    navigation.navigate('Home')
  }

  return (
    <>
    <View style={styles.navBar}></View>
    <View style={styles.header}>

      {
        showBack 
        ?
        <TouchableOpacity style={styles.leftIcon} onPress={handdleBack}>
          <Image source={arrow_back} style={styles.leftIconImage} />
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.leftIcon}>
          <Image source={qrcode_img} style={styles.leftIconImage} />
        </TouchableOpacity>
      }

      <Image source={logo} style={styles.logo} />

      {
        showNotification && (
        <TouchableOpacity style={styles.notification} onPress={pressNotification}>
        
          <Image source={bell} style={styles.notificationImage} />

          {
          overCount > 0 
          ?
          <View style={styles.circle}>
            <Text style={styles.notificationText}>{overCount}</Text>
          </View>
          :
          null
          }
        </TouchableOpacity>
      )}
    </View>
    </>
  );
}
