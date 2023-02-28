import { GenerateBoxShadowStyle } from 'libs/types'
import { Platform } from 'react-native'

export const generateBoxShadowStyle = ({
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
}: GenerateBoxShadowStyle) => {
  let style
  if (Platform.OS === 'ios') {
    style = {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    }
  } else if (Platform.OS === 'android') {
    style = {
      elevation,
      shadowColor: shadowColorAndroid,
    }
  }

  return style
}
