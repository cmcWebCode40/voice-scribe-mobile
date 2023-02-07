import { LocalizationContext } from 'libs/contexts'
import { useContext } from 'react'

export const useLocalization = () => {
  return useContext(LocalizationContext)
}
