import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import { Pressable, PressableProps, StyleSheet, View } from 'react-native'

import { Icon, Typographgy } from 'components/atoms'

type ProfileSettingsCardProps = {
  icon?: React.ReactElement
  title?: string
  caption?: string
} & PressableProps

export const ProfileSettingsCard: React.FunctionComponent<
  ProfileSettingsCardProps
> = ({ caption, icon, title, ...otherProps }) => {
  const style = useThemedStyles(styles)

  return (
    <Pressable
      {...otherProps}
      style={({ pressed }) => [style.container, pressed && style.cardPress]}>
      <View style={style.content}>
        <View style={style.assetContainer}>{icon}</View>
        <View>
          <Typographgy style={style.title} variant='h3'>
            {title}
          </Typographgy>
          {caption && (
            <Typographgy style={style.caption} variant='p2'>
              {caption}
            </Typographgy>
          )}
        </View>
      </View>
      <View>
        <Icon name='chevron-forward' />
      </View>
    </Pressable>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.background,
      padding: 16,
      borderRadius: theme.radius.lg,
    },
    cardPress: {
      backgroundColor: theme.colors.gray100,
    },
    assetContainer: {
      marginRight: 10,
    },
    title: {
      marginBottom: 4,
    },
    caption: {
      fontFamily: theme.fonts.NunitoSansBold,
    },
    content: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  })
}
