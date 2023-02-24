import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { AuthenticationContextProvider } from './AuthenticationContext'
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
        <NavigationContainer>
          <AuthenticationContextProvider>
            {children}
          </AuthenticationContextProvider>
        </NavigationContainer>
      </LocalizationContextProvider>
    </ThemeContextProvider>
  )
}
