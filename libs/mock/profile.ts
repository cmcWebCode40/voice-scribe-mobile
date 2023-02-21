import { Profile } from 'libs/types'

export const profile = {
  avatar: 'https://picsum.photos/id/237/200/300',
  name: 'Chinwieike Michael',
  level: 'Beginner',
}

export const getProfile = async (): Promise<Profile> => Promise.resolve(profile)
