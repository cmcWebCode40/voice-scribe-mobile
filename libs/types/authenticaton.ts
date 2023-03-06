/* eslint-disable no-shadow */
export type AuthenticationMode = 'login' | 'sign-up' | 'password-reset'

export enum EAuthenticationMode {
  LOGIN = 'login',
  SIGNUP = 'sign-up',
  PASSWORD_RESET = 'password-reset',
}

export type FormValues = {
  email: string
  fullName: string
  password: string
  confirmPassword: string
}
