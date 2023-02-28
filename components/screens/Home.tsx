import { useThemedStyles } from 'libs/hooks'
import { mockedReadingFiles } from 'libs/mock'
import { Theme } from 'libs/theme'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import { Icon, IconButton } from 'components/atoms'
import { ReaderFiles } from 'components/organisms'

import { generateBoxShadowStyle } from '../../styles'

export const Home: React.FunctionComponent = () => {
  const [files] = useState(mockedReadingFiles)
  const style = useThemedStyles(styles)
  return (
    <SafeAreaView style={style.container}>
      <View style={style.readFilesContainer}>
        <ReaderFiles files={files} />
      </View>
      <View style={style.addIcon}>
        <IconButton icon={<Icon name='add' />} variant='contained' />
      </View>
    </SafeAreaView>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    readFilesContainer: {
      padding: 16,
    },
    addIcon: {
      flex: 1,
      position: 'absolute',
      bottom: 24,
      right: 0,
      marginRight: 16,
      ...generateBoxShadowStyle({
        elevation: 7,
        shadowColorAndroid: theme.colors.black,
        shadowColorIos: theme.colors.black,
        xOffset: 0,
        yOffset: 3,
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      }),
    },
  })
}
