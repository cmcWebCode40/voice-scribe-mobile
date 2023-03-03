import { useThemedStyles } from 'libs/hooks'
import { AddWordType } from 'libs/types'
import React, { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Icon } from 'components/atoms'
import { AddWordsItem } from 'components/molecules'

import { AddWordsCollectionType } from './AddWordsCollectionType'

export const AddWords: React.FunctionComponent = () => {
  const [isSelected, setIsSelected] = useState(false)
  const [addWordType, setAddWordType] = useState<AddWordType | undefined>(
    undefined
  )
  const handleSelectItem = useCallback((type: AddWordType) => {
    setIsSelected(true)
    setAddWordType(type)
  }, [])

  const baseStyle = useThemedStyles(styles)

  return (
    <View style={baseStyle.container}>
      {isSelected ? (
        <AddWordsCollectionType type={addWordType} />
      ) : (
        <View>
          <AddWordsItem
            onPress={() => {
              handleSelectItem('paste-text')
            }}
            icon={<Icon name='reader-outline' />}
            title='Add Text'
            subTitle='Copy and paste text'
          />
        </View>
      )}
    </View>
  )
}

const styles = () => {
  return StyleSheet.create({
    container: {
      padding: 16,
    },
  })
}
