import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const Tasks = ({ item, deleteTask, editTask }) => {
  return (
    <TouchableOpacity >
      <View style={styles.viewbar}>
      <Text style={{margin: 10}}>{item.task}</Text>
        <Entypo
          name="edit"
          size={25}
          color="blue"
          onPress={() => editTask(item.id, item.task)}
        />
        <MaterialIcons
          name="delete"
          size={25}
          color="green"
          onPress={() => deleteTask(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

});

export default Tasks;
