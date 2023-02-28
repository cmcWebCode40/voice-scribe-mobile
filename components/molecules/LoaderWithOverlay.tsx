import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay/lib'

import { LoaderIndicator } from './LoaderIndicator'

type LoaderWithOverlayProps = {
  isLoading: boolean
  customIndicator?: React.ReactElement
}

export const LoaderWithOverlay: React.FunctionComponent<
  LoaderWithOverlayProps
> = ({ isLoading, customIndicator }) => {
  const loaderIndicator = customIndicator || <LoaderIndicator />
  return <Spinner visible={isLoading} customIndicator={loaderIndicator} />
}
