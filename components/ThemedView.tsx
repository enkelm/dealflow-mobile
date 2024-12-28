import { View, type ViewProps } from 'react-native'

export function ThemedView({ className, ...props }: ViewProps) {
  return <View className={`bg-white dark:bg-black ${className}`} {...props} />
}
