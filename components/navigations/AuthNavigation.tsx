import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AUTH_SCREEN, FORGOT_PASSWORD, LOGIN, SIGN_UP } from 'libs/constants'
import { AuthNavigationScreens } from 'libs/types'
import React from 'react'

import {
  Authentication,
  ForgotPassword,
  Login,
  SignUp,
} from 'components/screens'
import { useAuth } from 'libs/hooks'

const Stack = createNativeStackNavigator<AuthNavigationScreens>()

export const AuthNavigation = () => {
  const { session , isProcessing} = useAuth()

  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AUTH_SCREEN} component={Authentication} />
      <Stack.Screen name={SIGN_UP} component={SignUp} />
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={FORGOT_PASSWORD} component={ForgotPassword} />
    </Stack.Navigator>
  )
}
