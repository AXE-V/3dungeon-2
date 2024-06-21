import { createClient } from '@supabase/supabase-js';
import { Database } from './interfaces/DatabaseGeneratedTypes';
import config from '../env.json' assert { type: 'json' };

const supabaseUrl = config.VITE_SUPABASE_URL;
const supabaseAnonKey = config.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
