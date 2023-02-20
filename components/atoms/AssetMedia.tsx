import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import { Image, ImageProps, StyleSheet } from 'react-native'

type AssetMediaProps = {
  uri: string
} & Omit<ImageProps, 'source'>

export const AssetMedia: React.FunctionComponent<AssetMediaProps> = ({
  uri,
  style,
  ...otherProps
}) => {
  const ImageStyle = useThemedStyles(styles)
  return (
    <Image
      style={[ImageStyle.assetMedia, style]}
      {...otherProps}
      source={{ uri }}
    />
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    assetMedia: {
      height: 100,
      width: 100,
      borderRadius: theme.radius.xl,
    },
  })
}
