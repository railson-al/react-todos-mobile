import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Application from 'expo-application';

import styles from "./styles";

import api from "../../services/api";

//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";

export default function Home({ navigation }) {
  const [filterActived, setFilterActived] = useState("today");
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(false);
  const [overCount, setOverCount] = useState(0);
  const [macaddress, setMacaddress] = useState("");


  async function getMac() {
    if (Platform.OS === "ios") {
      await Application.getIosIdForVendorAsync().then((id) =>
        setMacaddress(id)
      );
    } else {
      setMacaddress(Application.androidId);
    }
  }

  async function loadTasks() {
    setLoad(true);
    await api
      .get(`/task/filter/${filterActived}/${macaddress}`)
      .then((response) => {
        setTasks(response.data), setLoad(false);
      });
  }

  async function lateVerify() {
    await api.get(`/task/filter/late/${macaddress}`).then((response) => {
      setOverCount(response.data.length);
    });
  }

  function handdleOverdueTasks() {
    setFilterActived("late");
  }

  function handdleShowTaskScreen() {
    navigation.navigate("Task");
  }

  function handdleShowTaskDetails(id) {
    navigation.navigate('Task', {taskId: id})
  }

  useEffect(() => {
    getMac().then(() => {
      loadTasks()
    });
    lateVerify();
  }, [filterActived, macaddress]);

  return (
    <View style={styles.container}>
      <Header
        showNotification={true}
        showBack={false}
        pressNotification={handdleOverdueTasks}
        overCount={overCount}
      />

      <View style={styles.filter}>
        <TouchableOpacity onPress={() => setFilterActived("all")}>
          <Text
            style={
              filterActived === "all"
                ? styles.filterActived
                : styles.filterUnactived
            }
          >
            {" "}
            All{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilterActived("today")}>
          <Text
            style={
              filterActived === "today"
                ? styles.filterActived
                : styles.filterUnactived
            }
          >
            {" "}
            Today{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilterActived("week")}>
          <Text
            style={
              filterActived === "week"
                ? styles.filterActived
                : styles.filterUnactived
            }
          >
            {" "}
            Week{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilterActived("month")}>
          <Text
            style={
              filterActived === "month"
                ? styles.filterActived
                : styles.filterUnactived
            }
          >
            {" "}
            Month{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilterActived("year")}>
          <Text
            style={
              filterActived === "year"
                ? styles.filterActived
                : styles.filterUnactived
            }
          >
            {" "}
            Year{" "}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {load ? (
          <ActivityIndicator color={"#4c168a"} size={50} />
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              done={task.done}
              title={task.title}
              type={task.type}
              date={task.when}
              onPress={() => handdleShowTaskDetails(task._id)}
            />
          ))
        )}
      </ScrollView>

      <Footer typeIcon={"add"} onPress={handdleShowTaskScreen} />
    </View>
  );
}
