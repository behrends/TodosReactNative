import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';
import TodoList from './components/TodoList';
import TodoModal from './components/TodoModal';
import FAB from './components/FAB';

const todos = [
  { id: 1, text: 'Einkaufen' },
  { id: 2, text: 'Sport' },
  { id: 3, text: 'React Native lernen' },
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TodoModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSave={() => setModalVisible(false)}
      />
      <TodoList todos={todos} />
      <FAB onPress={() => setModalVisible(true)} />
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
