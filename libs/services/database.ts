import { DbDeleteDocs, DbGetDocs, DbSaveDocs, DbUpdateDocs } from 'libs/types'

const save = async <T>({ supabase, data, dbName }: DbSaveDocs<T>) => {
  const { data: result, error } = await supabase.from(dbName).insert(data)
  return {
    error,
    result,
  }
}

const update = async <T>({
  supabase,
  data,
  dbName,
  userId,
  rowId,
}: DbUpdateDocs<T>) => {
  const { data: result, error } = await supabase
    .from(dbName)
    .update(data)
    .eq('userId', userId)
    .eq('id', rowId)
  return {
    error,
    result,
  }
}

const get = async ({ supabase, dbName, userId, selectFrom }: DbGetDocs) => {
  const { data: result, error } = await supabase
    .from(dbName)
    .select(selectFrom.join(','))
    .eq('userId', userId)
    .order('id', {
      ascending: false,
    })
  return {
    error,
    result,
  }
}

const deleteItem = async ({
  supabase,
  dbName,
  rowId,
  userId,
}: DbDeleteDocs) => {
  const { data: result, error } = await supabase
    .from(dbName)
    .delete()
    .eq('id', rowId)
    .eq('userId', userId)
  return {
    error,
    result,
  }
}

export const database = {
  get,
  save,
  update,
  deleteItem,
}
