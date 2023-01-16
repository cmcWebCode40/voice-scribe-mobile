import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { RootNavigation } from './navigations'

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  )
}
