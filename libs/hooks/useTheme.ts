import { ThemeContext } from 'libs/contexts'
import { useContext } from 'react'

export const useTheme = () => {
  return useContext(ThemeContext)
}
