import { useThemedStyles } from 'libs/hooks'
import { Theme, theme as ColorTheme } from 'libs/theme'
import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

import { Icon } from 'components/atoms'

type ReaderFileIconProps = {
  isReading?: boolean
} & ViewProps

export const ReaderFileIcon: React.FunctionComponent<ReaderFileIconProps> = ({
  isReading,
  ...otherProps
}) => {
  const style = useThemedStyles(styles)
  return (
    <View
      {...otherProps}
      style={[style.container, isReading && style.isActive]}>
      <Icon
        name='unread'
        color={isReading ? ColorTheme.colors.white : ColorTheme.colors.black}
      />
    </View>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.gray100,
      padding: 10,
      borderRadius: theme.radius.lg,
    },
    isActive: {
      backgroundColor: theme.colors.primary,
    },
  })
}
