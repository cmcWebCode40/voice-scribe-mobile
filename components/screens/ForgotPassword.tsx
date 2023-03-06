import { useAuth } from 'libs/hooks'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ResetPasswordForm } from 'components/organisms'
import { AuthenticationFormWrapper } from 'components/templates'

const formInitialValues = {
  email: '',
}

export const ForgotPassword: React.FunctionComponent = () => {
  const { updatePassword } = useAuth()
  const { t: translation } = useTranslation()

  const handleResetPassword = useCallback(
    async (values: typeof formInitialValues) => {
      await updatePassword(values.email)
    },
    [updatePassword]
  )

  const formTitle = translation('ForgotPassword.formTitle')

  return (
    <AuthenticationFormWrapper title={formTitle}>
      <ResetPasswordForm onSubmit={handleResetPassword} />
    </AuthenticationFormWrapper>
  )
}
