import { getProfile } from 'libs/mock/profile'
import { Profile } from 'libs/types'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { AchievedGoals, ProfileInformation } from 'components/molecules'

export const UserProfile: React.FunctionComponent = () => {
  const [profile, setProfile] = useState<Profile | undefined>()

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
    <View style={styles.container}>
      <ProfileInformation profile={profile} />
      <AchievedGoals />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
})
