import { ReaderFileInformation } from 'libs/types'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { ReaderFileItem } from 'components/molecules'

type ReaderFilesProps = {
  files: ReaderFileInformation[]
}
export const ReaderFiles: React.FunctionComponent<ReaderFilesProps> = ({
  files,
}) => {
  const Item = (information: ReaderFileInformation) => (
    <ReaderFileItem style={styles.fileItem} fileInformation={information} />
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
