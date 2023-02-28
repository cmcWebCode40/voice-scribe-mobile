import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { WORD_READER } from 'libs/constants'
import { MainNavigationScreens, ReaderFileInformation } from 'libs/types'
import React, { useCallback } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { ReaderFileItem } from 'components/molecules'

type ReaderFilesProps = {
  files: ReaderFileInformation[]
}
export const ReaderFiles: React.FunctionComponent<ReaderFilesProps> = ({
  files,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainNavigationScreens>>()

  const navigateToWordReaderScreen = useCallback(() => {
    navigation.navigate(WORD_READER)
  }, [navigation])
  const Item = (information: ReaderFileInformation) => (
    <ReaderFileItem
      style={styles.fileItem}
      fileInformation={information}
      onPress={navigateToWordReaderScreen}
    />
  )

  if (files.length < 0) {
    return null
  }

  return (
    <View>
      <FlatList
        data={files}
        renderItem={({ item }) => <Item {...item} />}
        // keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fileItem: {
    marginVertical: 8,
  },
})
