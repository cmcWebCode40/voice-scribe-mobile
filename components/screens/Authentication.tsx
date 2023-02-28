import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { AuthenticationMode, EAuthenticationMode } from 'libs/types'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import AppLogo from 'assets/images/authentication_screen_image.svg'
import { Button, Typographgy } from 'components/atoms'
import { Modal } from 'components/molecules'
import { CreateAccount, Login } from 'components/organisms'
import { ForgotPassword } from 'components/organisms/ForgotPassword'

export const Authentication: React.FunctionComponent = () => {
  const style = useThemedStyles(styles)
  const [openModal, setOpenModal] = useState(false)
  const [authenticatonMode, setAuthenticatonMode] = useState<
    AuthenticationMode | undefined
  >(undefined)
  const { t: translation } = useTranslation()

  const handleOpenModal = useCallback(() => {
    setOpenModal(true)
  }, [])

  const handleClosModal = useCallback(() => {
    setOpenModal(false)
  }, [])

  const handleAuthenticationMode = useCallback(
    (mode: AuthenticationMode) => {
      setAuthenticatonMode(mode)
      handleOpenModal()
    },
    [handleOpenModal]
  )

  return (
    <SafeAreaView style={style.container}>
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
            handleAuthenticationMode(EAuthenticationMode.SIGNUP)
          }}
        >
          {translation('Authentication.CreateAccountButtonLabel')}
        </Button>
        <Button
          onPress={() => {
            handleAuthenticationMode(EAuthenticationMode.LOGIN)
          }}
        >
          {translation('Authentication.LoginButtonLabel')}
        </Button>
      </View>
      <Modal visible={openModal} onClose={handleClosModal}>
        {authenticatonMode === EAuthenticationMode.LOGIN && (
          <Login
            onClose={handleClosModal}
            handleAuthMode={handleAuthenticationMode}
          />
        )}
        {authenticatonMode === EAuthenticationMode.SIGNUP && (
          <CreateAccount
            onClose={handleClosModal}
            handleAuthMode={handleAuthenticationMode}
          />
        )}
        {authenticatonMode === EAuthenticationMode.PASSWORD_RESET && (
          <ForgotPassword />
        )}
      </Modal>
    </SafeAreaView>
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
