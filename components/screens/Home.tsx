import { useDatabse, useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React, { useCallback, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import { Icon, IconButton } from 'components/atoms'
import { LoaderIndicator } from 'components/molecules'
import { AddWordsModal, ReaderFiles } from 'components/organisms'

import { generateBoxShadowStyle } from '../../styles'

export const Home: React.FunctionComponent = () => {
  const [isOpened, setIsOpened] = useState(false)
  const style = useThemedStyles(styles)

  const { data, isLoading } = useDatabse()
  const handleClose = useCallback(() => {
    setIsOpened(false)
  }, [])

  const handleOpenModal = useCallback(() => {
    setIsOpened(true)
  }, [])

  return (
    <SafeAreaView style={style.container}>
      <View style={style.readFilesContainer}>
        {isLoading && (
          <View>
            <LoaderIndicator style={style.loaderIcon} />
          </View>
        )}
        {data && data.length && <ReaderFiles files={data} />}
      </View>
      <View style={style.addIcon}>
        <IconButton
          onPress={handleOpenModal}
          icon={<Icon name='add' />}
          variant='contained'
        />
      </View>
      <AddWordsModal isOpened={isOpened} onClose={handleClose} />
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
      flex: 1,
    },
    loaderIcon: {
      backgroundColor: 'none',
    },
    addIcon: {
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
