import { useEffect } from 'react';
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
import * as QuickActions from 'expo-quick-actions';
import { useQuickActionRouting } from 'expo-quick-actions/router';

export default function Layout() {
  const colorScheme = useColorScheme();
  useQuickActionRouting();

  useEffect(() => {
    QuickActions.setItems([
      {
        title: 'Todo hinzufügen',
        id: '0',
        icon: 'add',
        params: { href: '/new' },
      },
    ]);
  }, []);

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
