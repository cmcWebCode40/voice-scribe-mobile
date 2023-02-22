import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SETTINGS } from 'libs/constants'
import { getProfile } from 'libs/mock/profile'
import { MainNavigationScreens, Profile } from 'libs/types'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import { Icon } from 'components/atoms'
import {
  AchievedGoals,
  NavigationHeader,
  ProfileInformation,
} from 'components/molecules'

export const UserProfile: React.FunctionComponent = () => {
  const [profile, setProfile] = useState<Profile | undefined>()
  const navigation =
    useNavigation<NativeStackNavigationProp<MainNavigationScreens>>()

  const handleNavigation = useCallback(() => {
    navigation.navigate(SETTINGS)
  }, [navigation])

  useEffect(() => {
    const loadProfile = async () => {
      setProfile(await getProfile())
    }
    loadProfile()
  }, [])

  if (!profile) {
    //TODO: handle loading and error state
    return null
  }

  return (
    <SafeAreaView>
      <NavigationHeader
        rightIcon={<Icon name='setting' onPress={handleNavigation} />}
      />
      <View style={styles.content}>
        <ProfileInformation profile={profile} />
        <AchievedGoals />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
})
