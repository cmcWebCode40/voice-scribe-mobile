import { useThemedStyles } from 'libs/hooks'
import { theme } from 'libs/theme'
import React from 'react'
import { Image, ImageProps, StyleSheet } from 'react-native'

import { Icon } from './Icon'

type AvatarProps = {
  uri?: string | undefined
  size?: number
} & Omit<ImageProps, 'source'>

export const Avatar: React.FunctionComponent<AvatarProps> = ({
  uri,
  size = 63,
  style,
  ...otherProps
}) => {
  const ImageStyle = useThemedStyles(styles)
  if (!uri) {
    return <Icon name='user-circle' size={size} color={theme.colors.gray100} />
  }
  return (
    <Image
      accessibilityLabel='Avatar'
      style={[ImageStyle.image, style]}
      {...otherProps}
      source={{ uri }}
    />
  )
}

const styles = () => {
  return StyleSheet.create({
    image: {
      borderRadius: theme.radius.full,
      height: 64,
      width: 64,
    },
  })
}
