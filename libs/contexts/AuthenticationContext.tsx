/* eslint-disable @typescript-eslint/no-empty-function */
import { Session, User } from '@supabase/supabase-js'
import { supabase, supabaseAdmin } from 'libs/services'
import { Profile } from 'libs/types'
import React, { useCallback, useEffect, useState } from 'react'

type AuthenticationContextProps = {
  profile: Profile | undefined
  user: User | undefined
  session: Session | null
  login: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  isProcessing: boolean
  authError: Error | null
  updatePassword: (email: string) => Promise<void>
  deleteAccount: (userId: string) => void
}

export const AuthenticationContext =
  React.createContext<AuthenticationContextProps>({
    profile: undefined,
    user: undefined,
    authError: null,
    isProcessing: false,
    session: null,
    login: async () => {},
    signUp: async () => {},
    updatePassword: async () => {},
    deleteAccount: async () => {},
  })

type AuthenticationProviderProps = {
  children: React.ReactNode
}

export const AuthenticationContextProvider: React.FunctionComponent<
  AuthenticationProviderProps
> = ({ children }) => {
  const [profile] = useState<Profile | undefined>(undefined)
  const [user, setUser] = useState<User | undefined>(undefined)
  const [session, setSession] = useState<Session | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [authError, setAuthError] = useState<Error | null>(null)

  useEffect(() => {
    initUserSession()
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_, authSession) => {
        setSession(authSession)
        setUser(authSession?.user)
      }
    )
    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    setIsProcessing(true)
    try {
      await supabase.auth.signInWithPassword({
        email,
        password,
      })
    } catch (error) {
      setAuthError(error)
    } finally {
      setIsProcessing(false)
    }
  }, [])

  const signUp = useCallback(async (email: string, password: string) => {
    setIsProcessing(true)
    try {
      await supabase.auth.signUp({
        email,
        password,
      })
    } catch (error) {
      setAuthError(error)
    } finally {
      setIsProcessing(false)
    }
  }, [])

  const updatePassword = useCallback(async (email: string) => {
    setIsProcessing(true)
    try {
      await supabase.auth.resetPasswordForEmail(email)
    } catch (error) {
      setAuthError(error)
    } finally {
      setIsProcessing(false)
    }
  }, [])

  const deleteAccount = useCallback(async (userId: string) => {
    setIsProcessing(true)
    try {
      await supabaseAdmin.auth.admin.deleteUser(userId)
    } catch (error) {
      setAuthError(error)
    } finally {
      setIsProcessing(false)
    }
  }, [])

  const initUserSession = async () => {
    setIsProcessing(true)
    try {
      const { data, error } = await supabase.auth.getSession()
      if (!error) {
        setSession(data.session)
        setUser(data.session?.user)
      }
    } catch (error) {
      setAuthError(error)
    } finally {
      setIsProcessing(false)
    }
  }

  const values = {
    profile,
    session,
    login,
    user,
    signUp,
    authError,
    isProcessing,
    updatePassword,
    deleteAccount,
  }

  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  )
}
