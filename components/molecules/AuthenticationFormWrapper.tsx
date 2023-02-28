import { useThemedStyles } from 'libs/hooks'
import React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from 'react-native'

import { Typographgy } from 'components/atoms'

type AuthenticationFormWrapperProps = {
  title?: string
  children: React.ReactNode
} & ViewProps

export const AuthenticationFormWrapper: React.FunctionComponent<
  AuthenticationFormWrapperProps
> = ({ children, title, ...otherProps }) => {
  const style = useThemedStyles(styles)
  return (
    <View style={style.container} {...otherProps}>
      <View style={style.titleContainer}>
        <Typographgy variant='h2'>{title}</Typographgy>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
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
