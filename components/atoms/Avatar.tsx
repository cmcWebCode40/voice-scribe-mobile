import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import { Image, ImageProps, StyleSheet } from 'react-native'

import { Icon } from './Icon'

type AvatarProps = {
  uri?: string
} & Omit<ImageProps, 'source'>

export const Avatar: React.FunctionComponent<AvatarProps> = ({
  uri,
  style,
  ...otherProps
}) => {
  const ImageStyle = useThemedStyles(styles)
  if (!uri) {
    return <Icon name='user-circle' size={64} />
  }
  return (
    <Image style={[ImageStyle.image, style]} {...otherProps} source={{ uri }} />
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    image: {
      borderRadius: theme.radius.full,
      height: 64,
      width: 64,
    },
  })
}
