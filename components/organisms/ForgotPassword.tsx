import { Formik } from 'formik'
import { useAuth, useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { resetPasswordSchema } from 'libs/utils'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, TextInput, View } from 'react-native'

import { Button, Typographgy } from 'components/atoms'
import { AuthenticationFormWrapper } from 'components/molecules'

const formInitialValues = {
  email: '',
}

export const ForgotPassword: React.FunctionComponent = () => {
  const { updatePassword } = useAuth()
  const style = useThemedStyles(styles)
  const { t: translation } = useTranslation()

  const handleResetPassword = useCallback(
    async (values: typeof formInitialValues) => {
      await updatePassword(values.email)
    },
    [updatePassword]
  )

  const formTitle = translation('ForgotPassword.formTitle')
  const emailPlaceHolder = translation('ForgotPassword.emailPlaceHolder')
  const buttonLabel = translation('ForgotPassword.buttonLabel')

  return (
    <AuthenticationFormWrapper title={formTitle}>
      <Formik
        initialValues={formInitialValues}
        onSubmit={handleResetPassword}
        validationSchema={resetPasswordSchema}>
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
          </View>
        )}
      </Formik>
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
  })
}
