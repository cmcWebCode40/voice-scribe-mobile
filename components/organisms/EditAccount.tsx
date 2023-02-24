import { useAuth, useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { Profile } from 'libs/types'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, TextInput, View, ViewProps } from 'react-native'

import { Button } from 'components/atoms'

type ProfileUpdate = {
  username?: string
  website?: string
  avatar_url?: string
}

type EditAccountProps = {
  updateProfile: (arg: ProfileUpdate) => Promise<void>
  profile?: Profile
} & ViewProps

export const EditAccount: React.FunctionComponent<EditAccountProps> = ({
  profile,
  updateProfile,
  ...otherProps
}) => {
  const [username, setUsername] = useState<string | undefined>('')
  const [website, setWebsite] = useState<string | undefined>('')
  const { user } = useAuth()
  const { t: translation } = useTranslation()
  const style = useThemedStyles(styles)

  const websitePlaceHolder = translation('EditAccount.websitePlaceHolder')
  const usernamePlaceHolder = translation('EditAccount.usernamePlaceHolder')
  const emailPlaceHolder = translation('EditAccount.emailPlaceHolder')
  const buttonLabel = translation('EditAccount.buttonLabel')

  const handleProfileUpdate = useCallback(() => {
    updateProfile({ username, website })
  }, [updateProfile, username, website])

  useEffect(() => {
    if (profile) {
      setUsername(profile.username)
      setWebsite(profile.website)
    }
  }, [profile])

  return (
    <View {...otherProps}>
      <View style={style.inputContainer}>
        <TextInput
          value={user?.email}
          style={style.input}
          placeholder={emailPlaceHolder}
        />
      </View>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          value={username || ''}
          onChangeText={(text) => setUsername(text)}
          placeholder={usernamePlaceHolder}
        />
      </View>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          value={website || ''}
          placeholder={websitePlaceHolder}
          onChangeText={(text) => setWebsite(text)}
        />
      </View>
      <View>
        <Button onPress={handleProfileUpdate} variant='contained'>
          {buttonLabel}
        </Button>
      </View>
    </View>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    inputContainer: {
      marginBottom: 16,
    },
    input: {
      borderWidth: 1,
      padding: 16,
      borderColor: theme.colors.primary,
      borderRadius: theme.radius.rounded,
    },
  })
}
