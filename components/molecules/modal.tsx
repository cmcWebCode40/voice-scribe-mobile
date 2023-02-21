import { useThemedStyles } from 'libs/hooks'
import { Theme } from 'libs/theme'
import React from 'react'
import {
  Modal as UIModal,
  ModalProps,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'

import { Icon, Typographgy } from 'components/atoms'

type AppModalProps = {
  title?: string
  visible: boolean
  onClose: () => void
  children: React.ReactNode
} & ModalProps

const HIT_SLOP = {
  bottom: 20,
  left: 20,
  right: undefined,
  top: 50,
}

export const Modal = ({
  onClose,
  visible,
  children,
  title,
  ...rest
}: AppModalProps) => {
  const style = useThemedStyles(styles)
  return (
    <UIModal
      {...rest}
      animationType='slide'
      transparent={true}
      visible={visible}
      hitSlop={HIT_SLOP}
      onRequestClose={onClose}>
      <View style={style.container}>
        <View style={style.spacer} />
        <View style={style.centeredView}>
          <View style={style.header}>
            <Pressable onPress={onClose}>
              <Icon name='close' />
            </Pressable>
            {title && <Typographgy variant='h2'>{title}</Typographgy>}
            <View />
          </View>
          {title && <View style={style.divider} />}
          <View>{children}</View>
        </View>
      </View>
    </UIModal>
  )
}

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      bottom: 0,
      backgroundColor: theme.colors.gray100,
    },
    header: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    centeredView: {
      flex: 1,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      backgroundColor: theme.colors.white,
    },
    spacer: {
      marginTop: 64,
    },
    divider: {
      height: 0.4,
      backgroundColor: theme.colors.gray100,
    },
  })
}
