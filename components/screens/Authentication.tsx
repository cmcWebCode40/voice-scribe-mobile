import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import { AuthenticationMode } from 'libs/types'
import React, { useCallback, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import AppLogo from 'assets/images/authentication_screen_image.svg'
import { Button, Typographgy } from 'components/atoms'
import { Modal } from 'components/molecules'
import { CreateAccount, Login } from 'components/organisms'

export const Authentication: React.FunctionComponent = () => {
  const style = useThemedStyles(styles)
  const [openModal, setOpenModal] = useState(false)
  const [authenticatonMode, setAuthenticatonMode] = useState<
    AuthenticationMode | undefined
  >(undefined)

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
        <Typographgy variant='h1'>Login or Create Account</Typographgy>
        <Typographgy variant='p1'>to quickly get started</Typographgy>
      </View>
      <View style={style.buttonContainer}>
        <Button
          variant='contained'
          onPress={() => {
            handleAuthenticationMode('sign-up')
          }}>
          Create account
        </Button>
        <Button
          onPress={() => {
            handleAuthenticationMode('login')
          }}>
          Login
        </Button>
      </View>
      <Modal visible={openModal} onClose={handleClosModal}>
        {authenticatonMode === 'login' && (
          <Login
            onClose={handleClosModal}
            handleAuthMode={handleAuthenticationMode}
          />
        )}
        {authenticatonMode === 'sign-up' && (
          <CreateAccount
            onClose={handleClosModal}
            handleAuthMode={handleAuthenticationMode}
          />
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
