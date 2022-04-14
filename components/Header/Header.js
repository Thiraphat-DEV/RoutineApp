import React from "react";
import { View, StyleSheet, Text } from "react-native";
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Tasks With Thiraphat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#40ad",
    width: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  title: {
    color: "#fff",
    fontSize: 30
  },
 
});

export default Header;
