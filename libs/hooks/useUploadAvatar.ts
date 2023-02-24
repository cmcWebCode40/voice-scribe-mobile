import {
  downloadProfileImage,
  supabase,
  uploadProfileImage,
} from 'libs/services'
import { useCallback, useState } from 'react'
import { Alert } from 'react-native'
import DocumentPicker, {
  isCancel,
  isInProgress,
  types,
} from 'react-native-document-picker'

export const useUploadAvatar = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined)
  const [uploading, setUploading] = useState(false)

  const loadImage = useCallback(async (path: string) => {
    try {
      const { data, error } = await downloadProfileImage(supabase, path)
      if (error) {
        throw error
      }

      const fr = new FileReader()
      fr.readAsDataURL(data)
      fr.onload = () => {
        setAvatarUrl(fr.result as string)
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error downloading image: ', error.message)
      }
    }
  }, [])
  const uploadAvatar = useCallback(async () => {
    try {
      setUploading(true)

      const file = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
        type: types.images,
        mode: 'open',
      })

      const photo = {
        uri: file.fileCopyUri,
        type: file.type,
        name: file.name,
      }

      const formData = new FormData()
      formData.append('file', photo as any)

      const fileExt = file.name.split('.').pop()
      const filePath = `${Math.random()}.${fileExt}`

      const { error } = await uploadProfileImage(supabase, filePath, formData)

      if (error) {
        throw error
      }
      return {
        filePath,
      }
    } catch (error) {
      if (isCancel(error)) {
        Alert.alert(' uploading image: ', 'cancelled')
        // User cancelled the picker, exit any dialogs or menus and move on
      } else if (isInProgress(error)) {
        Alert.alert(
          ' uploading image: ',
          'multiple pickers were opened, only the last will be considered'
        )
      } else if (error instanceof Error) {
        Alert.alert(error.message)
      } else {
        throw error
      }
    } finally {
      setUploading(false)
    }
  }, [])
  return {
    avatarUrl,
    loadImage,
    uploading,
    uploadAvatar,
  }
}
