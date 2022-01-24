import React from "react";
import { format } from 'date-fns';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import styles from "./styles";

import typeIcons from "../../utils/typeIcons";

export default function TaskCard({ done, title, type, date, onPress }) {
  return (
    <TouchableOpacity style={[styles.taskCard, done && styles.done]} onPress={onPress}>
      <View style={styles.leftArea}>
        <Image source={typeIcons[type]} style={styles.icon} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>

      <View style={styles.rightArea}>
        <Text style={styles.cardDate}>{format(new Date(date), 'dd/MM/yyy')}</Text>
        <Text style={styles.cardTime}>{format(new Date(date), 'HH:mm')}</Text>
      </View>
    </TouchableOpacity>
  );
}
