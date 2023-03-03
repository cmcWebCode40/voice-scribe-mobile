import React from 'react'
import { View } from 'react-native'

import { Modal } from 'components/molecules'

import { AddWords } from './AddWords'

type AddWordsModalProps = {
  isOpened: boolean
  onClose: () => void
}
export const AddWordsModal: React.FunctionComponent<AddWordsModalProps> = ({
  isOpened,
  onClose,
}) => {
  return (
    <View>
      <Modal title='Add' onClose={onClose} visible={isOpened}>
        <AddWords />
      </Modal>
    </View>
  )
}
