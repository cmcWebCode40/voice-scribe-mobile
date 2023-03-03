import { colors } from './colors'

export const theme = {
  colors: {
    // Set "light" as default color theme
    ...colors.light,
  },
  fonts: {
    NunitoSansBold: 'NunitoSansBold',
    NunitoSansSemiBold: 'NunitoSansSemiBold',
    NunitoSans: 'NunitoSans',
  },
  spacing: {
    xs: 4,
    s: 8,
    sm: 12,
    m: 16,
    l: 24,
    xl: 36,
    xxl: 40,
    xxxl: 48,
    xxxxl: 64,
  },
  fontSize: {
    s: 12,
    m: 14,
    l: 16,
    xl: 18,
    xxl: 24,
    xxxl: 36,
  },
  radius: {
    none: 0,
    sm: 2,
    rounded: 4,
    md: 6,
    lg: 8,
    xl: 12,
    xxl: 16,
    xxxl: 24,
    full: 9999,
  },
}

export type Theme = typeof theme
