import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export const useLoadFonts = () => {
  const loadFonts = async () => {
    const NunitoSans = require('../../assets/fonts/NunitoSans-Regular.ttf')
    const NunitoSansBold = require('../../assets/fonts/NunitoSans-Bold.ttf')
    const NunitoSansSemiBold = require('../../assets/fonts/NunitoSans-SemiBold.ttf')

    try {
      await Promise.all([
        Font.loadAsync({ NunitoSans }),
        Font.loadAsync({ NunitoSansSemiBold }),
        Font.loadAsync({ NunitoSansBold }),
      ])
    } catch (error) {
      // TODO : add error loggin service report
    } finally {
      await SplashScreen.hideAsync()
    }
  }

  return {
    loadFonts,
  }
}
