import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Purpose: To initialize and export a Supabase client instance that can be used across your application to interact with your Supabase project.

// What We Did:
//     We imported the createClient function from @supabase/supabase-js.
//     We retrieved the Supabase URL and anon key from environment variables.
//     We created and exported a Supabase client using these credentials.