import { Formik } from 'formik'
import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { FormValues } from 'libs/types'
import { resetPasswordSchema } from 'libs/utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, TextInput, View } from 'react-native'

import { Button, Typographgy } from 'components/atoms'

const formInitialValues = {
  email: '',
}

type ResetPasswordFormInput = Omit<
  FormValues,
  'fullName' | 'confirmPassword' | 'password'
>
type ResetPasswordFormProps = {
  onSubmit: (values: ResetPasswordFormInput) => Promise<void>
}

export const ResetPasswordForm: React.FunctionComponent<
  ResetPasswordFormProps
> = ({ onSubmit }) => {
  const style = useThemedStyles(styles)
  const { t: translation } = useTranslation()

  const handleResetPassword = (inputFields: ResetPasswordFormInput) => {
    onSubmit(inputFields)
  }

  const emailPlaceHolder = translation('ForgotPassword.emailPlaceHolder')
  const buttonLabel = translation('ForgotPassword.buttonLabel')

  return (
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
