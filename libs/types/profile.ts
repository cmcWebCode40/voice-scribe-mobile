export type Profile = {
  id?: string
  full_name?: string
  avatar?: string
  avatar_url?: string
  website?: string
  username?: string
  email?: string
}

export type ProfileQueryError = {
  code: string
  message: string
  hint: string
  details: string
}
