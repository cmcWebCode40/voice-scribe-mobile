import { useAuth } from 'libs/hooks'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, StyleSheet, View } from 'react-native'

import { Icon } from 'components/atoms'
import { LoaderWithOverlay, ProfileSettingsCard } from 'components/molecules'

export const SettingsAccountSection: React.FunctionComponent = () => {
  const { t: translation } = useTranslation()
  const { deleteAccount, authError, session, logout, isProcessing } = useAuth()

  const handleLogout = useCallback(async () => {
    await logout()
    if (authError) {
      Alert.alert('Login Error', authError.message)
      return
    }
  }, [authError, logout])

  const askForUserConsent = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account ?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK', onPress: handleDeleteAccount },
      ]
    )
  }

  const handleDeleteAccount = useCallback(async () => {
    if (session?.user.id) {
      deleteAccount(session?.user.id)
      if (authError) {
        Alert.alert('Login Error', authError.message)
        return
      }
    }
  }, [authError, deleteAccount, session?.user.id])

  const logoutTitle = translation('SettingsAccountSection.logoutTitle')
  const deleteAccountTitle = translation(
    'SettingsAccountSection.deleteAccountTitle'
  )

  return (
    <View>
      <LoaderWithOverlay isLoading={isProcessing} />
      <View style={styles.cardContainer}>
        <ProfileSettingsCard
          title={logoutTitle}
          icon={<Icon name='logout' />}
          onPress={() => handleLogout()}
        />
      </View>
      <View style={styles.cardContainer}>
        <ProfileSettingsCard
          onPress={askForUserConsent}
          title={deleteAccountTitle}
          icon={<Icon name='delete' />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 8,
  },
})
