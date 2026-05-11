import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://ocbrzscqhltufxufvaqo.supabase.co'
// const supabaseKey = 'sb_publishable_NThH49LgX8OWKkazz9DvMw_p-7eCbhN'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
)