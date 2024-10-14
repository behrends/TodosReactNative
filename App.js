import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Todo(props) {
  const todo = props.todo;
  return <Text style={styles.todoText}>{todo}</Text>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Todo todo="Einkaufen" />
      <Todo todo="Sport" />
      <Todo todo="React Native lernen" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoText: {
    fontSize: 24,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
