export type TAuthNavigation = {
  Authentication: undefined
}

export type TDashboardNaviagtion = {
  Dashboard: undefined
  Profile: undefined
}

export type TMainNavigation = {
  MyFiles: TDashboardNaviagtion
  Settings: undefined
}

export type TRootStackParams = {
  Main: TMainNavigation
  Auth: TAuthNavigation
}
