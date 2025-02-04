import { Stack } from 'expo-router'

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="[contact]" options={{ headerBackButtonDisplayMode: 'minimal' }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}
