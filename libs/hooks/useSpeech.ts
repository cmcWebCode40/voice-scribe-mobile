import * as Speech from 'expo-speech'
import { useCallback, useEffect, useState } from 'react'

export const useSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voices, setVoices] = useState<Speech.Voice[] | null>(null)
  const [maxAcceptedLength] = useState<number | null>(
    Speech.maxSpeechInputLength
  )

  const getAvailableVoices = useCallback(async () => {
    const vociesList = await Speech.getAvailableVoicesAsync()
    setVoices(vociesList)
  }, [])

  const checkIsSpeaking = useCallback(async () => {
    const data = await Speech.isSpeakingAsync()
    setIsSpeaking(data)
  }, [])

  useEffect(() => {
    checkIsSpeaking()
    getAvailableVoices()
  }, [checkIsSpeaking, getAvailableVoices])

  const start = useCallback((words: string, options?: Speech.SpeechOptions) => {
    Speech.speak(words, options)
    setIsSpeaking(true)
  }, [])

  /**
   * Interrupts current speech and deletes all in queue.
   */
  const stop = useCallback(async () => {
    await Speech.stop()
    setIsSpeaking(false)
  }, [])

  // Note: This method is currently not available on Android.
  const pause = useCallback(async () => {
    await Speech.pause()
  }, [])

  // Note: This method is currently not available on Android.
  const resume = useCallback(async () => {
    await Speech.resume()
  }, [])
  return {
    start,
    stop,
    resume,
    pause,
    isSpeaking,
    voices,
    checkIsSpeaking,
    maxAcceptedLength,
  }
}
