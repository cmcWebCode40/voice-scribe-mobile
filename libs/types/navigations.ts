export type AuthNavigationScreens = {
  Authentication: undefined
}

export type DashboardNaviagtionScreens = {
  Dashboard: undefined
  Profile: undefined
}

export type MainNavigationScreens = {
  MyFiles: DashboardNaviagtionScreens
  Settings: undefined
}

export type TRootStackParams = {
  Main: MainNavigationScreens
  Auth: AuthNavigationScreens
}
