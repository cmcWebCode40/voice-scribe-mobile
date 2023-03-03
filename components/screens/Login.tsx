import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Formik } from 'formik'
import { DASHBOARD, FORGOT_PASSWORD, SIGN_UP } from 'libs/constants'
import { useAuth, useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { AuthNavigationScreens, MainNavigationScreens } from 'libs/types'
import { signInSchema } from 'libs/utils'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, StyleSheet, TextInput, View } from 'react-native'

import { Button, Typographgy } from 'components/atoms'
import {
  AuthenticationFormWrapper,
  LoaderWithOverlay,
} from 'components/molecules'

const formInitialValues = {
  email: '',
  password: '',
}

export const Login: React.FunctionComponent = () => {
  const style = useThemedStyles(styles)
  const { t: translation } = useTranslation()
  const { login, authError, isProcessing, session } = useAuth()

  const navigation =
    useNavigation<NativeStackNavigationProp<MainNavigationScreens>>()
  const autNavigation =
    useNavigation<NativeStackNavigationProp<AuthNavigationScreens>>()

  const handleAuthNavigation = useCallback(
    (type: 'ForgotPassword' | 'SignUp') => {
      autNavigation.navigate(type)
    },
    [autNavigation]
  )
  const handleLogin = useCallback(
    async (values: typeof formInitialValues) => {
      await login(values.email, values.password)
      if (authError) {
        Alert.alert('Login Error', authError.message)
        return
      }
      if (session) {
        navigation.navigate(DASHBOARD, {
          MyFiles: undefined,
        })
      }
    },
    [authError, login, navigation, session]
  )

  const formTitle = translation('Login.formTitle')
  const emailPlaceHolder = translation('Login.emailPlaceHolder')
  const passwordPlaceHolder = translation('Login.passwordPlaceHolder')
  const buttonLabel = translation('Login.buttonLabel')
  const forgotPasswordLabel = translation('Login.forgotPasswordLabel')
  const formFooterLabel = translation('Login.formFooterLabel')

  return (
    <AuthenticationFormWrapper title={formTitle}>
      <View>
        <LoaderWithOverlay isLoading={isProcessing} />
        <Formik
          initialValues={formInitialValues}
          onSubmit={handleLogin}
          validationSchema={signInSchema}>
          {({
            values,
            isValid,
            errors,
            touched,
            handleChange,
            setFieldTouched,
            handleSubmit,
          }) => (
            <View>
              <View style={style.inputContainer}>
                <TextInput
                  value={values.email}
                  style={style.input}
                  autoCapitalize='none'
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  placeholder={emailPlaceHolder}
                />
                {errors.email && touched.email && (
                  <Typographgy style={style.errorMessage} variant='caption'>
                    {errors.email}
                  </Typographgy>
                )}
              </View>

              <View style={style.inputContainer}>
                <TextInput
                  value={values.password}
                  style={style.input}
                  secureTextEntry={true}
                  autoCapitalize='none'
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  placeholder={passwordPlaceHolder}
                />
                {errors.password && touched.password && (
                  <Typographgy style={style.errorMessage} variant='caption'>
                    {errors.password}
                  </Typographgy>
                )}
              </View>
              <View>
                <Button
                  disabled={!isValid}
                  variant='contained'
                  onPress={() => {
                    handleSubmit()
                  }}>
                  {buttonLabel}
                </Button>
              </View>
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
          )}
        </Formik>
      </View>
    </AuthenticationFormWrapper>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    inputContainer: {
      marginBottom: 16,
    },
    errorMessage: {
      marginTop: 4,
      color: theme.colors.error,
      fontFamily: theme.fonts.NunitoSansSemiBold,
    },
    input: {
      borderWidth: 1,
      padding: 16,
      borderColor: theme.colors.primary,
      borderRadius: theme.radius.rounded,
    },
    footerButton: {
      textDecorationLine: 'underline',
      color: theme.colors.gray100,
    },
  })
}
