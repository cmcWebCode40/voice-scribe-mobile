import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SIGNIN_SCREEN, SIGNUP_SCREEN } from 'libs/constants'
import { TAuthNavigation } from 'libs/types'
import React from 'react'
import { UserSignUp } from 'screens'

const Stack = createNativeStackNavigator<TAuthNavigation>()

export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SIGNUP_SCREEN} component={UserSignUp} />
      <Stack.Screen name={SIGNIN_SCREEN} component={UserSignUp} />
    </Stack.Navigator>
  )
}
