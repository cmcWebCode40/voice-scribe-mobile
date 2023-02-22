import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

type TypeShapeForHeading = 'h1' | 'h2' | 'h3' | 'h4'
type TypeShapeForParagraph = 'p1' | 'p2'
type TypeShapeForSubHeading = 'caption' | 'label'
type TypographgyProps = {
  variant: TypeShapeForHeading | TypeShapeForParagraph | TypeShapeForSubHeading
} & TextProps

export const Typographgy: React.FunctionComponent<TypographgyProps> = ({
  variant,
  style,
  ...otherProps
}) => {
  const BaseStyles = useThemedStyles(styles)
  return (
    <Text
      style={[BaseStyles.container, BaseStyles[variant], style]}
      {...otherProps}
    />
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      color: theme.colors.text,
    },
    h1: {
      fontSize: theme.fontSize.xxxl,
      fontFamily: theme.fonts.NunitoSansBold,
      fontWeight: '700',
      color: theme.colors.text,
    },
    h2: {
      fontSize: theme.fontSize.xxl,
      fontFamily: theme.fonts.NunitoSansBold,
      fontWeight: '900',
    },
    h3: {
      fontSize: theme.fontSize.l,
      fontFamily: theme.fonts.NunitoSansBold,
      fontWeight: '700',
    },
    h4: {
      fontSize: theme.fontSize.m,
      fontFamily: theme.fonts.NunitoSans,
      fontWeight: '600',
    },
    p1: {
      fontSize: theme.fontSize.l,
      color: theme.colors.textSecondary,
      fontFamily: theme.fonts.NunitoSans,
      fontWeight: '600',
    },
    p2: {
      fontSize: theme.fontSize.m,
      fontFamily: theme.fonts.NunitoSans,
      color: theme.colors.textSecondary,
    },
    caption: {
      fontSize: theme.fontSize.s,
      color: theme.colors.textSecondary,
      fontFamily: theme.fonts.NunitoSans,
      fontWeight: '600',
    },
    label: {
      fontSize: theme.fontSize.m,
      fontFamily: theme.fonts.NunitoSans,
    },
  })
}
