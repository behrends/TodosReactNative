import { useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router/stack';
import * as SQLite from 'expo-sqlite';
import { createStore } from 'tinybase';
import { createExpoSqlitePersister } from 'tinybase/persisters/persister-expo-sqlite';
import {
  Provider,
  useCreatePersister,
  useCreateStore,
} from 'tinybase/ui-react';

export default function Layout() {
  const colorScheme = useColorScheme();

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

  return (
    <ThemeProvider
      value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Provider store={store}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ title: 'Todos', headerShown: false }}
          />
          <Stack.Screen
            name="new"
            options={{ title: 'Todo hinzufügen' }}
          />
        </Stack>
      </Provider>
    </ThemeProvider>
  );
}
