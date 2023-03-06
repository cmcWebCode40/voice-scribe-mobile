import { useThemedStyles } from 'libs/hooks'
import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

type AppLayoutViewProps = {
  children: React.ReactNode
} & ViewProps

export const AppLayoutView: React.FunctionComponent<AppLayoutViewProps> = ({
  children,
  style,
  ...otherProps
}) => {
  const baseStyle = useThemedStyles(styles)
  return (
    <View style={[baseStyle.container, style]} {...otherProps}>
      {children}
    </View>
  )
}

const styles = () => {
  return StyleSheet.create({
    container: {
      padding: 16,
    },
  })
}
