import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { WORD_READER } from 'libs/constants'
import { MainNavigationScreens, ReaderFileInformation } from 'libs/types'
import React, { useCallback } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { ReaderFileItem } from 'components/molecules'

type ReaderFilesProps = {
  files: ReaderFileInformation[] | null
}
export const ReaderFiles: React.FunctionComponent<ReaderFilesProps> = ({
  files,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainNavigationScreens>>()

  const navigateToWordReaderScreen = useCallback(
    (itemId: string | undefined) => {
      if (itemId) {
        navigation.navigate(WORD_READER, {
          id: itemId,
        })
      }
    },
    [navigation]
  )
  const Item = ({
    completed,
    date,
    duration,
    title,
    id: itemId,
  }: Omit<
    ReaderFileInformation,
    'words' | 'userId' | 'created_at' | 'updated_at'
  >) => (
    <ReaderFileItem
      completed={completed}
      date={date}
      duration={duration}
      title={title}
      itemId={itemId}
      style={styles.fileItem}
      onPress={navigateToWordReaderScreen}
    />
  )

  if (files && files.length < 0) {
    return null
  }

  return (
    <View>
      <FlatList
        data={files}
        renderItem={({ item }) => <Item {...item} />}
        //TODO: Fix this ts issue
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
