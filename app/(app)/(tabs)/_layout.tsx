import { Feather } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIconStyle: { position: 'absolute', top: '25%' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} /> }}
      />
    </Tabs>
  )
}
