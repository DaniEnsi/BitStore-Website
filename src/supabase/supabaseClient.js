import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "YOUR URL"
const supabaseAnonKey = "YOUR ANON KEY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)