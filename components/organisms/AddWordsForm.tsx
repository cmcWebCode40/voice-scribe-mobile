import { WORDS_DB_COLLECTION } from 'libs/constants'
import { useDatabse, useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, TextInput, View } from 'react-native'

import { Button, Typographgy } from 'components/atoms'

export const AddWordsForm: React.FunctionComponent = () => {
  const [title, setTitle] = useState('')
  const [words, setWords] = useState('')
  const style = useThemedStyles(styles)
  const { save, isLoading } = useDatabse()
  const { t: translation } = useTranslation()

  const handleAddWords = useCallback(async () => {
    await save(WORDS_DB_COLLECTION, { title, words })
  }, [save, title, words])

  return (
    <View>
      <View style={style.titleContainer}>
        <Typographgy variant='h2'>
          {translation('AddWordsForm.title')}
        </Typographgy>
      </View>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={style.inputContainer}>
        <TextInput
          editable
          multiline
          value={words}
          numberOfLines={10}
          onChangeText={(text) => setWords(text)}
          style={style.input}
        />
      </View>
      <View>
        <Button
          disabled={!!isLoading}
          onPress={handleAddWords}
          variant='contained'>
          Done
        </Button>
      </View>
    </View>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    inputContainer: {
      marginBottom: 16,
    },
    input: {
      borderWidth: 1,
      padding: 16,
      backgroundColor: theme.colors.gray100,
      borderColor: theme.colors.background,
      borderRadius: theme.radius.rounded,
    },
    titleContainer: {
      marginBottom: 16,
    },
  })
}
