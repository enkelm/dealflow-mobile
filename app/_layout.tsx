import { ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { colorScheme } from 'nativewind'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-reanimated'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import '@/global.css'
import { navigationThemes } from '@/utils/navigation-theme'

SplashScreen.preventAutoHideAsync()
colorScheme.set('system')

export default function RootLayout() {
  const theme = useColorScheme()
  const [loaded] = useFonts({ SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf') })

  useEffect(() => {
    if (!loaded) return
    SplashScreen.hideAsync()
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={navigationThemes.get(theme ?? 'light')}>
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <Slot />
          <StatusBar style="auto" />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
