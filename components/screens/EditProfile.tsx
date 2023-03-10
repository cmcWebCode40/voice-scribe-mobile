import { useUploadAvatar } from 'libs/hooks'
import { useProfile } from 'libs/hooks/useProfile'
import { Profile } from 'libs/types'
import React, { useCallback } from 'react'

import { NavigationHeader } from 'components/molecules'
import { EditAccount, UploadAvatar } from 'components/organisms'
import { AppLayoutView, AppSafeAreaView } from 'components/templates'

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
    <AppSafeAreaView>
      <NavigationHeader IconType='back' />
      <AppLayoutView>
        <EditAccount profile={profile} updateProfile={updateProfile} />
        <UploadAvatar
          url={profile?.avatar}
          onUpload={() => {
            updateProfile({ avatar_url: avatarUrl })
          }}
        />
      </AppLayoutView>
    </AppSafeAreaView>
  )
}
