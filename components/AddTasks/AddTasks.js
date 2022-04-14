import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import React, { useState } from "react";

const AddTasks = ({ addTask }) => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        placeholder="Enter Task"
        onChangeText={(valueText) => setText(valueText)}
        style={styles.inputText}
        value={text}
      />
      <View style={styles.btn}>
        <Button
          title="Add Task"
          color="green"
          onPress={() => {
            addTask(text);
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputText: {
    margin: 20,
    padding: 20,
    width: 350,
    borderWidth: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#e44",
    fontSize: 20,
  },
  btn: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 50,
    borderRadius: 60,
    backgroundColor: "#000",
  },
});
export default AddTasks;
