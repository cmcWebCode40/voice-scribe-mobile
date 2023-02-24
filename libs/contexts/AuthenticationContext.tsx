/* eslint-disable @typescript-eslint/no-empty-function */
import { Session, User } from '@supabase/supabase-js'
import { supabase, supabaseAdmin } from 'libs/services'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

type AuthenticationContextProps = {
  user: User | undefined
  session: Session | null
  logout: () => Promise<void>
  login: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, fullName?: string) => Promise<void>
  isProcessing: boolean
  authError: Error | null
  updatePassword: (email: string) => Promise<void>
  deleteAccount: (userId: string) => void
}

export const AuthenticationContext =
  React.createContext<AuthenticationContextProps>({
    user: undefined,
    authError: null,
    isProcessing: false,
    session: null,
    logout: async () => {},
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
  const [user, setUser] = useState<User | undefined>(undefined)
  const [session, setSession] = useState<Session | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [authError, setAuthError] = useState<Error | null>(null)

  useEffect(() => {
    initUserSession()
    /**
     *  Supabase auth session listener to detect when user session changed
     */
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

  const clearSession = useCallback(() => {
    setUser(undefined)
    setSession(null)
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    setIsProcessing(true)
    try {
      const data = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (data.error) {
        setAuthError(data.error)
        return
      }
    } catch (error) {
      setAuthError(error)
    } finally {
      setIsProcessing(false)
    }
  }, [])

  const signUp = useCallback(
    async (email: string, password: string, _fullName?: string) => {
      setIsProcessing(true)
      try {
        const data = await supabase.auth.signUp({
          email,
          password,
        })
        if (data.error) {
          setAuthError(data.error)
          return
        }
      } catch (error) {
        setAuthError(error)
      } finally {
        setIsProcessing(false)
      }
    },
    []
  )

  const updatePassword = useCallback(async (email: string) => {
    setIsProcessing(true)
    try {
      const data = await supabase.auth.resetPasswordForEmail(email)
      if (data.error) {
        setAuthError(data.error)
        return
      }
    } catch (error) {
      setAuthError(error)
    } finally {
      setIsProcessing(false)
    }
  }, [])

  const logout = useCallback(async () => {
    setIsProcessing(true)
    try {
      const data = await supabase.auth.signOut()
      if (data.error) {
        setAuthError(data.error)
        return
      }
      clearSession()
    } catch (error) {
      setAuthError(error)
    } finally {
      setIsProcessing(false)
    }
  }, [clearSession])

  const deleteAccount = useCallback(
    async (userId: string) => {
      setIsProcessing(true)
      try {
        const data = await supabaseAdmin.auth.admin.deleteUser(userId)
        if (data.error) {
          setAuthError(data.error)
          return
        }
        clearSession()
      } catch (error) {
        setAuthError(error)
      } finally {
        setIsProcessing(false)
      }
    },
    [clearSession]
  )

  const initUserSession = async () => {
    setIsProcessing(true)
    try {
      const { data, error } = await supabase.auth.getSession()
      if (!error) {
        setSession(data.session)
        setUser(data.session?.user)
      }
      if (error) {
        setAuthError(error)
        return
      }
    } catch (error) {
      setAuthError(error)
    } finally {
      setIsProcessing(false)
    }
  }

  const contextValues = useMemo(
    () => ({
      session,
      login,
      user,
      signUp,
      logout,
      authError,
      isProcessing,
      updatePassword,
      deleteAccount,
    }),
    [
      authError,
      deleteAccount,
      isProcessing,
      login,
      logout,
      session,
      signUp,
      updatePassword,
      user,
    ]
  )

  return (
    <AuthenticationContext.Provider value={contextValues}>
      {children}
    </AuthenticationContext.Provider>
  )
}
