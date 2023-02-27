import { useThemedStyles } from 'libs/hooks'
import { mockedReadingFiles } from 'libs/mock'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import { Icon, IconButton } from 'components/atoms'
import { ReaderFiles } from 'components/organisms'

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

const styles = () => {
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
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
  })
}
