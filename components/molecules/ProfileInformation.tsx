import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { Profile } from 'libs/types'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Avatar, Typographgy } from 'components/atoms'

type ProfileInformationProps = {
  profile?: Profile
}

export const ProfileInformation: React.FunctionComponent<
  ProfileInformationProps
> = ({ profile }) => {
  const style = useThemedStyles(styles)

  return (
    <View style={style.profileDetails}>
      <View style={style.avatarContainer}>
        <Avatar style={style.avatar} uri={profile?.avatar} />
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
