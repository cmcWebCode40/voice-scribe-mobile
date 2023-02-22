import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'

import { Icon } from 'components/atoms'
import { ProfileSettingsCard } from 'components/molecules'

export const SettingAboutSection: React.FunctionComponent = () => {
  const { t: translation } = useTranslation()

  const shareTitle = translation('SettingAboutSection.shareTitle')
  const dropFeedBackTitle = translation('SettingAboutSection.dropFeedBackTitle')
  const dropFeedBackCaption = translation(
    'SettingAboutSection.dropFeedBackCaption'
  )
  return (
    <View>
      <View style={styles.cardContainer}>
        <ProfileSettingsCard
          title={shareTitle}
          icon={<Icon name='share-outline' />}
        />
      </View>
      <View style={styles.cardContainer}>
        <ProfileSettingsCard
          title={dropFeedBackTitle}
          caption={dropFeedBackCaption}
          icon={<Icon name='bulb-outline' />}
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
