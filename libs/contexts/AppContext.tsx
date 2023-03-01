import { NavigationContainer } from '@react-navigation/native'
import { config } from 'libs/config'
import { PostHogProvider } from 'posthog-react-native'
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
        <AuthenticationContextProvider>
          <NavigationContainer>
            <PostHogProvider
              apiKey={config.postHogApiKey}
              options={{
                host: config.postHogURl,
              }}>
              {children}
            </PostHogProvider>
          </NavigationContainer>
        </AuthenticationContextProvider>
      </LocalizationContextProvider>
    </ThemeContextProvider>
  )
}
