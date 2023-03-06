import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LOGIN, SIGN_UP } from 'libs/constants'
import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { AuthNavigationScreens } from 'libs/types'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'

import AppLogo from 'assets/images/authentication_screen_image.svg'
import { Button, Typographgy } from 'components/atoms'
import { AppSafeAreaView } from 'components/templates'

export const Authentication: React.FunctionComponent = () => {
  const style = useThemedStyles(styles)
  const { t: translation } = useTranslation()
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthNavigationScreens>>()

  const handleNavigation = useCallback(
    (type: 'Login' | 'SignUp') => {
      navigation.navigate(type)
    },
    [navigation]
  )

  return (
    <AppSafeAreaView style={style.container}>
      <View style={style.imageContainer}>
        <AppLogo width={150} height={150} />
      </View>
      <View style={style.typographyContainer}>
        <Typographgy variant='h2'>
          {translation('Authentication.title')}
        </Typographgy>
        <Typographgy variant='p1'>
          {translation('Authentication.message')}
        </Typographgy>
      </View>
      <View style={style.buttonContainer}>
        <Button
          variant='contained'
          onPress={() => {
            handleNavigation(SIGN_UP)
          }}>
          {translation('Authentication.CreateAccountButtonLabel')}
        </Button>
        <Button
          onPress={() => {
            handleNavigation(LOGIN)
          }}>
          {translation('Authentication.LoginButtonLabel')}
        </Button>
      </View>
    </AppSafeAreaView>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      marginBottom: 28,
    },

    buttonContainer: {
      width: '100%',
      paddingHorizontal: 24,
    },
    typographyContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
    },
  })
}
