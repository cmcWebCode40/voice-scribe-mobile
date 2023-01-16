import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DASHBOARD, PROFILE } from 'libs/constants'
import React from 'react'
import { Home, UserProfile } from 'screens'

const Tab = createBottomTabNavigator()

export const Dashboard = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={PROFILE}
        component={UserProfile}
        //  configure tab icons
      />
      <Tab.Screen
        name={DASHBOARD}
        component={Home}
        //  configure tab icons
      />
    </Tab.Navigator>
  )
}
