export type AuthNavigationScreens = {
  Authentication: undefined
}

export type DashboardNaviagtionScreens = {
  MyFiles: undefined
  Profile: undefined
}

export type MainNavigationScreens = {
  Dashboard: DashboardNaviagtionScreens
  Settings: undefined
  EditProfile: undefined
  WordReader: undefined
}

export type TRootStackParams = {
  Main: MainNavigationScreens
  Auth: AuthNavigationScreens
}
