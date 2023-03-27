import { useThemedStyles } from 'libs/hooks'
import React from 'react'
import { ScrollView, StyleSheet, View, ViewProps } from 'react-native'

type AppLayoutViewProps = {
  children: React.ReactNode,
  withScroll?:boolean
} & ViewProps

export const AppLayoutView: React.FunctionComponent<AppLayoutViewProps> = ({
  children,
  style,
  withScroll = true,
  ...otherProps
}) => {
  const baseStyle = useThemedStyles(styles)

  if (withScroll) {
    return (
      <View style={[baseStyle.container, style]} {...otherProps}>
        <ScrollView>
          {children}
        </ScrollView>
      </View>
    )
  }

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
