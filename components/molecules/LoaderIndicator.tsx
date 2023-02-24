import { useThemedStyles } from 'libs/hooks'
import { Theme, theme as colorTheme } from 'libs/theme'
import React from 'react'
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
} from 'react-native'

type LoaderIndicatorProps = {
  color?: string
} & ActivityIndicatorProps

export const LoaderIndicator: React.FunctionComponent<LoaderIndicatorProps> = ({
  color,
  style,
  ...otherProps
}) => {
  const baseStyle = useThemedStyles(styles)
  return (
    <ActivityIndicator
      {...otherProps}
      animating={true}
      color={color || colorTheme.colors.primary}
      size='large'
      style={[baseStyle.activityIndicatorContainer, style]}
    />
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    activityIndicatorContainer: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.radius.xl,
      elevation: 4,
      padding: 16,
    },
  })
}
