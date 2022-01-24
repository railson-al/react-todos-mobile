import React, { useState } from "react";
import { Text, TextInput, Image, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";

import styles from "./styles";

import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

export default function DateTimeInputAndroid({ type, saveTime }) {
  
  const [dateTime, setDateTime] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const newTime = (event, selectedDate) => {
    const currentDate = selectedDate || dateTime;
    if (type === "date") {
      setShow(false);
      setDateTime(format(new Date(currentDate), "dd/MM/yyyy"));
      saveTime(format(new Date(currentDate), "yyyy-MM-dd"));
    } else {
      setShow(false);
      setDateTime(format(new Date(currentDate), "HH:mm"));
      saveTime(format(new Date(currentDate), "HH:mm") + ":00.000");
    }
  };

  async function handdleSelectDateOrHour() {
    if (type === "date") {
      setShow(true);
      setMode("date");
    } else {
      setShow(true);
      setMode("time");
    }
  }

  return (
      <TouchableOpacity onPress={handdleSelectDateOrHour}>
          <TextInput 
          style={styles.input}
          placeholder={type === 'date' ? 'Select the date' : 'Select the hour' }
          editable={false}
          value={dateTime}
          />
          {
              show &&
              <DateTimePicker 
                value={new Date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={newTime}
              />
          }

          <Image 
            style={styles.inputIcon} 
            source={ type === 'date' ? iconCalendar : iconClock }
          />

      </TouchableOpacity>
  );
}
