import 'libs/locales'

import { AppContext } from 'libs/contexts'
import { useLoadFonts } from 'libs/hooks/useLoadFonts'
import React from 'react'

import { RootNavigation } from './components/navigations'

const App: React.FunctionComponent = () => {
  const { fontsLoaded } = useLoadFonts()

  if (!fontsLoaded) {
    return null
  }
  return (
    <AppContext>
      <RootNavigation />
    </AppContext>
  )
}

export default App
