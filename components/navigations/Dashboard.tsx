import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DASHBOARD, LIBRARY, PROFILE } from 'libs/constants'
import { useTheme, useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import { StyleSheet } from 'react-native'

import { Icon } from 'components/atoms'
import { Home, UserProfile } from 'components/screens'

const Tab = createBottomTabNavigator()

const TAB_ICON_SIZE = 28
export const Dashboard = () => {
  const { theme } = useTheme()
  const { tabBarLabelStyle, tabBarStyle } = useThemedStyles(styles)
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle,
      }}>
      <Tab.Screen
        name={DASHBOARD}
        options={{
          tabBarLabelStyle,
          tabBarIcon: ({ focused }) => (
            <Icon
              name='addfile'
              size={TAB_ICON_SIZE}
              color={focused ? theme.colors.primary : theme.colors.black}
            />
          ),
          tabBarActiveTintColor: theme.colors.primary,
        }}
        component={Home}
      />
      <Tab.Screen
        name={LIBRARY}
        component={UserProfile}
        options={{
          tabBarLabelStyle,
          tabBarIcon: ({ focused }) => (
            <Icon
              name='reader-outline'
              size={TAB_ICON_SIZE}
              color={
                focused ? theme.colors.primary : theme.colors.textSecondary
              }
            />
          ),
          tabBarActiveTintColor: theme.colors.primary,
        }}
      />
      <Tab.Screen
        name={PROFILE}
        component={UserProfile}
        options={{
          tabBarLabelStyle,
          tabBarIcon: ({ focused }) => (
            <Icon
              name='user'
              size={TAB_ICON_SIZE}
              color={focused ? theme.colors.primary : theme.colors.black}
            />
          ),
          tabBarActiveTintColor: theme.colors.primary,
        }}
      />
    </Tab.Navigator>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    tabBarLabelStyle: {
      fontSize: theme.fontSize.m,
      fontFamily: theme.fonts.NunitoSansBold,
      fontWeight: 'bold',
    },
    tabBarStyle: {
      height: 100,
      padding: 10,
    },
  })
}
