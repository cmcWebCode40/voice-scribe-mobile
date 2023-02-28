import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuth } from 'libs/hooks'
import { TRootStackParams } from 'libs/types'
import React from 'react'

import { LoaderWithOverlay } from 'components/molecules'

import { AuthNavigation } from './AuthNavigation'
import { MainNavigation } from './MainNavigation'

const Stack = createNativeStackNavigator<TRootStackParams>()

export const RootNavigation = () => {
  const { session, isProcessing } = useAuth()

  if (isProcessing) {
    return <LoaderWithOverlay isLoading={isProcessing} />
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!session ? (
        <Stack.Screen name='Auth' component={AuthNavigation} />
      ) : (
        <Stack.Screen name='Main' component={MainNavigation} />
      )}
    </Stack.Navigator>
  )
}
