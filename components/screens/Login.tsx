import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { DASHBOARD, FORGOT_PASSWORD, SIGN_UP } from 'libs/constants'
import { useAuth, useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { AuthNavigationScreens, MainNavigationScreens } from 'libs/types'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, StyleSheet, View } from 'react-native'

import { Button } from 'components/atoms'
import { LoaderWithOverlay } from 'components/molecules'
import { LoginForm } from 'components/organisms'
import { AuthenticationFormWrapper } from 'components/templates'

const formInitialValues = {
  email: '',
  password: '',
}
type NavigationRoutes = MainNavigationScreens & AuthNavigationScreens
export const Login: React.FunctionComponent = () => {
  const style = useThemedStyles(styles)
  const { t: translation } = useTranslation()
  const { login, authError, isProcessing, session , setIsProcessing } = useAuth()

  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationRoutes>>()

  const handleAuthNavigation = useCallback(
    (type: 'ForgotPassword' | 'SignUp') => {
      navigation.navigate(type)
    },
    [navigation]
  )
  const handleLogin = useCallback(
    async (values: typeof formInitialValues) => {
      await login(values.email, values.password)
      if (authError) {
        Alert.alert('Login Error', authError.message)
        return
      }
      if (session) {
        setIsProcessing(false)
        navigation.navigate(DASHBOARD, {
          MyFiles: undefined,
        })
      }
    },
    [authError, login, navigation, session]
  )

  const formTitle = translation('Login.formTitle')
  const forgotPasswordLabel = translation('Login.forgotPasswordLabel')
  const formFooterLabel = translation('Login.formFooterLabel')

  return (
    <AuthenticationFormWrapper title={formTitle}>
      <View>
        <LoaderWithOverlay isLoading={isProcessing} />
        <LoginForm onSubmit={handleLogin} />
        <View>
          <Button
            onPress={() => {
              handleAuthNavigation(SIGN_UP)
            }}
            TypographgyStyles={style.footerButton}
            variant='text'>
            {formFooterLabel}
          </Button>
          <Button
            onPress={() => {
              handleAuthNavigation(FORGOT_PASSWORD)
            }}
            TypographgyStyles={style.footerButton}
            variant='text'>
            {forgotPasswordLabel}
          </Button>
        </View>
      </View>
    </AuthenticationFormWrapper>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    footerButton: {
      textDecorationLine: 'underline',
      color: theme.colors.gray100,
    },
  })
}
