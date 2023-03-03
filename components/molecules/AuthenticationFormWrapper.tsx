import { useThemedStyles } from 'libs/hooks'
import React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { Typographgy } from 'components/atoms'

import { NavigationHeader } from './NavigationHeader'

type AuthenticationFormWrapperProps = {
  title?: string
  children: React.ReactNode
}

export const AuthenticationFormWrapper: React.FunctionComponent<
  AuthenticationFormWrapperProps
> = ({ children, title }) => {
  const style = useThemedStyles(styles)
  return (
    <SafeAreaView>
      <NavigationHeader IconType='back' />
      <View style={style.container}>
        <View style={style.titleContainer}>
          <Typographgy variant='h2'>{title}</Typographgy>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

const styles = () => {
  return StyleSheet.create({
    container: {
      padding: 16,
    },
    titleContainer: {
      marginVertical: 16,
    },
  })
}
