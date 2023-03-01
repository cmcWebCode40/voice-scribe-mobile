import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { EDIT_PROFILE, EDIT_PROFILE_FEATURE } from 'libs/constants'
import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { MainNavigationScreens, Profile } from 'libs/types'
import { usePostHog } from 'posthog-react-native'
import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'

import { Avatar, Icon, IconButton, Typographgy } from 'components/atoms'

type ProfileInformationProps = {
  profile?: Profile
}

export const ProfileInformation: React.FunctionComponent<
  ProfileInformationProps
> = ({ profile }) => {
  const style = useThemedStyles(styles)
  const posthog = usePostHog()
  const navigation =
    useNavigation<NativeStackNavigationProp<MainNavigationScreens>>()
  const handleEditProfile = useCallback(() => {
    navigation.navigate(EDIT_PROFILE)
  }, [navigation])

  const isShowEditProfileEnabled =
    posthog?.isFeatureEnabled(EDIT_PROFILE_FEATURE)

  return (
    <View style={style.profileDetails}>
      <View style={style.avatarContainer}>
        <Avatar style={style.avatar} uri={profile?.avatar} />
        {isShowEditProfileEnabled && (
          <View style={style.editProfileIconContainer}>
            <IconButton
              onPress={handleEditProfile}
              icon={<Icon name='edit' />}
            />
          </View>
        )}
      </View>
      <Typographgy variant='h2' style={style.profileName}>
        {profile?.username}
      </Typographgy>
      <Typographgy style={style.profileLevel} variant='p1'>
        {profile?.email}
      </Typographgy>
    </View>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    profileDetails: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    editProfileIconContainer: {
      position: 'absolute',
      right: -50,
      top: -10,
    },
    avatar: {
      height: 100,
      width: 100,
    },
    profileName: {
      marginVertical: 4,
    },
    editIcon: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    profileLevel: {
      textAlign: 'center',
      fontFamily: theme.fonts.NunitoSansBold,
    },
  })
}
