// UseSupabase.js
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

import { useAuthStore } from "@/stores/user";


const supabase = createClient(supabaseUrl, supabaseKey);


supabase.auth.onAuthStateChange((event, session) => {

    const user = useAuthStore();
    user.setUser = session?.user || null;

});


export default function useSupabase() {
    return { supabase };
}