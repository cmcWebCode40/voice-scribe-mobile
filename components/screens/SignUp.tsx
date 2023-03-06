import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { DASHBOARD, LOGIN } from 'libs/constants'
import { useAuth, useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { AuthNavigationScreens, MainNavigationScreens } from 'libs/types'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, StyleSheet, View } from 'react-native'

import { Button, Typographgy } from 'components/atoms'
import { LoaderWithOverlay } from 'components/molecules'
import { SignUpForm } from 'components/organisms'
import { AuthenticationFormWrapper } from 'components/templates'

const formInitialValues = {
  email: '',
  fullName: '',
  password: '',
  confirmPassword: '',
}

type NavigationRoutes = MainNavigationScreens & AuthNavigationScreens
export const SignUp: React.FunctionComponent = () => {
  const style = useThemedStyles(styles)
  const { t: translation } = useTranslation()
  const { signUp, isProcessing, authError, session } = useAuth()

  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationRoutes>>()

  const handleNavigation = useCallback(
    (type: 'Login' | 'SignUp') => {
      navigation.navigate(type)
    },
    [navigation]
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
  const formFooterLabel = translation('SignUp.formFooterLabel')
  const DontHaveAccountMessage = translation('SignUp.dontHaveAccountMessage')

  return (
    <AuthenticationFormWrapper title={formTitle}>
      <View>
        <LoaderWithOverlay isLoading={isProcessing} />
        <SignUpForm onSubmit={handleSignUp} />
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
    </AuthenticationFormWrapper>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
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
