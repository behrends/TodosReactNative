import { FlatList } from 'react-native';
import Todo from './Todo';

export default function TodoList({ todos }) {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Todo key={item.id}>{item.text}</Todo>
      )}
    />
  );
}
