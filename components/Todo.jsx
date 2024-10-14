import { StyleSheet, Text } from 'react-native';

export default function Todo({ children }) {
  return <Text style={styles.todoText}>{children}</Text>;
}

const styles = StyleSheet.create({
  todoText: {
    fontSize: 24,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
