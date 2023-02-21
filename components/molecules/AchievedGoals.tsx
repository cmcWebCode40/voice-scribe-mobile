import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'

import { Typographgy } from 'components/atoms'

export const AchievedGoals: React.FunctionComponent = () => {
  const style = useThemedStyles(styles)
  const { t: translate } = useTranslation()

  return (
    <View style={style.achievedGoalsContainer}>
      <Typographgy variant='h2'>
        {translate('Profile.achievedGoalsHeading')}
      </Typographgy>
      <Typographgy variant='p1' style={style.achievedGoalCaption}>
        {translate('Profile.achievedGoalCaption')}
      </Typographgy>
    </View>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    achievedGoalsContainer: {
      marginTop: 48,
    },
    achievedGoalCaption: {
      fontFamily: theme.fonts.NunitoSansBold,
    },
  })
}
