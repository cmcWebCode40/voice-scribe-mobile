export type ReaderFileInformation = {
  id?: string
  title?: string
  duration?: string
  date?: string
  completed?: boolean
  words?: string
  userId?: string
  created_at?: string
  updated_at?: string
}

export type AddWordType = 'paste-text' | 'import-document' | undefined
