import { useFonts } from 'expo-font'
import { Slot, ErrorBoundary } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { colorScheme } from 'nativewind'
import { Fragment, useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-reanimated'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider as NavThemeProvider } from '@react-navigation/native'

import { useColorScheme, useInitialAndroidBarSync } from '@/lib/use-color-scheme'
import { NAV_THEME } from '@/theme'

import '../global.css'
// import 'expo-dev-client'

SplashScreen.preventAutoHideAsync()
colorScheme.set('system')

export default function RootLayout() {
  useInitialAndroidBarSync()
  const { colorScheme, isDarkColorScheme } = useColorScheme()
  const [loaded] = useFonts({ SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf') })

  useEffect(() => {
    if (!loaded) return
    SplashScreen.hideAsync()
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Fragment>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`}
        style={isDarkColorScheme ? 'light' : 'dark'}
      />
      <NavThemeProvider value={NAV_THEME[colorScheme]}>
        <SafeAreaProvider>
          <GestureHandlerRootView>
            <Slot />
            <StatusBar style="auto" />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </NavThemeProvider>
    </Fragment>
  )
}
