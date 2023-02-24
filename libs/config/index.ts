if (
  !process.env.REACT_NATIVE_SUPABASE_URL ||
  !process.env.REACT_NATIVE_SUPABASE_ANON_KEY ||
  !process.env.REACT_NATIVE_SUPABASE_SERVICE_ROLE
) {
  throw new Error(
    'Please ensure you have the supabase_url and supabase_anon_key environment variable set!'
  )
}

export const config = {
  supaBaseURL: process.env.REACT_NATIVE_SUPABASE_URL,
  supaBaseAnonKey: process.env.REACT_NATIVE_SUPABASE_ANON_KEY,
  supaBaseServiceRole: process.env.REACT_NATIVE_SUPABASE_SERVICE_ROLE as string,
}
