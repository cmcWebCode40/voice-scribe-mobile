import { AddWordType } from 'libs/types'
import React from 'react'

import { AddWordsForm } from './AddWordsForm'
import { ImportDocument } from './ImportDocument'

type AddWordsCollectionType = {
  type: AddWordType
}
export const AddWordsCollectionType: React.FunctionComponent<
  AddWordsCollectionType
> = ({ type }) => {
  switch (type) {
    case 'paste-text':
      return <AddWordsForm />
    case 'import-document':
      return <ImportDocument />
    default:
      return <AddWordsForm />
  }
}
