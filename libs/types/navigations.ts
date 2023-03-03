export type AuthNavigationScreens = {
  Authentication: undefined
  Login: undefined
  SignUp: undefined
  ForgotPassword: undefined
}

export type DashboardNaviagtionScreens = {
  MyFiles?: undefined
  Profile?: undefined
}

export type MainNavigationScreens = {
  Dashboard: DashboardNaviagtionScreens
  Settings: undefined
  EditProfile: undefined
  WordReader: {
    id: number | string
  }
}

export type TRootStackParams = {
  Main: MainNavigationScreens
  Auth: AuthNavigationScreens
}
