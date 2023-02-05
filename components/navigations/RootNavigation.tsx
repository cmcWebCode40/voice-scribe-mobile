import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TRootStackParams } from 'libs/types'
import React, { useState } from 'react'

import { AuthNavigation } from './AuthNavigation'
import { MainNavigation } from './MainNavigation'

const Stack = createNativeStackNavigator<TRootStackParams>()

export const RootNavigation = () => {
  const [authenticated] = useState(true)
  const [connecting] = useState(false)

  if (connecting) {
    //TODO: handle loading component for loading state
    return null
  }

  //TODO : handle authentication
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {authenticated ? (
        <Stack.Screen name='Main' component={MainNavigation} />
      ) : (
        <Stack.Screen name='Auth' component={AuthNavigation} />
      )}
    </Stack.Navigator>
  )
}
