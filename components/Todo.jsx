import { Pressable, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useRow, useSetCellCallback } from 'tinybase/ui-react';
import { DB } from '@/lib/Constants';
import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

export default function Todo({ id }) {
  const { text, done } = useRow(DB.todo.table, id);
  const handlePress = useSetCellCallback(
    DB.todo.table,
    id,
    DB.todo.done,
    () => (done) => !done
  );

  const doneStyle = done
    ? { textDecorationLine: 'line-through' }
    : {};
  return (
    <Pressable key={id} onPress={handlePress}>
      <ThemedView style={styles.container}>
        <Checkbox
          style={styles.checkbox}
          value={done}
          onValueChange={handlePress}
        />
        <ThemedText style={[styles.todoText, doneStyle]}>
          {text}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkbox: {
    marginLeft: 10,
  },
  todoText: {
    fontSize: 20,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
