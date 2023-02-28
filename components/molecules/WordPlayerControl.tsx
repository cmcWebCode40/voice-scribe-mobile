import { useSpeech, useThemedStyles } from 'libs/hooks'
import { Theme, theme as Color } from 'libs/theme'
import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'

import { Icon } from 'components/atoms'

import { generateBoxShadowStyle } from '../../styles'

type WordPlayerControlProps = {
  words: string
}
const ICON_SIZE = 40
export const WordPlayerControl: React.FunctionComponent<
  WordPlayerControlProps
> = ({ words }) => {
  const style = useThemedStyles(styles)

  const { start, isSpeaking, stop } = useSpeech()

  const handleStartReading = useCallback(() => {
    start(words)
  }, [start, words])
  const handleStopReading = useCallback(() => {
    stop()
  }, [stop])

  return (
    <View style={style.container}>
      {isSpeaking ? (
        <Icon
          name='pausecircle'
          onPress={handleStopReading}
          size={ICON_SIZE}
          color={Color.colors.primary}
        />
      ) : (
        <Icon
          name='play'
          onPress={handleStartReading}
          size={ICON_SIZE}
          color={Color.colors.primary}
        />
      )}
    </View>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingVertical: 16,
      borderRadius: theme.radius.lg,
      backgroundColor: theme.colors.gray100,
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
