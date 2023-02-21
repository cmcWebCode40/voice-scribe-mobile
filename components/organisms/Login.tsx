import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { AuthenticationMode } from 'libs/types'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { Button } from 'components/atoms'
import { AuthenticationFormWrapper } from 'components/molecules'

type CreateAccount = {
  onClose: () => void
  handleAuthMode: (arg: AuthenticationMode) => void
}
export const Login: React.FunctionComponent<CreateAccount> = ({
  handleAuthMode,
}) => {
  const style = useThemedStyles(styles)
  const { t: translation } = useTranslation()

  const formTitle = translation('Login.formTitle')
  const emailPlaceHolder = translation('Login.emailPlaceHolder')
  const passwordPlaceHolder = translation('Login.passwordPlaceHolder')
  const buttonLabel = translation('Login.buttonLabel')
  const formFooterLabel = translation('Login.formFooterLabel')

  return (
    <AuthenticationFormWrapper title={formTitle}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <TextInput style={style.input} placeholder={emailPlaceHolder} />
            <TextInput style={style.input} placeholder={passwordPlaceHolder} />
            <View>
              <Button variant='contained'>{buttonLabel}</Button>
            </View>
            <View>
              <Button
                onPress={() => {
                  handleAuthMode('sign-up')
                }}
                TypographgyStyles={style.footerButton}
                variant='text'>
                {formFooterLabel}
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </AuthenticationFormWrapper>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    input: {
      borderWidth: 1,
      padding: 16,
      marginBottom: 12,
      borderColor: theme.colors.primary,
      borderRadius: theme.radius.rounded,
    },
    footerButton: {
      textDecorationLine: 'underline',
      color: theme.colors.gray100,
    },
  })
}
