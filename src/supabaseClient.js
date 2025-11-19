import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://awhysmwzmrczpkidhvdq.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3aHlzbXd6bXJjenBraWRodmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1Njk2ODYsImV4cCI6MjA3OTE0NTY4Nn0.17IHvKo1KNa_YmrxGUKPcKqxWK91o1427a9EKinFIVQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
