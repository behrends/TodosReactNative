import { View } from 'react-native';
import { useThemeColor } from '@/lib/useThemeColor';

export default function ThemedView({ style, ...otherProps }) {
  const backgroundColor = useThemeColor('background');

  return (
    <View style={[{ backgroundColor }, style]} {...otherProps} />
  );
}
