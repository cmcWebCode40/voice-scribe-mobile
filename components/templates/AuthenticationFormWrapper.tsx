import { useThemedStyles } from 'libs/hooks'
import React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { Typographgy } from 'components/atoms'
import { NavigationHeader } from 'components/molecules'

import { AppLayoutView } from './AppLayoutView'
import { AppSafeAreaView } from './AppSafeAreaView'

type AuthenticationFormWrapperProps = {
  title?: string
  children: React.ReactNode
}

export const AuthenticationFormWrapper: React.FunctionComponent<
  AuthenticationFormWrapperProps
> = ({ children, title }) => {
  const style = useThemedStyles(styles)
  return (
    <AppSafeAreaView>
      <NavigationHeader IconType='back' />
      <AppLayoutView>
        <View style={style.titleContainer}>
          <Typographgy variant='h2'>{title}</Typographgy>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </AppLayoutView>
    </AppSafeAreaView>
  )
}

const styles = () => {
  return StyleSheet.create({
    titleContainer: {
      marginVertical: 16,
    },
  })
}
