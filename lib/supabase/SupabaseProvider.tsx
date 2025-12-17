"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { useSession } from "@clerk/nextjs";

type SupabaseContextType = {
  supabase: SupabaseClient;
  isLoaded: boolean;
};

const SupabaseContext = createContext<SupabaseContextType | undefined>(
  undefined
);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session, isLoaded: sessionLoaded } = useSession();
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);

  useEffect(() => {
    const client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        accessToken: async () => session?.getToken() ?? null,
      }
    );
    setSupabase(client);
  }, [session]);

  if (!supabase || !sessionLoaded) {
    return (
      <div className="flex w-full h-screen justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <SupabaseContext.Provider value={{ supabase, isLoaded: true }}>
      {children}
    </SupabaseContext.Provider>
  );
}

export function useSupabase() {
  const context = useContext(SupabaseContext);
  if (!context)
    throw new Error("useSupabase must be used within SupabaseProvider");
  return context;
}
