import useSupabase from "@/config/supabaseClient";
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue';

export const databaseService = () => {

    const { supabase } = useSupabase();

    const create = async (table, _data) => {

        console.log(_data)

        const { error, data } = await supabase.from(table).insert(_data);

        if (error) {
            message.error(error.message)
            throw error
        } else {
            message.success('Create successfully')
            return data
        }

    }

    const read = async (table, id) => {
        const { data, error } = await supabase.from(table).select().eq('id', id);

        if (error) {
            message.error(error.message)
            throw error
        } else {
            return data
        }

    }

    const readAll = async (table) => {
        const { data, error } = await supabase.from(table).select();

        if (error) {
            message.error(error.message)
            throw error
        } else {
            return data
        }

    }

    const readAllWithWhere = async (table, where) => {
        const { data, error } = await supabase.from(table).select().eq(where.key, where.value);

        if (error) {
            message.error(error.message)
            throw error
        } else {
            return data
        }

    }

    const update = async (table, id, _data) => {
        const { error, data } = await supabase.from(table).update(_data).eq('id', id);

        if (error) {
            message.error(error.message)
            throw error
        } else {
            message.success('Update successfully')
            return data
        }

    }

    const remove = async (table, id) => {
        const { error, data } = await supabase.from(table).delete().eq('id', id);

        if (error) {
            message.error(error.message)
            throw error
        } else {
            message.success('Delete successfully')
            return data
        }

    }


    const readAllWithJoin = async (table, joinTables) => {
        const query = joinTables.reduce((acc, table) => `${acc},${table}(*)`, "*");
        const { data, error } = await supabase.from(table).select(query).order('created_at', { ascending: false });

        if (error) {
            message.error(error.message)
            throw error
        } else {
            return data
        }
    }

    const readRowWithJoin = async (table, joinTables, id) => {
        const query = joinTables.reduce((acc, table) => `${acc},${table}(*)`, "*");
        const { data, error } = await supabase.from(table).select(query).eq("id", id).single();

        console.log(data)

        if (error) {
            message.error(error.message)
            throw error
        } else {
            return data
        }
    }

    const readAllWithWhereWithJoin = async (table, joinTables, where) => {
        const query = joinTables.reduce((acc, table) => `${acc},${table}(*)`, "*");
        const { data, error } = await supabase.from(table).select(query).eq(where.key, where.value).order('created_at', { ascending: false })

        if (error) {
            message.error(error.message)
            throw error
        } else {
            return data
        }
    }

    return {
        create,
        read,
        readAll,
        update,
        remove,
        readAllWithJoin,
        readRowWithJoin,
        readAllWithWhere,
        readAllWithWhereWithJoin
    }
}



