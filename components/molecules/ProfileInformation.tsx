import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { EDIT_PROFILE } from 'libs/constants'
import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { MainNavigationScreens, Profile } from 'libs/types'
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
  const navigation =
    useNavigation<NativeStackNavigationProp<MainNavigationScreens>>()

  const navigateToEditProfile = useCallback(() => {
    navigation.navigate(EDIT_PROFILE)
  }, [navigation])

  return (
    <View style={style.profileDetails}>
      <View>
        <Avatar style={style.avatar} uri={profile?.avatar} />
        <IconButton
          icon={<Icon name='add' />}
          onPress={navigateToEditProfile}
        />
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
    avatar: {
      height: 100,
      width: 100,
    },
    profileName: {
      marginVertical: 4,
    },
    profileLevel: {
      textAlign: 'center',
      fontFamily: theme.fonts.NunitoSansBold,
    },
  })
}
