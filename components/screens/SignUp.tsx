import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Formik } from 'formik'
import { DASHBOARD, LOGIN } from 'libs/constants'
import { useAuth, useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { AuthNavigationScreens, MainNavigationScreens } from 'libs/types'
import { signUpSchema } from 'libs/utils'
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
  fullName: '',
  password: '',
  confirmPassword: '',
}
export const SignUp: React.FunctionComponent = () => {
  const style = useThemedStyles(styles)
  const { t: translation } = useTranslation()
  const { signUp, isProcessing, authError, session } = useAuth()

  const navigation =
    useNavigation<NativeStackNavigationProp<MainNavigationScreens>>()
  const autNavigation =
    useNavigation<NativeStackNavigationProp<AuthNavigationScreens>>()

  const handleNavigation = useCallback(
    (type: 'Login' | 'SignUp') => {
      autNavigation.navigate(type)
    },
    [autNavigation]
  )

  const handleSignUp = useCallback(
    async (values: typeof formInitialValues) => {
      await signUp(values.email, values.password, values.fullName)
      if (authError) {
        Alert.alert('Signup Error', authError.message)
        return
      }
      Alert.alert(
        'Sign up',
        'Confirmation email link has been sent to you please confirm your mail'
      )
      if (session?.access_token) {
        navigation.navigate(DASHBOARD, {
          MyFiles: undefined,
        })
      }
    },
    [authError, navigation, session?.access_token, signUp]
  )

  const formTitle = translation('SignUp.formTitle')
  const emailPlaceHolder = translation('SignUp.emailPlaceHolder')
  const passwordPlaceHolder = translation('SignUp.passwordPlaceHolder')
  const confirmPasswordPlaceHolder = translation(
    'SignUp.confirmPasswordPlaceHolder'
  )
  const buttonLabel = translation('SignUp.buttonLabel')
  const formFooterLabel = translation('SignUp.formFooterLabel')
  const DontHaveAccountMessage = translation('SignUp.dontHaveAccountMessage')

  return (
    <AuthenticationFormWrapper title={formTitle}>
      <View>
        <LoaderWithOverlay isLoading={isProcessing} />
        <Formik
          initialValues={formInitialValues}
          onSubmit={handleSignUp}
          validationSchema={signUpSchema}>
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
                  style={style.input}
                  value={values.email}
                  autoCapitalize={'none'}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  placeholder={emailPlaceHolder}
                />
                {errors.email && touched.fullName && (
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
                  autoCapitalize={'none'}
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
              <View style={style.inputContainer}>
                <TextInput
                  style={style.input}
                  secureTextEntry={true}
                  autoCapitalize={'none'}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={() => setFieldTouched('confirmPassword')}
                  placeholder={confirmPasswordPlaceHolder}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Typographgy style={style.errorMessage} variant='caption'>
                    {errors.confirmPassword}
                  </Typographgy>
                )}
              </View>
              <View>
                <Button
                  onPress={() => {
                    handleSubmit()
                  }}
                  variant='contained'
                  disabled={!isValid}>
                  {buttonLabel}
                </Button>
              </View>
              <View>
                <Button
                  onPress={() => {
                    handleNavigation(LOGIN)
                  }}
                  TypographgyStyles={style.footerButton}
                  variant='text'>
                  {DontHaveAccountMessage}
                </Button>
              </View>
              <View style={style.disclamierMessageContainer}>
                <Typographgy style={style.disclamierMessage} variant='caption'>
                  {formFooterLabel}
                </Typographgy>
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
    disclamierMessageContainer: {
      marginTop: 24,
    },
    disclamierMessage: {
      textAlign: 'center',
      fontStyle: 'italic',
    },
  })
}
