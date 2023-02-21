import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

import { useLoadFonts } from './useLoadFonts'

/**
 *
 * Hooks to handle all resources that need to be fetched before loading the app
 * This displays the splash screen until all resources are completely resolved
 */
export const usePrepareApp = () => {
  const [isAppReady, setIsAppReady] = useState(false)
  const { loadFonts } = useLoadFonts()

  useEffect(() => {
    const init = async () => {
      try {
        await SplashScreen.preventAutoHideAsync()
        await loadFonts()
      } catch (error) {
        // TODO : add error loggin service report
      } finally {
        setIsAppReady(true)
      }
    }
    init()
  }, [loadFonts])

  return {
    isAppReady,
  }
}
