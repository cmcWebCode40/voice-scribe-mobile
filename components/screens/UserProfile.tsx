import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'

import { Typographgy } from 'components/atoms'

export const UserProfile: React.FunctionComponent = () => {
  const { t: translate } = useTranslation()
  const style = useThemedStyles(styles)
  return (
    <View style={style.container}>
      <Typographgy style={style.subHeading} variant='h3'>
        {translate('Dashboard.subHeading')}
      </Typographgy>
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
    },
  })
}
