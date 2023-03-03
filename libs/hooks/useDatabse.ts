import { PostgrestError } from '@supabase/supabase-js'
import { WORDS_DB_COLLECTION } from 'libs/constants'
import { database, supabase } from 'libs/services'
import { ReaderFileInformation } from 'libs/types'
import { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { useAuth } from './useAuth'

export const useDatabse = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<ReaderFileInformation[] | null | any>(null)
  const [error, setError] = useState<Error | null | PostgrestError>(null)
  const { user } = useAuth()

  const get = useCallback(
    async (dbName: string, selectFrom: string[], id?: string | number) => {
      try {
        setIsLoading(true)

        const { data: result, error: dataError } = await database.get({
          supabase: supabase,
          dbName,
          userId: user?.id as string,
          selectFrom: selectFrom,
          id,
        })

        if (dataError) {
          setError(dataError)
          return
        }
        if (result && result.length) {
          setData(id ? result[0] : result)
        }
      } catch (catchError) {
        if (catchError instanceof Error) {
          Alert.alert(catchError.message)
        }
      } finally {
        setIsLoading(false)
      }
    },
    [user?.id]
  )
  const save = useCallback(
    async (dbName: string, item: ReaderFileInformation) => {
      const updatedData = {
        ...item,
        userId: user?.id,
      }
      try {
        setIsLoading(true)

        const { error: dataError } = await database.save<ReaderFileInformation>(
          {
            supabase: supabase,
            dbName,
            data: updatedData,
          }
        )
        if (dataError) {
          setError(dataError)
          return
        }
        await get(WORDS_DB_COLLECTION, ['*'])
      } catch (catchError) {
        if (catchError instanceof Error) {
          Alert.alert(catchError.message)
        }
      } finally {
        setIsLoading(false)
      }
    },
    [get, user?.id]
  )
  const deleteItem = useCallback(
    async (dbName: string, rowId: string) => {
      try {
        setIsLoading(true)

        const { error: dataError } = await database.deleteItem({
          supabase: supabase,
          dbName,
          rowId,
          userId: user?.id as string,
        })

        if (dataError) {
          setError(dataError)
          return
        }
        await get(WORDS_DB_COLLECTION, ['*'])
      } catch (catchError) {
        if (catchError instanceof Error) {
          Alert.alert(catchError.message)
        }
      } finally {
        setIsLoading(false)
      }
    },
    [get, user?.id]
  )
  const update = useCallback(
    async (dbName: string, item: ReaderFileInformation, rowId: string) => {
      try {
        setIsLoading(true)

        const { error: dataError } = await database.update({
          supabase: supabase,
          dbName,
          data: item,
          rowId,
          userId: user?.id as string,
        })

        if (dataError) {
          setError(dataError)
          return
        }
        await get(WORDS_DB_COLLECTION, ['*'])
      } catch (catchError) {
        if (catchError instanceof Error) {
          Alert.alert(catchError.message)
        }
      } finally {
        setIsLoading(false)
      }
    },
    [get, user?.id]
  )

  useEffect(() => {
    get(WORDS_DB_COLLECTION, ['*'])
  }, [get])

  return {
    get,
    save,
    data,
    error,
    update,
    deleteItem,
    isLoading,
  }
}
