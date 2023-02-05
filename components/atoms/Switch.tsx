import React from 'react'
import { Switch as SwitchButton } from 'react-native'

type SwitchProps = {
  isEnabled: boolean
  onToggleSwitch: () => void
}
export const Switch: React.FunctionComponent<SwitchProps> = ({
  isEnabled,
  onToggleSwitch,
}) => {
  return (
    <SwitchButton
      // TODO: update colors when theme color have been decided
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor='#3e3e3e'
      onValueChange={onToggleSwitch}
      value={isEnabled}
    />
  )
}
