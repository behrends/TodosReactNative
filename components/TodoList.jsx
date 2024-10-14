import { FlatList, StyleSheet, View } from 'react-native';
import Todo from './Todo';

export default function TodoList({ todos }) {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <Todo key={item.id}>{item.text}</Todo>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'darkgrey',
  },
});
