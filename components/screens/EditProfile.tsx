import { useUploadAvatar } from 'libs/hooks'
import { useProfile } from 'libs/hooks/useProfile'
import { Profile } from 'libs/types'
import React, { useCallback } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import { NavigationHeader } from 'components/molecules'
import { EditAccount, UploadAvatar } from 'components/organisms'

export const EditProfile: React.FunctionComponent = () => {
  const { profile, updateUserProfile } = useProfile()
  const { avatarUrl } = useUploadAvatar()

  const updateProfile = useCallback(
    async ({ username, website, avatar_url }: Profile) => {
      await updateUserProfile({ username, website, avatar_url })
    },
    [updateUserProfile]
  )
  return (
    <SafeAreaView>
      <NavigationHeader IconType='back' />
      <View style={styles.content}>
        <EditAccount profile={profile} updateProfile={updateProfile} />
        <UploadAvatar
          url={profile?.avatar}
          onUpload={() => {
            updateProfile({ avatar_url: avatarUrl })
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
})
