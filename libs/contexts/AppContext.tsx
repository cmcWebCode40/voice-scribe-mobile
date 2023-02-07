import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { LocalizationContextProvider } from './LocalizationContext'
import { ThemeContextProvider } from './ThemeContext'

type AppContextProps = {
  children: React.ReactNode
}
export const AppContext: React.FunctionComponent<AppContextProps> = ({
  children,
}) => {
  return (
    <ThemeContextProvider>
      <LocalizationContextProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </LocalizationContextProvider>
    </ThemeContextProvider>
  )
}
