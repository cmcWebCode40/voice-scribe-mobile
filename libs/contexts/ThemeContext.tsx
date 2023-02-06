import { Theme, theme as DefaultTheme } from 'libs/theme'
import { ThemeMode } from 'libs/types'
import { getTheme } from 'libs/utils'
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useColorScheme } from 'react-native'

type DefaultContext = {
  theme: Theme
  mode: ThemeMode
  onSwitchTheme: (mode: ThemeMode) => void
}

type ThemeContextProvider = {
  children: React.ReactNode
}

export const ThemeContext = createContext<DefaultContext>({
  mode: 'light',
  onSwitchTheme: (mode: ThemeMode) => mode,
  theme: getTheme('dark') as Theme,
})

export const ThemeContextProvider: React.FunctionComponent<
  ThemeContextProvider
> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(DefaultTheme)
  const [mode, setMode] = useState<ThemeMode>('dark')
  const colorScheme = useColorScheme()

  useEffect(() => {
    //TODO: setup persistent local storage then check for user prevoius settings

    setTheme(getTheme(colorScheme) as Theme)
  }, [colorScheme])

  const onSwitchTheme = useCallback((themeMode: ThemeMode) => {
    setMode(themeMode)
    setTheme(getTheme(themeMode) as Theme)
  }, [])

  const values = useMemo(
    () => ({
      theme,
      onSwitchTheme,
      mode,
    }),
    [mode, onSwitchTheme, theme]
  )

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}
