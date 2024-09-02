import { createClient } from "@supabase/supabase-js";

const Api = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseApiKey = import.meta.env.VITE_SUPABASE_API_KEY;

  const supabase = createClient(supabaseUrl, supabaseApiKey);

  return supabase;
};

export default Api;
