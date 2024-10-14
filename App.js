import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Todo from './components/Todo';

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
});
