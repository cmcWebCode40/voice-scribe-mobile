import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'

export const UserProfile: React.FunctionComponent = () => {
  const { t: translate } = useTranslation()
  const style = useThemedStyles(styles)
  return (
    <View style={style.container}>
      <Text style={style.subHeading}>{translate('Dashboard.subHeading')}</Text>
      <Text style={style.heading}>{translate('Dashboard.title')}</Text>
      <Text style={style.description}>
        {translate('Dashboard.description')}
      </Text>
    </View>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    subHeading: {
      color: theme.colors.primary,
      fontSize: theme.fontSize.l,
      fontFamily: theme.fonts.NunitoSansBold,
    },
    heading: {
      color: theme.colors.text,
      fontSize: theme.fontSize.xl,
      fontFamily: theme.fonts.NunitoSansBold,
    },
    description: {
      color: theme.colors.textSecondary,
      fontSize: theme.fontSize.l,
      fontFamily: theme.fonts.NunitoSans,
    },
  })
}
