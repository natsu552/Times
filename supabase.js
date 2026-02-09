const SUPABASE_URL = "https://xanzzhfaftkkujgymivl.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhhbnp6aGZhZnRra3VqZ3ltaXZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0Nzk1MDgsImV4cCI6MjA4NjA1NTUwOH0.93LfbY7QLhG20V1hvpDpV6-b4lmgIZ5ZyaE6ln3H5fk";

window.supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);