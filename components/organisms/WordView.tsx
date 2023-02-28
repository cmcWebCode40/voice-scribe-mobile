import { useThemedStyles } from 'libs/hooks'
import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

import { Typographgy } from 'components/atoms'

type WordViewProps = {
  words: string
} & ViewProps

export const WordView: React.FunctionComponent<WordViewProps> = ({
  words,
  style,
  ...otherProps
}) => {
  const baseStyle = useThemedStyles(styles)
  return (
    <View style={[baseStyle.container, style]} {...otherProps}>
      <Typographgy variant='p1'>{words}</Typographgy>
    </View>
  )
}

const styles = () => {
  return StyleSheet.create({
    container: {},
  })
}
