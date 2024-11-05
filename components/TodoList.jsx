import { FlatList, StyleSheet, View } from 'react-native';
import { useRowIds } from 'tinybase/ui-react';
import { DB } from '@/lib/Constants';
import Todo from './Todo';

export default function TodoList() {
  return (
    <FlatList
      style={styles.list}
      data={useRowIds(DB.todo.table)}
      renderItem={({ item: id }) => <Todo id={id} />}
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
