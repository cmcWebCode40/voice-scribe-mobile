import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'

import { Icon } from 'components/atoms'
import { ProfileSettingsCard } from 'components/molecules'

export const SettingsAccountSection: React.FunctionComponent = () => {
  const { t: translation } = useTranslation()

  const logoutTitle = translation('SettingsAccountSection.logoutTitle')
  const deleteAccountTitle = translation(
    'SettingsAccountSection.deleteAccountTitle'
  )

  return (
    <View>
      <View style={styles.cardContainer}>
        <ProfileSettingsCard
          title={logoutTitle}
          icon={<Icon name='logout' />}
        />
      </View>
      <View style={styles.cardContainer}>
        <ProfileSettingsCard
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
