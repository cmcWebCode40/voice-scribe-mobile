import { getProfile, supabase, updateProfile } from 'libs/services'
import { Profile, ProfileQueryError } from 'libs/types'
import { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { useAuth } from './useAuth'

export const useProfile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [profile, setProfile] = useState<Profile | undefined>(undefined)
  const [error, setError] = useState<ProfileQueryError | null>(null)

  const { session } = useAuth()
  const getUserProfile = useCallback(async () => {
    try {
      setIsLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const { data, error: profileError } = await getProfile(supabase, session)

      if (profileError) {
        setError(profileError)
        return
      }
      setProfile(data as Profile)
    } catch (catchError) {
      if (catchError instanceof Error) {
        Alert.alert(catchError.message)
      }
    } finally {
      setIsLoading(false)
    }
  }, [session])
  const updateUserProfile = useCallback(
    async ({ username, website, avatar_url }: Profile) => {
      try {
        setIsLoading(true)
        if (!session?.user) throw new Error('No user on the session!')

        const updates = {
          id: session?.user.id,
          username,
          website,
          avatar_url,
          updated_at: new Date(),
        }

        const { error: updateError } = await updateProfile(supabase, updates)

        if (updateError) {
          setError(updateError)
          return
        }
      } catch (catchError) {
        if (catchError instanceof Error) {
          Alert.alert(catchError.message)
        }
      } finally {
        setIsLoading(false)
      }
    },
    [session?.user]
  )

  useEffect(() => {
    getUserProfile()
  }, [getUserProfile])

  return {
    error,
    profile,
    isLoading,
    getUserProfile,
    updateUserProfile,
  }
}
