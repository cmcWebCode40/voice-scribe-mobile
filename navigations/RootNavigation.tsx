import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'

import { AuthNavigation } from './AuthNavigation'
import { MainNavigation } from './MainNavigation'

export const RootNavigation = () => {
  const [authenticated] = useState(false)
  const [connecting] = useState(false)

  if (connecting) {
    //Todo: handle loading component for loading state
    return null
  }

  //Todo : handle authentication

  if (!authenticated) {
    return (
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}
