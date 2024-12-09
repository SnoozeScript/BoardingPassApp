import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gbxpagqpvpppjpmdsvqv.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdieHBhZ3FwdnBwcGpwbWRzdnF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2ODA2NzksImV4cCI6MjA0OTI1NjY3OX0.Y6jEu2FQ9Lw7i832C_iYMTUuHhCqcRPlWXo2DwEMI4c";

export const supabase = createClient(supabaseUrl, supabaseKey);
