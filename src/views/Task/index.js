import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Switch,
  Platform
} from "react-native";
import * as Application from 'expo-application';

import typeIcons from "../../utils/typeIcons";

import api from "../../services/api"

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DateTimeInputAndroid from "../../components/DateTimeInput";
import styles from "./styles";

export default function Task({ navigation, taskId }) {

  const [id, setId ] = useState();
  const [done, setDone] = useState(false);
  const [type, setType] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [macaddress, setMacaddress] = useState("");

  function handdleSaveTask() {
        
        if(!title || title === "")
        return Alert.alert('Please, insert a title')
        if(!description || description === "")
        return Alert.alert('Give more details')
        if(!date || date === "")
        return Alert.alert('Please, select a date')
        if(!time || time === "")
        return Alert.alert('Please, select a hour')
        if(!macaddress || macaddress === "")
        return Alert.alert("Can't find the mac")
        if(!type || type === 0)
        return Alert.alert("Select a type")


        api.post('/task', {
            macaddress,
            title,
            type,
            description,
            when: date+'T'+time

        }).then(() => (
            navigation.navigate('Home')
        )).catch(err => (
            Alert.alert(err)
        ));
      
  }

  async function getMac() {
      if(Platform.OS === 'ios') {
        await Application.getIosIdForVendorAsync().then(
            id => setMacaddress(id)
        );

      } else {
        setMacaddress(Application.androidId)
      }

  }

  useEffect(() => {
    getMac();
    
    if (navigation.state.params) {
        setId(navigation.state.params.taskId);
    }
  
  }, [macaddress]);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Header showBack={true} navigation={navigation} />

      <ScrollView style={{ width: "100%" }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {typeIcons.map(
            (icon, index) =>
              icon !== null && (
                <TouchableOpacity key={index} onPress={() => setType(index)}>
                  <Image
                    source={icon}
                    style={[
                      styles.icons,
                      type && type !== index && styles.inativeIcon,
                    ]}
                  />
                </TouchableOpacity>
              )
          )}
        </ScrollView>

        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          maxLength={30}
          placeholder="Lembrar de..."
          onChangeText={(text) => setTitle(text)}
          value={title}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.inputArea]}
          maxLength={240}
          multiline={true}
          placeholder="More informations here..."
          onChangeText={(text) => setDescription(text)}
          value={description}
        />

        <DateTimeInputAndroid type={"date"} saveTime={setDate}/>

        <DateTimeInputAndroid type={"hour"} saveTime={setTime}/>

        {
            id &&
            <View style={styles.inLine}>
            <View style={styles.inputInline}>
                <Switch
                thumbColor={done ? "#4c168a" : "#c2c2c2"}
                trackColor={"#8957ba"}
                onValueChange={() => setDone(!done)}
                value={done}
                />
                <Text style={styles.switchLabel}>Done</Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.removeLabel}>Delete</Text>
            </TouchableOpacity>
            </View>

        }       

      </ScrollView>

      <Footer icon={"save"} onPress={handdleSaveTask}/>
    </KeyboardAvoidingView>
  );
}
