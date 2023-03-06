import { Formik } from 'formik'
import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { FormValues } from 'libs/types'
import { signUpSchema } from 'libs/utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, TextInput, View } from 'react-native'

import { Button, Typographgy } from 'components/atoms'

const formInitialValues = {
  email: '',
  fullName: '',
  password: '',
  confirmPassword: '',
}

type SignUpFormProps = {
  onSubmit: (values: FormValues) => Promise<void>
}

export const SignUpForm: React.FunctionComponent<SignUpFormProps> = ({
  onSubmit,
}) => {
  const style = useThemedStyles(styles)
  const { t: translation } = useTranslation()

  const handleSignUp = (values: FormValues) => {
    onSubmit(values)
  }

  const emailPlaceHolder = translation('SignUpForm.emailPlaceHolder')
  const passwordPlaceHolder = translation('SignUpForm.passwordPlaceHolder')
  const confirmPasswordPlaceHolder = translation(
    'SignUpForm.confirmPasswordPlaceHolder'
  )
  const buttonLabel = translation('SignUpForm.buttonLabel')

  return (
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
