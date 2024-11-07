import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { useAddRowCallback } from 'tinybase/ui-react';
import { DB } from '@/lib/Constants';
import { useThemeColor } from '@/lib/useThemeColor';
import ThemedView from '@/components/ThemedView';

export default function NewScreen() {
  const [todo, setTodo] = useState('');
  const color = useThemeColor('text');

  const handleSave = useAddRowCallback(DB.todo.table, (text) => {
    setTodo('');
    return { [DB.todo.text]: text.trim(), [DB.todo.done]: false };
  });

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[{ shadowColor: color }, styles.content]}>
        <TextInput
          style={[{ color, borderColor: color }, styles.input]}
          placeholder="Todo eingeben"
          value={todo}
          onChangeText={setTodo}
        />
        <View style={styles.buttons}>
          <Button
            title="Speichern"
            onPress={() => {
              handleSave(todo);
              router.navigate('/');
            }}
            disabled={todo.trim() === ''}
          />
        </View>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  content: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    padding: 10,
    marginBottom: 15,
    minWidth: '90%',
  },
  buttons: {
    flexDirection: 'row',
  },
});
