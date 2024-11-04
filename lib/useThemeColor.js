import { useColorScheme } from 'react-native';

import { Colors } from '@/lib/Colors';

export function useThemeColor(colorName) {
  const theme = useColorScheme() ?? 'light';
  return Colors[theme][colorName];
}
