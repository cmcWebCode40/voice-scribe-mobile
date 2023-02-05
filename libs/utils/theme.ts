import { colors, theme } from 'libs/theme'
import { ThemeMode } from 'libs/types'

export const getTheme = (mode: ThemeMode) => {
  switch (mode) {
    case 'dark':
      return {
        ...theme,
        colors: colors.dark,
      }
    case 'light':
      return {
        ...theme,
        colors: colors.light,
      }
    default:
      return {
        ...theme,
        colors: colors.light,
      }
  }
}
