import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import { Pressable, PressableProps, StyleSheet, TextStyle } from 'react-native'

import { Typographgy } from './Typographgy'

type ButtonVariant = 'text' | 'contained' | 'outlined'
type ButtonSize = 'small' | 'medium' | 'large'

type ButtonBaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  TypographgyStyles?: TextStyle
} & PressableProps

export const ButtonBase: React.FunctionComponent<ButtonBaseProps> = ({
  style,
  size = 'medium',
  variant,
  children,
  disabled,
  TypographgyStyles,
  ...otherProps
}) => {
  const baseStyle = useThemedStyles(styles)
  const textStyle = useThemedStyles(textStyles)

  const buttonSize =
    size === 'small'
      ? baseStyle.small
      : size === 'medium'
      ? baseStyle.medium
      : size === 'large'
      ? baseStyle.large
      : baseStyle.small

  const buttonVariant =
    variant === 'text'
      ? baseStyle.text
      : variant === 'contained'
      ? baseStyle.contained
      : variant === 'outlined'
      ? baseStyle.outlined
      : baseStyle.text

  const disabledStyles = disabled ? baseStyle.disabled : {}

  const buttonStyles = {
    ...buttonSize,
    ...buttonVariant,
    ...disabledStyles,
    style,
  }

  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        baseStyle.container,
        {
          ...buttonStyles,
          opacity: pressed ? 0.8 : 1,
        },
      ]}
      {...otherProps}>
      <Typographgy
        variant='p2'
        style={[
          textStyle.content,
          TypographgyStyles,
          variant === 'contained' ? textStyle.light : textStyle.dark,
        ]}>
        {children}
      </Typographgy>
    </Pressable>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
      borderRadius: theme.radius.rounded,
    },
    content: {
      fontFamily: theme.fonts.NunitoSans,
      fontSize: theme.fontSize.m,
      fontWeight: '600',
      lineHeight: 21,
    },
    contained: {
      backgroundColor: theme.colors.primary,
    },
    outlined: {
      borderWidth: 1,
      borderColor: theme.colors.text,
      backgroundColor: 'transparent',
    },
    disabled: {
      backgroundColor: theme.colors.textSecondary,
    },
    text: {
      backgroundColor: 'transparent',
    },
    large: {
      paddingVertical: 16,
      paddingHorizontal: 20,
    },
    small: {
      paddingVertical: 8,
      paddingHorizontal: 15,
    },
    medium: {
      paddingVertical: 12,
      paddingHorizontal: 18,
    },
  })
}

const textStyles = (theme: Theme) => {
  return StyleSheet.create({
    content: {
      fontFamily: theme.fonts.NunitoSansSemiBold,
      fontSize: theme.fontSize.l,
      fontWeight: '600',
      lineHeight: 24,
    },
    light: {
      color: theme.colors.white,
    },
    dark: {
      color: theme.colors.black,
    },
  })
}
