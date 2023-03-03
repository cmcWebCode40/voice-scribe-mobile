import { Session, SupabaseClient } from '@supabase/supabase-js'
import { Profile } from 'libs/types'

export const getProfile = async (
  supabase: SupabaseClient,
  session: Session
) => {
  return await supabase
    .from('profiles')
    .select(`full_name, avatar_url`)
    .eq('id', session.user.id)
}

export const updateProfile = async (
  supabase: SupabaseClient,
  updatedProfile: Profile
) => {
  const { error, data } = await supabase.from('profiles').update(updatedProfile)
  return {
    error,
    data,
  }
}

export const createProfile = async (
  supabase: SupabaseClient,
  updatedProfile: Profile
) => {
  return await supabase.from('profiles').insert([updatedProfile])
}

export const downloadProfileImage = async (
  supabase: SupabaseClient,
  path: string
) => {
  return await supabase.storage.from('avatars').download(path)
}

export const uploadProfileImage = async (
  supabase: SupabaseClient,
  filePath: string,
  formData: FormData
) => {
  const { error } = await supabase.storage
    .from('avatars')
    .upload(filePath, formData)

  return {
    error,
  }
}
