import { WORDS_LIST_ACTION_SHEET_FEATURE } from 'libs/constants'
import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { usePostHog } from 'posthog-react-native'
import React from 'react'
import { Pressable, StyleSheet, View, ViewProps } from 'react-native'

import { Icon, Typographgy } from 'components/atoms'

import { ReaderFileIcon } from './ReaderFileIcon'

type ReaderFileItemProps = {
  title?: string
  duration?: string
  date?: string
  completed?: boolean
  itemId?: string
  onPress: (itemId: string | undefined) => void
} & ViewProps
export const ReaderFileItem: React.FunctionComponent<ReaderFileItemProps> = ({
  style,
  onPress,
  date,
  duration,
  title,
  itemId,
  ...otherProps
}) => {
  const BaseStyle = useThemedStyles(styles)
  const posthog = usePostHog()

  const isWordListActionEnabled = posthog?.isFeatureEnabled(
    WORDS_LIST_ACTION_SHEET_FEATURE
  )

  return (
    <View {...otherProps} style={[BaseStyle.container, style]}>
      <Pressable
        style={BaseStyle.content}
        onPress={() => {
          if (itemId) {
            onPress(itemId)
          }
        }}>
        <View style={BaseStyle.assetContainer}>
          <ReaderFileIcon />
        </View>
        <View>
          <Typographgy style={BaseStyle.title} variant='h3'>
            {title}
          </Typographgy>
          <View style={BaseStyle.captionContainer}>
            {duration && (
              <Typographgy style={BaseStyle.caption} variant='p2'>
                {duration}
              </Typographgy>
            )}
            {date && (
              <Typographgy style={BaseStyle.caption} variant='p2'>
                {date}
              </Typographgy>
            )}
          </View>
        </View>
      </Pressable>
      <View>
        {isWordListActionEnabled && <Icon name='more-horizontal' size={20} />}
      </View>
    </View>
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
