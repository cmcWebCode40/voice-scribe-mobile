import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'

export const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    NunitoSans: require('../../assets/fonts/NunitoSans-Regular.ttf'),
    NunitoSansBold: require('../../assets/fonts/NunitoSans-Bold.ttf'),
    NunitoSansSemiBold: require('../../assets/fonts/NunitoSans-SemiBold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  return {
    fontsLoaded,
    onLayoutRootView,
  }
}
