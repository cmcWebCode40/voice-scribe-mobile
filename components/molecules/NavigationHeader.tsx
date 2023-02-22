import { useNavigation } from '@react-navigation/native'
import { useThemedStyles } from 'libs/hooks'
import { theme } from 'libs/theme'
import React from 'react'
import { Platform, StyleSheet, View, ViewProps } from 'react-native'

import { Icon } from 'components/atoms'

type NavigationHeaderProps = {
  IconType?: 'back'
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
} & ViewProps

/**
 * Custom Naviagtion header to be rendered on some screens
 * //TODO: refactor component to be more robust and greatly re-usable
 */
export const NavigationHeader: React.FunctionComponent<
  NavigationHeaderProps
> = ({ IconType, leftIcon, rightIcon, ...otherProps }) => {
  const navigation = useNavigation()
  const style = useThemedStyles(styles)
  return (
    <View
      {...otherProps}
      style={[
        style.container,
        Platform.select({
          ios: {
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.gray100,
          },
          android: { elevation: 1 },
        }),
      ]}>
      {IconType === 'back' ? (
        navigation.canGoBack() && (
          <Icon name='chevron-back' onPress={navigation.goBack} />
        )
      ) : (
        <View>{leftIcon}</View>
      )}
      <View>{rightIcon}</View>
    </View>
  )
}

const styles = () => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  })
}
