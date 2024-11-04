import { useState } from 'react'; // <-- import aus react!
import { Pressable, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

export default function Todo({ children }) {
  const [done, setDone] = useState(false); // <-- state mit false initialisieren

  const doneStyle = done
    ? { textDecorationLine: 'line-through' }
    : {}; // <-- Styling abhängig vom state
  return (
    <Pressable onPress={() => setDone(!done)}>
      <ThemedView style={styles.container}>
        <Checkbox
          style={styles.checkbox}
          value={done} // <-- Verwendung des state
          onValueChange={setDone} // <-- Verwendung der update function
        />
        <ThemedText style={[styles.todoText, doneStyle]}>
          {children}
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
