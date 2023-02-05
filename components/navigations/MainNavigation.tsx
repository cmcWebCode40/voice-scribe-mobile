import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DASHBOARD, SETTINGS } from 'libs/constants'
import { TMainNavigation } from 'libs/types'
import React from 'react'

import { Settings } from 'components/screens'

import { Dashboard } from './Dashboard'

const Stack = createNativeStackNavigator<TMainNavigation>()

export const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={DASHBOARD} component={Dashboard} />
      <Stack.Screen name={SETTINGS} component={Settings} />
    </Stack.Navigator>
  )
}
