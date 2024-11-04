import { Text, StyleSheet } from 'react-native';
import { useThemeColor } from '@/lib/useThemeColor';

export default function ThemedText({ style, ...rest }) {
  const color = useThemeColor('text');
  return (
    <Text style={[{ color }, styles.default, style]} {...rest} />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
});
