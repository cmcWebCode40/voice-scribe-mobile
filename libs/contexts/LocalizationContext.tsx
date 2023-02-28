import { Languages, SupportedLanguages } from 'libs/types'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type LocalizationContextProviderProps = {
  children: React.ReactNode
}

type LocalizationContextProps = {
  currentLanguage: SupportedLanguages | undefined
  handleLanguageChange: (arg: SupportedLanguages) => void
}

export const LocalizationContext =
  React.createContext<LocalizationContextProps>({
    currentLanguage: undefined,
    handleLanguageChange: (lang: SupportedLanguages) => lang,
  })

export const LocalizationContextProvider: React.FunctionComponent<
  LocalizationContextProviderProps
> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<
    SupportedLanguages | undefined
  >(undefined)
  const { i18n } = useTranslation()

  const handleLanguageChange = useCallback(
    (lang: SupportedLanguages) => {
      i18n.changeLanguage(lang)
    },
    [i18n]
  )
  useEffect(() => {
    //TODO: check for user previous setting from local storage
    i18n.changeLanguage(Languages.FRENCH)
    setCurrentLanguage(Languages.FRENCH)
  }, [i18n])

  return (
    <LocalizationContext.Provider
      value={{ currentLanguage, handleLanguageChange }}
    >
      {children}
    </LocalizationContext.Provider>
  )
}
