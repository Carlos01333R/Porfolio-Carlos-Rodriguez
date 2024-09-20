import { createClient } from "@supabase/supabase-js";

const Api = () => {
  const supabaseUrl = "https://lqjvbmbjznarzbhatfdr.supabase.co";
  const supabaseApiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxanZibWJqem5hcnpiaGF0ZmRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4OTAwOTUsImV4cCI6MjA0MDQ2NjA5NX0.w_k-KhpE6M0nqzzPgEDMilcCkEP3_58jxr-jYGO-X2U";

  const supabase = createClient(supabaseUrl, supabaseApiKey);

  return supabase;
};

export default Api;
