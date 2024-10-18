import { StyleSheet, Pressable, View, Text } from 'react-native';

export default function FAB({ onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.fab,
          { backgroundColor: pressed ? '#0288D1' : '#03A9F4' },
        ]}
      >
        <Text style={styles.fabText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  fab: {
    backgroundColor: '#03A9F4',
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  fabText: {
    color: 'white',
    fontSize: 24,
  },
});
