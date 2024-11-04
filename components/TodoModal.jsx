import { useState } from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useThemeColor } from '@/lib/useThemeColor';
import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

export default function TodoModal({ visible, onCancel, onSave }) {
  const [todo, setTodo] = useState('');
  const color = useThemeColor('text');

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onCancel}
    >
      <ThemedView style={styles.container}>
        <ThemedView style={[{ shadowColor: color }, styles.content]}>
          <ThemedText style={styles.text}>Todo hinzufügen</ThemedText>
          <TextInput
            style={[{ color, borderColor: color }, styles.input]}
            placeholder="Todo eingeben"
            value={todo}
            onChangeText={setTodo}
          />
          <View style={styles.buttons}>
            <Button
              title="Abbrechen"
              onPress={() => {
                onCancel();
                setTodo('');
              }}
            />
            <Button
              title="Speichern"
              onPress={() => {
                onSave(todo.trim());
                setTodo('');
              }}
              disabled={todo.trim() === ''}
            />
          </View>
        </ThemedView>
      </ThemedView>
    </Modal>
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
  text: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
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
