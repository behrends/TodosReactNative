import { useState } from 'react'; // <-- import aus react!
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function Todo({ children }) {
  const [done, setDone] = useState(false); // <-- state mit false initialisieren

  const doneStyle = done
    ? { textDecorationLine: 'line-through' }
    : {}; // <-- Styling abhängig vom state
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={done} // <-- Verwendung des state
        onValueChange={setDone} // <-- Verwendung der update function
      />
      <Pressable onPress={() => setDone(!done)}>
        <Text style={[styles.todoText, doneStyle]}>{children}</Text>
      </Pressable>
    </View>
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
    fontSize: 24,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
