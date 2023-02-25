import { useThemedStyles, useUploadAvatar } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View, ViewProps } from 'react-native'

import { Avatar, Button } from 'components/atoms'

type UploadAvatarProps = {
  url: string | undefined
  onUpload: (filePath: string) => void
} & ViewProps

export const UploadAvatar: React.FunctionComponent<UploadAvatarProps> = ({
  url,
  onUpload,
  ...otherProps
}) => {
  const [avatarUrl] = useState<string | undefined>(url)
  const { loadImage, uploadAvatar } = useUploadAvatar()
  const { t: translation } = useTranslation()
  const style = useThemedStyles(styles)

  const handleAvatar = useCallback(() => {
    uploadAvatar()
    onUpload('avatarUrl')
  }, [onUpload, uploadAvatar])

  useEffect(() => {
    if (url) loadImage(url)
  }, [loadImage, url])

  const buttonLabel = translation('UploadAvatar.buttonLabel')

  return (
    <View style={style.container} {...otherProps}>
      <Avatar uri={avatarUrl} />
      <View>
        <Button onPress={handleAvatar} variant='contained'>
          {buttonLabel}
        </Button>
      </View>
    </View>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      // marginBottom: 16,
    },
    input: {
      borderWidth: 1,
      padding: 16,
      borderColor: theme.colors.primary,
      borderRadius: theme.radius.rounded,
    },
  })
}
