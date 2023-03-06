import { Formik } from 'formik'
import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { FormValues } from 'libs/types'
import { signInSchema } from 'libs/utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, TextInput, View } from 'react-native'

import { Button, Typographgy } from 'components/atoms'

const formInitialValues = {
  email: '',
  password: '',
}

type LoginFormInputs = Omit<FormValues, 'fullName' | 'confirmPassword'>
type LoginFormProps = {
  onSubmit: (values: LoginFormInputs) => Promise<void>
}
export const LoginForm: React.FunctionComponent<LoginFormProps> = ({
  onSubmit,
}) => {
  const style = useThemedStyles(styles)
  const { t: translation } = useTranslation()
  const handleLogin = (inputFields: LoginFormInputs) => {
    onSubmit(inputFields)
  }

  const emailPlaceHolder = translation('LoginForm.emailPlaceHolder')
  const passwordPlaceHolder = translation('LoginForm.passwordPlaceHolder')
  const buttonLabel = translation('LoginForm.buttonLabel')

  return (
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
