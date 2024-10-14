import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Todo({ children }) {
  return <Text style={styles.todoText}>{children}</Text>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Todo>Einkaufen</Todo>
      <Todo>Sport</Todo>
      <Todo>React Native lernen</Todo>
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
