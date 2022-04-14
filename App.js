import AddTasks from "./components/AddTasks/AddTasks";
import {
  StyleSheet,
  Alert,
  FlatList,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Header from "./components/Header/Header";
import { useState } from "react";
import Tasks from "./components/Tasks/Tasks";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "HTML I", done: false },
    { id: 2, task: "CSS", done: true },
    { id: 3, task: "Angular", done: true },
    { id: 4, task: "Git", done: false },
    { id: 5, task: "JavaScript I", done: true },
    { id: 6, task: "React", done: false },
  ]);

  const addTask = (text) => {
    if (!text) {
      Alert.alert("Please Enter Task??☹️", { text: "YES" });
    } else {
      setTasks((prev) => [{ task: text, id:  prev.id +1}, ...prev]);
    }

  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id != id))
  }

  const editTask = (id, newTask) => {
    const listTasks = tasks.map(task => {
      if(id === task.id) {
        return {...task, task: newTask}
      }
      return task
    })
    setTasks(listTasks)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView >
        <Header />
        <AddTasks addTask={addTask} />
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Tasks item={item} deleteTask={deleteTask} editTask={editTask}/>}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    borderColor: "red",
    borderRadius: 3,
    width: 300,
    height: 100,
    borderWidth: 2,
    margin: 20,
    padding: 10,
  },
  textbar: {
    backgroundColor: "#40ade5",
    flexShrink: 2,
    fontWeight: "bold",
    color: "#e55",
  },
  buttonstyle: {
    marginTop: 10,
    color: "#ee5",
    backgroundColor: "#333",
    fontSize: 20,
  },
});
