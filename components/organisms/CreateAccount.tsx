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

import { Button, Typographgy } from 'components/atoms'
import { AuthenticationFormWrapper } from 'components/molecules'

type CreateAccount = {
  onClose: () => void
  handleAuthMode: (arg: AuthenticationMode) => void
}
export const CreateAccount: React.FunctionComponent<CreateAccount> = ({
  handleAuthMode,
}) => {
  const style = useThemedStyles(styles)
  const { t: translation } = useTranslation()

  const formTitle = translation('CreateAccount.formTitle')
  const namePlaceHolder = translation('CreateAccount.namePlaceHolder')
  const emailPlaceHolder = translation('CreateAccount.emailPlaceHolder')
  const passwordPlaceHolder = translation('CreateAccount.passwordPlaceHolder')
  const confirmPasswordPlaceHolder = translation(
    'CreateAccount.confirmPasswordPlaceHolder'
  )
  const buttonLabel = translation('CreateAccount.buttonLabel')
  const formFooterLabel = translation('CreateAccount.formFooterLabel')
  const DontHaveAccountMessage = translation(
    'CreateAccount.DontHaveAccountMessage'
  )

  return (
    <AuthenticationFormWrapper title={formTitle}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <TextInput style={style.input} placeholder={namePlaceHolder} />
            <TextInput style={style.input} placeholder={emailPlaceHolder} />
            <TextInput style={style.input} placeholder={passwordPlaceHolder} />
            <TextInput
              style={style.input}
              placeholder={confirmPasswordPlaceHolder}
            />
            <View>
              <Button variant='contained'>{buttonLabel}</Button>
            </View>
            <View>
              <Button
                onPress={() => {
                  handleAuthMode('login')
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
    disclamierMessageContainer: {
      marginTop: 24,
    },
    disclamierMessage: {
      textAlign: 'center',
      fontStyle: 'italic',
    },
  })
}
