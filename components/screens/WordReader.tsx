import { useThemedStyles } from 'libs/hooks'
import { mockedWords } from 'libs/mock'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import { Typographgy } from 'components/atoms'
import { NavigationHeader, WordPlayerControl } from 'components/molecules'
import { WordView } from 'components/organisms'

export const WordReader: React.FunctionComponent = () => {
  const style = useThemedStyles(styles)
  return (
    <SafeAreaView style={style.container}>
      <NavigationHeader IconType='back' />
      <View style={style.content}>
        <View style={style.titleContainer}>
          <Typographgy style={style.title} variant='h2'>
            Title
          </Typographgy>
          <Typographgy style={style.title} variant='p1'>
            10 words
          </Typographgy>
        </View>
        <View>
          <WordView words={mockedWords} />
        </View>
        <View>
          <WordPlayerControl words={mockedWords} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    titleContainer: {},
    title: {},
    content: {
      flex: 1,
      padding: 16,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  })
}
