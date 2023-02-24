import { AuthenticationContext } from 'libs/contexts'
import { useContext } from 'react'

export const useAuth = () => {
  return useContext(AuthenticationContext)
}
