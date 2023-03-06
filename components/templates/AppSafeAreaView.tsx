import React from 'react'
import { SafeAreaView, ViewProps } from 'react-native'

type AppSafeAreaViewProps = {
  children: React.ReactNode
} & ViewProps

export const AppSafeAreaView: React.FunctionComponent<AppSafeAreaViewProps> = ({
  children,
  ...otherProps
}) => {
  return <SafeAreaView {...otherProps}>{children}</SafeAreaView>
}
