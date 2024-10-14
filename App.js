import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import TodoList from './components/TodoList';

const todos = [
  { id: 1, text: 'Einkaufen' },
  { id: 2, text: 'Sport' },
  { id: 3, text: 'React Native lernen' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <TodoList todos={todos} />
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
    paddingTop: Constants.statusBarHeight,
  },
});
