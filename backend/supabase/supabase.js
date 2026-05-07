import { SupabaseClient } from "@supabase/supabase-js";


const supabase = await SupabaseClient(
    process.env.SUPABASE_URL, 
    process.env.SUPABASE_KEY 
);

export default supabase;