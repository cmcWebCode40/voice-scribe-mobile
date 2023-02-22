import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DASHBOARD, SETTINGS } from 'libs/constants'
import { MainNavigationScreens } from 'libs/types'
import React from 'react'

import { Settings } from 'components/screens'

import { Dashboard } from './Dashboard'

const Stack = createNativeStackNavigator<MainNavigationScreens>()

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={DASHBOARD} component={Dashboard} />
      <Stack.Screen name={SETTINGS} component={Settings} />
    </Stack.Navigator>
  )
}
