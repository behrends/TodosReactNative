import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';
import ThemedView from '@/components/ThemedView';
import TodoList from '@/components/TodoList';
import FAB from '@/components/FAB';

export default function App() {
  return (
    <ThemedView style={styles.container}>
      <TodoList />
      <FAB onPress={() => router.navigate('/new')} />
      <StatusBar style="auto" />
    </ThemedView>
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
