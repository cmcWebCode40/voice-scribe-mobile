import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { Profile } from 'libs/types'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Avatar, Typographgy } from 'components/atoms'

type ProfileInformationProps = {
  profile: Profile
}

export const ProfileInformation: React.FunctionComponent<
  ProfileInformationProps
> = ({ profile }) => {
  const style = useThemedStyles(styles)

  return (
    <View style={style.profileDetails}>
      <View>
        <Avatar style={style.avatar} uri={profile?.avatar} />
      </View>
      <Typographgy variant='h1'>{profile?.name}</Typographgy>
      <Typographgy style={style.profileLevel} variant='p1'>
        {profile?.level}
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
    profileLevel: {
      textAlign: 'center',
      fontFamily: theme.fonts.NunitoSansBold,
    },
  })
}
