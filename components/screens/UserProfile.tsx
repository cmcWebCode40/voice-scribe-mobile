import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const UserProfile: React.FunctionComponent = () => {
  const style = useThemedStyles(styles)
  return (
    <View style={style.container}>
      <Text style={style.subHeading}>Customization</Text>
      <Text style={style.heading}>Customizing Colors</Text>
      <Text style={style.description}>
        Tailwind includes an expertly-crafted default color palette
        out-of-the-box that is a great starting point if you don’t have your own
        specific branding in mind.
      </Text>
    </View>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    subHeading: {
      color: theme.colors.primary,
      fontSize: theme.fontSize.l,
      fontFamily: theme.fonts.NunitoSansBold,
    },
    heading: {
      color: theme.colors.text,
    },
    description: {
      color: theme.colors.textSecondary,
    },
  })
}
