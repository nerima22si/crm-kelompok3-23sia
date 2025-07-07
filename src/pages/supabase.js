import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ixnoryyewvmfzjkpqixk.supabase.co"

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4bm9yeXlld3ZtZnpqa3BxaXhrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTI2ODA2NSwiZXhwIjoyMDY2ODQ0MDY1fQ.oHuJZc-A2ZxjZ8Q9RU5dPveDEoBc1VIko8NybqcWa_g'

export const supabase = createClient(supabaseUrl, supabaseKey)