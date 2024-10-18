import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import TodoList from './components/TodoList';
import FAB from './components/FAB';

const todos = [
  { id: 1, text: 'Einkaufen' },
  { id: 2, text: 'Sport' },
  { id: 3, text: 'React Native lernen' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoList todos={todos} />
      <FAB
        onPress={() =>
          Alert.alert('Neues Todo', 'Todo erstellen', [
            {
              text: 'Abbrechen',
              onPress: () => console.log('Abbrechen gedrückt'),
              style: 'cancel',
            },
            {
              text: 'Speichern',
              onPress: () => console.log('Speichern gedrückt'),
            },
          ])
        }
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
