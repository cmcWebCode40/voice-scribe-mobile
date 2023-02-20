import React from 'react'

import { ButtonBase } from './ButtonBase'

type ButtonProps = React.ComponentPropsWithoutRef<typeof ButtonBase>

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return <ButtonBase {...props} />
}
