import { createClient } from '@supabase/supabase-js'
import { config } from 'libs/config'

export const supabaseAdmin = createClient(
  config.supaBaseURL,
  config.supaBaseServiceRole
)
