import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SETTINGS } from 'libs/constants'
import { useAuth } from 'libs/hooks'
import { MainNavigationScreens } from 'libs/types'
import React, { useCallback } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import { Icon } from 'components/atoms'
import {
  AchievedGoals,
  NavigationHeader,
  ProfileInformation,
} from 'components/molecules'

export const UserProfile: React.FunctionComponent = () => {
  const { user } = useAuth()
  const navigation =
    useNavigation<NativeStackNavigationProp<MainNavigationScreens>>()

  const handleNavigation = useCallback(() => {
    navigation.navigate(SETTINGS)
  }, [navigation])

  return (
    <SafeAreaView>
      <NavigationHeader
        rightIcon={<Icon name='setting' onPress={handleNavigation} />}
      />
      <View style={styles.content}>
        <ProfileInformation profile={{ email: user?.email }} />
        <AchievedGoals />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
})
