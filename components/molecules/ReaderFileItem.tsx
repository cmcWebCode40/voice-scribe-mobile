import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { ReaderFileInformation } from 'libs/types'
import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

import { Icon, Typographgy } from 'components/atoms'

import { ReaderFileIcon } from './ReaderFileIcon'

type ReaderFileItemProps = {
  fileInformation: ReaderFileInformation
} & ViewProps
export const ReaderFileItem: React.FunctionComponent<ReaderFileItemProps> = ({
  style,
  fileInformation,
  ...otherProps
}) => {
  const BaseStyle = useThemedStyles(styles)
  return (
    <View {...otherProps} style={[BaseStyle.container, style]}>
      <View style={BaseStyle.content}>
        <View style={BaseStyle.assetContainer}>
          <ReaderFileIcon />
        </View>
        <View>
          <Typographgy style={BaseStyle.title} variant='h3'>
            {fileInformation.title}
          </Typographgy>
          <View style={BaseStyle.captionContainer}>
            {fileInformation.duration && (
              <Typographgy style={BaseStyle.caption} variant='p2'>
                {fileInformation.duration}
              </Typographgy>
            )}
            {fileInformation.date && (
              <Typographgy style={BaseStyle.caption} variant='p2'>
                {fileInformation.date}
              </Typographgy>
            )}
          </View>
        </View>
      </View>
      <View>
        <Icon name='more-horizontal' size={20} />
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
