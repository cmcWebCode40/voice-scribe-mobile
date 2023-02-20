import React from 'react'

import { ButtonBase } from './ButtonBase'

type IconButtonProps = {
  icon: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<typeof ButtonBase>, 'children'>

export const IconButton: React.FunctionComponent<IconButtonProps> = ({
  icon,
  ...otherProps
}) => {
  return <ButtonBase {...otherProps}>{icon}</ButtonBase>
}
