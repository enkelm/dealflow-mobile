import { Feather } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

import { HapticTab } from '@/components/ui/haptic-tab'
import TabBarBackground from '@/components/ui/tab-bar-background'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
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
