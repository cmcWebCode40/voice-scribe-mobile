import { SupabaseClient } from '@supabase/supabase-js'

export interface DbSaveDocs<T> {
  supabase: SupabaseClient
  data: T
  dbName: string
}

export interface DbUpdateDocs<T> {
  supabase: SupabaseClient
  data: T
  dbName: string
  userId: string
  rowId: string
}

export type DbGetDocs = {
  supabase: SupabaseClient
  dbName: string
  userId: string
  selectFrom: string[]
}

export type DbDeleteDocs = {
  supabase: SupabaseClient
  dbName: string
  rowId: string
  userId: string
}
