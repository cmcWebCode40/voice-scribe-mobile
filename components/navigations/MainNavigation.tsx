import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DASHBOARD, EDIT_PROFILE, SETTINGS, WORD_READER } from 'libs/constants'
import { MainNavigationScreens } from 'libs/types'
import React from 'react'

import { EditProfile, Settings, WordReader } from 'components/screens'

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
      <Stack.Screen name={EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen name={WORD_READER} component={WordReader} />
    </Stack.Navigator>
  )
}
