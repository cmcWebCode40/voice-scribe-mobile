import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AUTH_SCREEN } from 'libs/constants'
import { AuthNavigationScreens } from 'libs/types'
import React from 'react'

import { Authentication } from 'components/screens'

const Stack = createNativeStackNavigator<AuthNavigationScreens>()

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AUTH_SCREEN} component={Authentication} />
    </Stack.Navigator>
  )
}
