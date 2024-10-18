import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import TodoList from './components/TodoList';

const todos = [
  { id: 1, text: 'Einkaufen' },
  { id: 2, text: 'Sport' },
  { id: 3, text: 'React Native lernen' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoList todos={todos} />
      <Button
        title="Todo hinzufügen"
        onPress={() => alert('Neues TODO!')}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
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
