import { useState, useEffect, useCallback } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { WalletHero } from "@/components/wallet/WalletHero";
import { ExchangeForm } from "@/components/wallet/ExchangeForm";
import { RequestList } from "@/components/wallet/RequestList";
import { supabase } from "@/integrations/supabase/client";

// Generate or retrieve a session ID for the user
const getSessionId = () => {
  const stored = localStorage.getItem("diyama_session_id");
  if (stored) return stored;
  
  const newId = crypto.randomUUID();
  localStorage.setItem("diyama_session_id", newId);
  return newId;
};

interface ExchangeRequest {
  id: string;
  full_name: string;
  phone_number: string;
  usdc_amount: number;
  kwacha_amount: number;
  notes: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

const WalletExchange = () => {
  const [sessionId] = useState(getSessionId);
  const [requests, setRequests] = useState<ExchangeRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRequests = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("exchange_requests")
        .select("*")
        .eq("session_id", sessionId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRequests(data || []);
    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      setIsLoading(false);
    }
  }, [sessionId]);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  return (
    <MainLayout>
      <div className="px-4 pb-8 max-w-lg mx-auto">
        <WalletHero />
        
        <div className="space-y-8">
          <ExchangeForm sessionId={sessionId} onRequestCreated={fetchRequests} />
          <RequestList 
            requests={requests} 
            onRequestUpdated={fetchRequests} 
            isLoading={isLoading} 
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default WalletExchange;
