import 'libs/locales'

import { AppContext } from 'libs/contexts'
import { usePrepareApp } from 'libs/hooks'
import React from 'react'

import { ErrorBoundary } from 'components/molecules'

import { RootNavigation } from './components/navigations'

const App: React.FunctionComponent = () => {
  const { isAppReady } = usePrepareApp()

  if (!isAppReady) {
    //TODO: add error screen if  app fails initialise
    return null
  }
  return (
    <ErrorBoundary>
      <AppContext>
        <RootNavigation />
      </AppContext>
    </ErrorBoundary>
  )
}

export default App
