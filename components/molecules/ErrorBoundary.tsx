import React from 'react'
import RNErrorBoundary from 'react-native-error-boundary'

import { CustomFallBack } from './CustomFallBack'

type ErrorBoundaryProps = {
  children: React.ReactElement
}

export const ErrorBoundary: React.FunctionComponent<ErrorBoundaryProps> = ({
  children,
}) => {
  const errorHandler = (error: Error, stackTrace: string) => {
    /* Log the error to an error reporting service */
    // eslint-disable-next-line no-console
    console.log(error)
    console.table(stackTrace)
  }

  return (
    <RNErrorBoundary onError={errorHandler} FallbackComponent={CustomFallBack}>
      {children}
    </RNErrorBoundary>
  )
}
