import 'react-native-url-polyfill/auto'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { config } from 'libs/config'

export const supabase = createClient(
  config.supaBaseURL,
  config.supaBaseAnonKey,
  {
    auth: {
      storage: AsyncStorage as typeof AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
)
