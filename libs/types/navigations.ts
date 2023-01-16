export type TAuthNavigation = {
  UserSignIn: undefined
  UserSignUp: undefined
}

export type TDashboardNaviagtion = {
  Dashboard: undefined
  Profile: undefined
}

export type TMainNavigation = {
  Dashboard: TDashboardNaviagtion
  Settings: undefined
}

export type TRootStackParams = {
  Main: TMainNavigation
  Auth: TAuthNavigation
}
