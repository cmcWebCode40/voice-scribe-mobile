import { RouteProp, useRoute } from '@react-navigation/native'
import { WORDS_DB_COLLECTION } from 'libs/constants'
import { useDatabse, useThemedStyles } from 'libs/hooks'
import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import { Typographgy } from 'components/atoms'
import {
  LoaderIndicator,
  NavigationHeader,
  WordPlayerControl,
} from 'components/molecules'
import { WordView } from 'components/organisms'

type ParamList = {
  route: { id: string | number }
}

export const WordReader: React.FunctionComponent = () => {
  const style = useThemedStyles(styles)
  const route = useRoute<RouteProp<ParamList, 'route'>>()
  const { get, data, isLoading } = useDatabse()
  useEffect(() => {
    get(WORDS_DB_COLLECTION, ['*'], route.params.id)
  }, [get, route.params.id])

  return (
    <SafeAreaView style={style.container}>
      <NavigationHeader IconType='back' />
      <View style={style.content}>
        {isLoading ? (
          <LoaderIndicator />
        ) : (
          <>
            {data ? (
              <>
                <View style={style.titleContainer}>
                  <Typographgy style={style.title} variant='h2'>
                    {data.title}
                  </Typographgy>
                  <Typographgy style={style.title} variant='p1'>
                    {data.duration}
                  </Typographgy>
                </View>
                <View>
                  <WordView words={data.words} />
                </View>
                <View>
                  <WordPlayerControl words={data.words} />
                </View>
              </>
            ) : (
              <Typographgy style={style.title} variant='h2'>
                No data
              </Typographgy>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    titleContainer: {},
    title: {},
    content: {
      flex: 1,
      padding: 16,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  })
}
