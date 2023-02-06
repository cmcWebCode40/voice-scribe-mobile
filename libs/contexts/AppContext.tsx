import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { ThemeContextProvider } from './ThemeContext'

type AppContextProps = {
  children: React.ReactNode
}
export const AppContext: React.FunctionComponent<AppContextProps> = ({
  children,
}) => {
  return (
    <ThemeContextProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeContextProvider>
  )
}
