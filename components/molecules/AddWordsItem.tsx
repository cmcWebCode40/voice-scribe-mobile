import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import { Pressable, PressableProps, StyleSheet, View } from 'react-native'

import { Typographgy } from 'components/atoms'

type AddWordsItemProps = {
  title: string
  subTitle: string
  icon: React.ReactElement
} & PressableProps
export const AddWordsItem: React.FunctionComponent<AddWordsItemProps> = ({
  icon,
  title,
  onPress,
  subTitle,
  ...otherProps
}) => {
  const BaseStyle = useThemedStyles(styles)
  return (
    <Pressable {...otherProps} style={BaseStyle.container} onPress={onPress}>
      <View style={BaseStyle.content}>
        <View style={BaseStyle.assetContainer}>{icon}</View>
        <View>
          <Typographgy style={BaseStyle.title} variant='h3'>
            {title}
          </Typographgy>
          <View style={BaseStyle.captionContainer}>
            {subTitle && (
              <Typographgy style={BaseStyle.caption} variant='p2'>
                {subTitle}
              </Typographgy>
            )}
          </View>
        </View>
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
      borderColor: theme.colors.primary,
      borderWidth: 1,
      padding: 16,
      borderRadius: theme.radius.lg,
    },
    assetContainer: {
      marginRight: 16,
    },
    title: {
      marginBottom: 4,
    },
    captionContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    caption: {
      fontFamily: theme.fonts.NunitoSansBold,
      marginRight: 10,
    },
    content: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  })
}
