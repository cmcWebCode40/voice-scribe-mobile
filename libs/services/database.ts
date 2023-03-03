import { DbDeleteDocs, DbGetDocs, DbSaveDocs, DbUpdateDocs } from 'libs/types'

const save = async <T>({ supabase, data, dbName }: DbSaveDocs<T>) => {
  return await supabase.from(dbName).insert(data)
}

const update = async <T>({
  supabase,
  data,
  dbName,
  userId,
  rowId,
}: DbUpdateDocs<T>) => {
  return await supabase
    .from(dbName)
    .update(data)
    .eq('userId', userId)
    .eq('id', rowId)
}

const get = async ({ supabase, dbName, userId, selectFrom, id }: DbGetDocs) => {
  if (id) {
    return await supabase
      .from(dbName)
      .select(selectFrom.join(','))
      .eq('userId', userId)
      .eq('id', id)
  }
  return await supabase
    .from(dbName)
    .select(selectFrom.join(','))
    .eq('userId', userId)
    .order('id', {
      ascending: false,
    })
}
const deleteItem = async ({
  supabase,
  dbName,
  rowId,
  userId,
}: DbDeleteDocs) => {
  return await supabase
    .from(dbName)
    .delete()
    .eq('id', rowId)
    .eq('userId', userId)
}

export const database = {
  get,
  save,
  update,
  deleteItem,
}
