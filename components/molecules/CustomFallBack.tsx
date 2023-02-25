import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import { FallbackComponentProps } from 'react-native-error-boundary'

import CrashedErrorImage from 'assets/images/app_crashed_error.svg'
import { Button, Typographgy } from 'components/atoms'

export const CustomFallBack: React.FunctionComponent<
  FallbackComponentProps
> = ({ resetError }) => {
  const style = useThemedStyles(styles)
  const { t: translation } = useTranslation()

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <CrashedErrorImage width={150} height={150} />
      </View>
      <View style={style.typographyContainer}>
        <Typographgy variant='h2'>
          {translation('CustomFallBack.title')}
        </Typographgy>
        <Typographgy variant='p1'>
          {translation('CustomFallBack.message')}
        </Typographgy>
      </View>
      <View style={style.buttonContainer}>
        <Button variant='contained' onPress={resetError}>
          {translation('CustomFallBack.buttonLabel')}
        </Button>
      </View>
    </View>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      marginBottom: 28,
    },
    buttonContainer: {
      width: '100%',
      paddingHorizontal: 24,
    },
    typographyContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
    },
  })
}
