import { Stack } from 'expo-router'

export default function ContactLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="edit" options={{ presentation: 'modal' }} />
    </Stack>
  )
}
