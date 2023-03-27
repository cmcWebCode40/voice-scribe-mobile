import { useThemedStyles } from 'libs/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Typographgy } from 'components/atoms'
import { NavigationHeader } from 'components/molecules'
import { AppLayoutView, AppSafeAreaView } from 'components/templates'

export const Library: React.FunctionComponent = () => {
  const style = useThemedStyles(styles)

  return (
    <AppSafeAreaView>
      <NavigationHeader IconType='back' />
      <AppLayoutView>
        <View style={style.sectionContainer}>
          <Typographgy style={style.title} variant='h1'>
           Library
          </Typographgy>
        </View>
      </AppLayoutView>
    </AppSafeAreaView>
  )
}

const styles = () => {
  return StyleSheet.create({
    title: {
      marginBottom: 16,
    },
    sectionContainer: {
      marginVertical: 16,
    },
  })
}
