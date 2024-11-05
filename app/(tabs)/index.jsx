import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import * as SQLite from 'expo-sqlite';
import { StyleSheet } from 'react-native';
import { createStore } from 'tinybase';
import { createExpoSqlitePersister } from 'tinybase/persisters/persister-expo-sqlite';
import {
  Provider,
  useAddRowCallback,
  useCreatePersister,
  useCreateStore,
} from 'tinybase/ui-react';
import { DB } from '@/lib/Constants';
import ThemedView from '@/components/ThemedView';
import TodoList from '@/components/TodoList';
import TodoModal from '@/components/TodoModal';
import FAB from '@/components/FAB';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const store = useCreateStore(createStore);
  useCreatePersister(
    store,
    (store) =>
      createExpoSqlitePersister(
        store,
        SQLite.openDatabaseSync('todos.db')
      ),
    [],
    (persister) => persister.load().then(persister.startAutoSave)
  );

  const handleSave = useAddRowCallback(
    DB.todo.table,
    (text) => {
      setModalVisible(false);
      return { [DB.todo.text]: text, [DB.todo.done]: false };
    },
    [],
    store
  );

  return (
    <Provider store={store}>
      <ThemedView style={styles.container}>
        <TodoModal
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          onSave={handleSave}
        />
        <TodoList />
        <FAB onPress={() => setModalVisible(true)} />
        <StatusBar style="auto" />
      </ThemedView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
