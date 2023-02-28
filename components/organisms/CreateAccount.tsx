import { Formik } from 'formik'
import { useAuth, useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { AuthenticationMode, EAuthenticationMode } from 'libs/types'
import { signUpSchema } from 'libs/utils'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, StyleSheet, TextInput, View } from 'react-native'

import { Button, Typographgy } from 'components/atoms'
import {
  AuthenticationFormWrapper,
  LoaderWithOverlay,
} from 'components/molecules'

type CreateAccount = {
  onClose: () => void
  handleAuthMode: (arg: AuthenticationMode) => void
}
const formInitialValues = {
  email: '',
  fullName: '',
  password: '',
  confirmPassword: '',
}
export const CreateAccount: React.FunctionComponent<CreateAccount> = ({
  handleAuthMode,
}) => {
  const style = useThemedStyles(styles)
  const { t: translation } = useTranslation()
  const { signUp, isProcessing, authError } = useAuth()

  const handleCreateAccount = useCallback(
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
    },
    [authError, signUp]
  )

  const formTitle = translation('CreateAccount.formTitle')
  const emailPlaceHolder = translation('CreateAccount.emailPlaceHolder')
  const passwordPlaceHolder = translation('CreateAccount.passwordPlaceHolder')
  const confirmPasswordPlaceHolder = translation(
    'CreateAccount.confirmPasswordPlaceHolder'
  )
  const buttonLabel = translation('CreateAccount.buttonLabel')
  const formFooterLabel = translation('CreateAccount.formFooterLabel')
  const DontHaveAccountMessage = translation(
    'CreateAccount.dontHaveAccountMessage'
  )

  return (
    <AuthenticationFormWrapper title={formTitle}>
      <View>
        <LoaderWithOverlay isLoading={isProcessing} />
        <Formik
          initialValues={formInitialValues}
          onSubmit={handleCreateAccount}
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
                    handleAuthMode(EAuthenticationMode.LOGIN)
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
