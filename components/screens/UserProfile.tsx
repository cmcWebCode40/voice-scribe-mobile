import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SETTINGS } from 'libs/constants'
import { useAuth } from 'libs/hooks'
import { MainNavigationScreens } from 'libs/types'
import React, { useCallback } from 'react'

import { Icon } from 'components/atoms'
import {
  AchievedGoals,
  NavigationHeader,
  ProfileInformation,
} from 'components/molecules'
import { AppLayoutView, AppSafeAreaView } from 'components/templates'

export const UserProfile: React.FunctionComponent = () => {
  const { user } = useAuth()
  const navigation =
    useNavigation<NativeStackNavigationProp<MainNavigationScreens>>()

  const handleNavigation = useCallback(() => {
    navigation.navigate(SETTINGS)
  }, [navigation])

  return (
    <AppSafeAreaView>
      <NavigationHeader
        rightIcon={<Icon name='setting' onPress={handleNavigation} />}
      />
      <AppLayoutView>
        <ProfileInformation profile={{ email: user?.email }} />
        <AchievedGoals />
      </AppLayoutView>
    </AppSafeAreaView>
  )
}
